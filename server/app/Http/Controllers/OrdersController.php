<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\orders;
use Carbon\Carbon;
use App\Models\order_details;

class OrdersController extends Controller
{
    // Get all orders
    public function index()
    {
        $orders = orders::all();
        return response()->json($orders);
    }

    // Get a specific order
    public function show($id)
    {
        $order = orders::find($id);
        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }
        return response()->json($order);
    }

    // Create a new order
    public function store(Request $request)
{
    $order = new orders;
    $order->user_id = $request->user_id;
    $order->order_date = Carbon::now()->toDateString();
    $order->status = $request->status;
    $order->total_money = $request->total_money;
    $order->address = $request->address;
    $order->save();

    foreach ($request->cartItems as $item) {
        $orderDetail = new order_details;
        $orderDetail->order_id = $order->id;
        $orderDetail->product_id = $item['product_id'];
        $orderDetail->price = $item['price'];
        $orderDetail->qty = $item['qty'];
        $orderDetail->total_money = $item['total_money'];
        $orderDetail->save();
    }

    return response()->json($order, 201);
}

    // Update an existing order
    public function update(Request $request, $id)
    {
        $order = orders::find($id);
        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }

        $validatedData = $request->validate([
            'status' => 'required|integer', 
        ]);

        $order->status = $validatedData['status'];
        $order->save();

        return response()->json($order);
    }

    // Delete an order
    public function destroy($id)
    {
        $order = orders::find($id);
        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }

        $order->delete();
        return response()->json(['message' => 'Order deleted successfully']);
    }

    // get order with user id
    public function getOrderByUserId($id)
    {
        $orders = orders::where('user_id', $id)->get();
        return response()->json($orders);
    }
}
