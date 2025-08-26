<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BukuController;

Route::get("/databuku",[BukuController::class, "index"])->name("databuku.index");
Route::post("/buku",[BukuController::class, "store"])->name("databuku.store");
?>
