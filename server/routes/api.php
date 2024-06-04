<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductItemsController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::post('loginadmin', [UserController::class, 'loginAdmin']);
Route::post('addproduct', [ProductController::class, 'addProduct']);

Route::controller(UserController::class)->group(function () {
    Route::get('/users', 'index');
    Route::post('/users', 'store');
    Route::get('/users/{id}', 'show');
    Route::put('/users/{id}', 'update');
    Route::delete('/users/{id}', 'destroy');
    Route::get('/admin', 'getAdmin');
    Route::post('/change-password', 'changePassword');
});

Route::get('/products', [ProductController::class, 'getAllProducts']);
Route::get('/products/{id}', [ProductController::class, 'getProduct']);
Route::post('/products', [ProductController::class, 'addProduct']);
Route::put('/products/{id}', [ProductController::class, 'updateProduct']);
Route::delete('/products/{id}', [ProductController::class, 'deleteProduct']);

Route::get('/product-items', [ProductItemsController::class, 'getAllProductItems']);
Route::get('/product-items/{id}', [ProductItemsController::class, 'getProductItem']);
Route::post('/product-items', [ProductItemsController::class, 'addProductItem']);
Route::put('/product-items/{id}', [ProductItemsController::class, 'updateProductItem']);
Route::delete('/product-items/{id}', [ProductItemsController::class, 'deleteProductItem']);