<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Tanggal_Lahir_M;
use Illuminate\Http\Request;

class TanggalLahirController extends Controller
{
    public function getAll(){
        $data = Tanggal_Lahir_M::get();
        return response()->json([
            'success' => true,
            'data' => $data,
            'message' => 'anjay mau',
        ], 200);
    }
}
