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
        $user->address= $req->input('address');
        $user->password = Hash::make($req->input('password'));
        $user->role_id = $req->input('role_id');

        $user->save();
        return $user;
    }
}
