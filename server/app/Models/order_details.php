<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order_details extends Model
{
    use HasFactory;

    protected $table = 'order_details';
    protected $primaryKey = 'id';
    protected $fillable = ['order_id', 'product_id', 'qty', 'price', 'total_money'];

    public function product()
    {
        return $this->belongsTo(product::class);
    }
    public function order()
    {
        return $this->belongsTo(orders::class);
    }
}
