<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hitungan_Segitiga_M extends Model
{
    use HasFactory;

    protected $table = 'hitungan_segitiga';

    protected $fillable = [
        'hasil_ramalan_pribadi_id', //foreign key 
        'kategori_mental',
        'core_number',
        'future_number',
    ];
}
