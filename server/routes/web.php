<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use App\Mail\HelloMail;
use App\Http\Controllers\EmailController;

Route::get('/', function () {
    return view('welcome');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});

Route::resource('/users', 'App\Http\Controllers\UserController');
// Route::resource('products', 'App\Http\Controllers\Products');

Route::get('send-hello-email', [EmailController::class, 'sendWelcomeEmail']);
Route::get('send-forget-password-email', [EmailController::class, 'sendForgetPasswordEmail']);