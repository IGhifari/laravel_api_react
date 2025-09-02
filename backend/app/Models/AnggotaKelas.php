<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AnggotaKelas extends Model
{
    protected $table = 'table_anggota_kelas';
    protected $fillable = ['judul', 'pengarang', 'penerbit'];
}
