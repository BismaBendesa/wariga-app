<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PenyakitM extends Model
{
    use HasFactory;
    
    protected $table = 'penyakit';

    protected $fillable = [
        'hasil_ramalan_pribadi_id', //foreign key
        'nama_penyakit',
        'deskripsi_penyakit',
        'gejala_penyakit',
    ];
}
