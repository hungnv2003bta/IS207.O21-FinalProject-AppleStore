<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order_details extends Model
{
    use HasFactory;

    protected $table = 'order_details';
    protected $primaryKey = 'id';
    protected $fillable = ['order_id', 'product_id', 'price', 'qty', 'total_money'];

    public function products()
    {
        return $this->belongsTo(products::class);
    }
    public function orders()
    {
        return $this->belongsTo(orders::class);
    }
}
