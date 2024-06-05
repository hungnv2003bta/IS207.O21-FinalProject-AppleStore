<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class orders extends Model
{
    use HasFactory;

    protected $table = 'orders';
    protected $primaryKey = 'id';
    protected $fillable = ['user_id', 'note', 'order_date', 'status', 'total_money', 'address'];

    public function users()
    {
        return $this->belongsTo(users::class);
    }
    public $timestamps = false;
}
