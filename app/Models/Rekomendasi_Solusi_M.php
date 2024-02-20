<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rekomendasi_Solusi_M extends Model
{
    use HasFactory;

    protected $table = 'rekomendasi_solusi';

    protected $fillable = [
        'penyakit_id', //foreign key
        'deskripsi_solusi',
    ];
}
