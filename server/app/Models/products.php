<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;

    protected $table = 'products';
    protected $primaryKey = 'id';
    protected $filltable = ['category_id', 'color', 'memory', 'RAM', 'chip', 'display_size', 'display_technology', 'battery', 'front_facing_camera', 'rear_facing_camera', 'price', 'discount', 'product_image', 'description'];

    public function category()
    {  
        return $this->belongsTo(category::class);
    }
    public function product_items()
    {
        return $this->hasMany(product_items::class);
    }
    public function order_details()
    {
        return $this->hasMany(order_details::class);
    }
}
