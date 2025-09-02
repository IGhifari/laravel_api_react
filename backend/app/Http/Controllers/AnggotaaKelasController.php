<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AnggotaKelas;
class AnggotaaKelasController extends Controller
{
    public function index()
    {
        $anggotaKelas = AnggotaKelas::all();
        return response()->json($anggotaKelas);
    }
}
