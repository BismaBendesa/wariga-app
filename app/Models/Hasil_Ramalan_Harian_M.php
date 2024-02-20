<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hasil_Ramalan_Harian_M extends Model
{
    use HasFactory;

    protected $table = 'hasil_ramalan_harian';

    protected $fillable = [ 
        'user_id', //foreign key
        'tanggal_sekarang',
        'kategori_bekel',
        'hal_baik',
        'hal_buruk',
    ];


}