<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hasil_Ramalan_Pribadi_M extends Model
{
    use HasFactory;
    
    protected $table = 'hasil_ramalan_pribadi';

    protected $fillable = [
        'user_id', //foreign key 
        'deskripsi_ramalan',
        
    ];
}