<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->string('note', 500)->nullable();
            $table->dateTime('order_date');
            $table->integer('status');
            $table->integer('total_money');
            $table->string('address',255) ;
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
