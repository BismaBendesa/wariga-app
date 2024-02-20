<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KarakterM extends Model
{
    use HasFactory;

    protected $table = 'karakter';

    protected $fillable = [
        'hasil_ramalan_pribadi_id', //foreign key
        'deskripsi_karakter',
        'jenis_karakter',
    ];

}
