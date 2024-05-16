<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->unsignedBigInteger('category_id');
            $table->string('color', 30);
            $table->string('memory', 15);
            $table->string('RAM', 15);
            $table->string('chip', 100);
            $table->string('display_size', 30);
            $table->string('display_technology', 100);
            $table->string('battery', 20);
            $table->string('front_facing_camera', 100);
            $table->string('rear_facing_camera', 100);
            $table->integer('price');
            $table->integer('discount');
            $table->string('product_image', 500);
            $table->longText('description');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
