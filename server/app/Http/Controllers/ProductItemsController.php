<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product_items;

class ProductItemsController extends Controller
{
    // Get all product items
    public function getAllProductItems() {
        $items = product_items::all();
        return response()->json($items);
    }       
    
    // Get a single product item by ID
    public function getProductItem($id) {
        $item = product_items::find($id);
        if ($item) {
            return response()->json($item);
        } else {
            return response()->json(['message' => 'Product Item not found'], 404);
        }
    }
    // Add a product item
    public function addProductItem(Request $req) {
        $validatedData = $req->validate([
            'product_id' => 'required|integer|exists:products,id',
            'qty_in_stock' => 'required|integer'
        ]);

        $productItem = new product_items;
        $productItem->product_id = $validatedData['product_id'];
        $productItem->qty_in_stock = $validatedData['qty_in_stock'];
        $productItem->save();

        return response()->json($productItem, 201);
    }

    // Update a product item
    public function updateProductItem(Request $req, $id) {
        $validatedData = $req->validate([
            'product_id' => 'integer|exists:products,id',
            'qty_in_stock' => 'integer'
        ]);

        $item = product_items::find($id);
        if ($item) {
            $item->update([
                'product_id' => $req->input('product_id', $item->product_id),
                'qty_in_stock' => $req->input('qty_in_stock', $item->qty_in_stock),
            ]);
            return response()->json($item);
        } else {
            return response()->json(['message' => 'Product Item not found'], 404);
        }
    }

    // Delete a product item
    public function deleteProductItem($id) {
        $item = product_items::find($id);
        if ($item) {
            $item->delete();
            return response()->json(['message' => 'Product Item deleted successfully']);
        } else {
            return response()->json(['message' => 'Product Item not found'], 404);
        }
    }
}
