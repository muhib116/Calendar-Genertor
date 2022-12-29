<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\fileUploadController;
use App\Http\Controllers\CalendarController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('media/{id}', [fileUploadController::class, 'media']);
Route::delete('media/delete/{id}/{user_id}', [fileUploadController::class, 'mediaDelete']);


Route::post('/edit-calendar/{id}/{user_id}', [CalendarController::class, 'update'])->name('calendar_update');