<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\products;
use App\Models\product_items;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{   

    public function getIdProduct(Request $req){

    }
    // add product
    public function addProduct(Request $req) {
        $product = new products;
        $product->name = $req->input('name');
        $product->category = $req->input('category');
        $product->color = $req->input('color');
        $product->memory = $req->input('memory');
        $product->RAM = $req->input('RAM');
        $product->chip = $req->input('chip');
        $product->display_size = $req->input('display_size');
        $product->display_technology = $req->input('display_technology');
        $product->battery = $req->input('battery');
        $product->front_facing_camera = $req->input('front_facing_camera');
        $product->rear_facing_camera = $req->input('rear_facing_camera');
        $product->price = $req->input('price');
        $product->discount = $req->input('discount');
        $product->description = $req->input('description');
        $product->product_image = $req->file('product_image')->store('products');
        $product->save();
        
        $productItems = new product_items;
        $productItems->product_id = $product->id;    
        $productItems->qty_in_stock = $req->input('qty_in_stock', 0); 
        $productItems->save(); 
        
        return response()->json([   
            'product' => $product,
            'productItems' => $productItems
        ], 201);
    }

    // Get all products
    public function getAllProducts() {
        $products = products::with('productItems')->get();
        return response()->json($products);
    }
    

    // Get a single product by ID
    public function getProduct($id) {
        $product = products::find($id);
        if ($product) {
            return response()->json($product);
        } else {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    // Update a product and its associated product items
    public function updateProduct(Request $req, $id) {
        $product = products::with('productItems')->find($id);
        if ($product) {
            $product->update($req->only([
                'name', 'category', 'color', 'memory', 'RAM', 'chip', 'display_size',
                'display_technology', 'battery', 'front_facing_camera',
                'rear_facing_camera', 'price', 'discount', 'description',
                'product_image'
            ]));

            // Update or create associated product_items
            if ($req->has('qty_in_stock')) {
                $productItemData = ['qty_in_stock' => $req->input('qty_in_stock')];
                if ($product->productItems) {
                    $product->productItems->update($productItemData);
                } else {
                    $product->productItems()->create($productItemData);
                }
            }
            return response()->json($product->load('productItems'));
        } else {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    // Delete a product
    // Delete a product and its related items
public function deleteProduct($id) {
    $product = products::with('productItems')->find($id);
    if ($product) {
        if ($product->product_image) {
            Storage::delete($product->product_image);
        }

        $product->productItems()->delete();

        $product->delete();
        return response()->json(['message' => 'Product and associated items deleted successfully']);
    } else {
        return response()->json(['message' => 'Product not found'], 404);
    }
}

}
