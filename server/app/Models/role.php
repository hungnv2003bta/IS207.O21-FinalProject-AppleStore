<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class role extends Model
{
    use HasFactory;

    protected $table = 'table';
    protected $primaryKey = 'id';
    protected $fillable = ['name'];

    public function users()
    {
        return $this->hasMany(users::class);
    }
}
