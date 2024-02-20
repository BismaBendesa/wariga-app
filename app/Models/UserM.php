<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserM extends Model
{
    use HasFactory;

    protected $table = 'user';

    protected $fillable = [
        'username',
        'email',
        'password',
        'tanggal_lahir',
        'jenis_kelamin',
        'kode_tanggal_bali',
    ];
    
    protected $primaryKey = 'user_id';
}
