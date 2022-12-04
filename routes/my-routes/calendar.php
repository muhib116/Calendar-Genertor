<?php
use App\Http\Controllers\CalendarController;
use App\Http\Controllers\fileUploadController;
use Illuminate\Foundation\Application;
use Inertia\Inertia;
use App\Models\Calendar;

Route::get('/calendar/create', function () {
    return Inertia::render('Calendar/create');
})->middleware(['auth', 'verified'])->name('calendar');

Route::get('/calendar/edit/{id?}', function ($id)
{
    $data = Calendar::where(['id' => $id])->first();
    return Inertia::render('Calendar/edit', ['data' => $data]);
})->middleware(['auth', 'verified'])->name('calendar');

Route::get('/calendars', [CalendarController::class, 'index'])->middleware(['auth', 'verified'])->name('my_calendars');


Route::post('/save-calendar', [CalendarController::class, 'store'])
    ->middleware(['auth', 'verified'])
    ->name('calendar_save');

Route::post('/edit-calendar/{id}/{user_id}', [CalendarController::class, 'update'])
    ->middleware(['auth', 'verified'])
    ->name('calendar_update');


Route::post('/file-upload', [fileUploadController::class, 'fileUpload'])
    ->middleware(['auth', 'verified'])
    ->name('file_upload');