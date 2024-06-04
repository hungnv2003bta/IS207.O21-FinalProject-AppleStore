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
        Schema::table('product_items', function (Blueprint $table) {
            $table->dropColumn('product_image'); // Drop the product_image column
            $table->string('SKU')->unique()->change(); // Change the SKU column to be unique
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('product_items', function (Blueprint $table) {
            $table->string('product_image', 500)->nullable(); // Add the product_image column back
            $table->integer('SKU')->change(); // Revert SKU back to integer and not unique
        });
    }
};
