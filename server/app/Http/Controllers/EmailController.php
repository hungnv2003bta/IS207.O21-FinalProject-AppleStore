<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\HelloMail; 
use App\Mail\ForgetPasswordMail;

class EmailController extends Controller
{
    public function sendWelcomeEmail(){
        $toEmail = '21522121@gm.uit.edu.vn';
        $message = 'Hello hung dz';
        $subject = 'Welcome to 6Tao Shop';

        $response = Mail::to($toEmail)->send(new HelloMail($message, $subject));

        dd($response);
    }

    public function sendForgetPasswordEmail(Request $request){
        $toEmail = $request->email;
        $message = $request->message;
        $subject = '6Tao Shop';

        $response = Mail::to($toEmail)->send(new ForgetPasswordMail($toEmail, $message, $subject));
        dd($response);
    }
}
