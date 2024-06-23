<?php

namespace App\Http\Controllers;
use App\Models\cart;

use Illuminate\Http\Request;

class CartController extends Controller
{
    public function addToCart(Request $request)
{
    $request->validate([
        'user_id' => 'required|integer|exists:users,id',
        'product_id' => 'required|integer|exists:products,id',
        'qty' => 'required|integer|min:1',
        'total_money' => 'required|string|max:100',
    ]);

    $cartItem = cart::where('user_id', $request->user_id)
                    ->where('product_id', $request->product_id)
                    ->first();

    if ($cartItem) {
        $cartItem->qty += $request->qty;
        $cartItem->total_money = $request->total_money * $cartItem->qty;
        $cartItem->save();
        return response()->json(['message' => 'Quantity updated in cart successfully!'], 200);
    } else {
        // If the item does not exist, create a new cart item
        $cart = new cart();
        $cart->user_id = $request->user_id;
        $cart->product_id = $request->product_id;
        $cart->qty = $request->qty;
        $cart->total_money = $request->total_money;
        $cart->save();
        return response()->json(['message' => 'Product added to cart successfully!'], 200);
    }
}   
    public function getCartItems($id)
    {
        $cartItems = cart::where('user_id', $id)->get();

        return response()->json(['cartItems' => $cartItems]);
    }

    public function removeFromCart($id) // You can type-hint $id directly here if you're sure it's always an integer
    {
        $cartItem = cart::find($id);

        if ($cartItem) {
            $cartItem->delete();
            return response()->json(['message' => 'Item removed from cart successfully'], 200);
        }

        return response()->json(['message' => 'Item not found'], 404);
    }

    // function to get number of items in cart
    public function getCartItemsCount($id)
    {
        $cartItems = cart::where('user_id', $id)->count();

        return response()->json(['cartItemsCount' => $cartItems]);
    }
}
