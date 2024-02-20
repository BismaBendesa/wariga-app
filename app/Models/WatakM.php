<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WatakM extends Model
{
    protected $table = 'watak';

    protected $fillable = [
        'hasil_ramalan_pribadi_id',
        'deskripsi_watak',
    ];
}