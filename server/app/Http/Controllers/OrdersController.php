<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\orders;

class OrdersController extends Controller
{
    public function index()
    {
        $orders = orders::all();
        return response()->json($orders);
    }

    public function show($id)
    {
        $order = orders::find($id);
        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }
        return response()->json($order);
    }

    public function store(Request $request)
    {
        $order = new orders;
        $order->user_id = $request->user_id;
        $order->order_date = $request->order_date;
        $order->status = $request->status;
        $order->total_money = $request->total_money;
        $order->save();

        return response()->json($order, 201);
    }

    public function update(Request $request, $id)
    {
        $order = orders::find($id);
        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }

        $validatedData = $request->validate([
            'status' => 'required|integer',  // Ensuring 'status' is required and is an integer
        ]);

        $order->status = $validatedData['status'];
        $order->save();

        return response()->json($order);
    }

    public function destroy($id)
    {
        $order = orders::find($id);
        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }

        $order->delete();
        return response()->json(['message' => 'Order deleted successfully']);
    }
}
