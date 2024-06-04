<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\users;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        $users = users::all();
        return response()->json($users);
    }

    public function register(Request $req)
    {
        $user = new users();
        $user->name = $req->input('name');
        $user->email = $req->input('email');
        $user->phone_number = $req->input('phone_number');
        $user->password = Hash::make($req->input('password'));
        $user->role_id = $req->input('role_id', 1);

        $user->save();
        return $user;
    }
    function login(Request $req){
        $user = users::where('email', $req->email)->first();
        if (!$user || !Hash::check($req->password, $user->password)) {
            return ['error' => 'Email hoặc mật khẩu không đúng!!'];
        }
        return $user;
    }

    function loginAdmin(Request $req){
        $user = users::where('email', $req->input('email'))->first();

        if (!$user || $req->input('password') !== $user->password) {
            return response()->json(['error' => 'Email hoặc mật khẩu không đúng!!'], 401);
        }
        if ($user->role_id != 0) {
            return response()->json(['error' => 'Bạn không phải là admin!!'], 403);
        }
        
        return $user;
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:100',
            'email' => 'required|email|max:150|unique:users',
            'phone_number' => 'required|unique:users|max:20',
            'password' => 'required|min:6|max:80',
            'role_id' => 'sometimes|integer'
        ]);

        $user = users::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'phone_number' => $validatedData['phone_number'],
            'password' => bcrypt($validatedData['password']),
            'role_id' => $validatedData['role_id'] ?? 1  // Default to 1 if not provided
        ]);

        return response()->json($user, 201);
    }

    public function show($id)
    {
        $user = users::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        return response()->json($user);
    }

    public function update(Request $request, $id)
    {
        $user = users::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $validatedData = $request->validate([
            'name' => 'sometimes|max:100',
            'email' => 'sometimes|email|max:150|unique:users,email,' . $id,
            'phone_number' => 'sometimes|unique:users,phone_number,' . $id . '|max:20',
            'password' => 'sometimes|min:6|max:80',
            'role_id' => 'sometimes|integer'
        ]);

        $user->update($validatedData);
        return response()->json($user);
    }

    public function destroy($id)
    {
        $user = users::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        $user->delete();
        return response()->json(['message' => 'User deleted'], 200);
    }
    
    public function getAdmin()
    {
        $admin = users::where('role_id', 0)->first();
        if ($admin) {
            return response()->json($admin);
        } else {
            return response()->json(['message' => 'Admin not found'], 404);
        }
    }

    public function changePassword(Request $request)
    {

        $request->validate([
            'email' => 'required|email',
            'oldPassword' => 'required',
            'newPassword' => 'required',
        ]);

        // Find the user by email
        $user = users::where('email', $request->input('email'))->first();

        if (!$user || $request->input('oldPassword') !== $user->password) {
            return response()->json(['error' => 'Mật khẩu không đúng!!'], 401);
        }

        $user->password = $request->input('newPassword');
        $user->save();

        return response()->json(['message' => 'Password successfully updated']);
    }



}
