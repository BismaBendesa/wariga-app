<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tanggal_Lahir_M extends Model
{
    use HasFactory;

    protected $table = 'tanggal_lahir';

    protected $fillable = [
        'eka_wara',
        'dwi_wara',
        'tri_wara',
        'catur_wara',
        'panca_wara',
        'sad_wara',
        'sapta_wara',
        'asta_wara',
        'sanga_wara',
        'dasa_wara',
        'wuku',
        'kategori_wayang',
    ];
}
