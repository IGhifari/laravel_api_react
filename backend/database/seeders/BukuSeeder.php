<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BukuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('buku')->insert([
            [
                'judul' => 'Belajar Laravel',
                'pengarang' => 'John Doe',
                'penerbit' => 'Tech Books Publishing'
            ],
            [
                'judul' => 'Mastering React',
                'pengarang' => 'Jane Smith',
                'penerbit' => 'Web Dev Press'
            ],
            [
                'judul' => 'PHP for Beginners',
                'pengarang' => 'Alice Johnson',
                'penerbit' => 'Code World'
            ]
        ]);
    }
}
