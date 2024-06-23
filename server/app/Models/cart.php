<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cart extends Model
{
    use HasFactory;

    protected $table = 'cart';
    protected $primaryKey = 'id';
    protected $fillable = ['user_id', 'product_id', 'qty', 'total_money'];

    public function products()
    {
        return $this->hasMany(products::class);;
    }
    public function orders()
    {
        return $this->belongsTo(users::class);
    }

    public $timestamps = false;
}
