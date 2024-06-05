<?php

namespace App\Http\Controllers;

use App\Models\order_details;
use Illuminate\Http\Request;

class OrderDetailsController extends Controller
{
    public function getOrderDetails($orderId)
    {
        try {
            $orderDetails = order_details::where('order_id', $orderId)->get();
            return response()->json($orderDetails);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to fetch order details.'], 500);
        }
    }
}
