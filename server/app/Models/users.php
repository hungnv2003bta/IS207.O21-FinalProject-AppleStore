<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class users extends Model
{
    use HasFactory;

    protected $table = 'users';
    protected $primaryKey = 'id';
    protected $fillable = ['name', 'email', 'phone_number', 'address', 'password', 'role_id'];

    public function role()
    {
        return $this->belongsTo(role::class);
    }
    public function orders()
    {
        return $this->hasMany(orders::class);
    }
    public function feedbacks()
    {
        return $this->hasMany(feedbacks::class);
    }

    public $timestamps = false;
}