<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product_items extends Model 
{
    use HasFactory;

    protected $table = 'product_items';
    protected $primaryKey = 'id';
    protected $fillable= ['product_id', 'qty_in_stock'];

    public function product()
    {
        return $this->belongsTo(products::class, 'product_id');
    }

    

    public $timestamps = false;
}
