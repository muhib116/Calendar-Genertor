<?php
use App\Http\Controllers\CalendarController;
use App\Http\Controllers\fileUploadController;
use Illuminate\Foundation\Application;
use Inertia\Inertia;
use App\Models\Calendar;

Route::get('/', function () {
    return Redirect::route('calendar');
})->middleware(['auth', 'verified'])->name('calendar');

Route::get('/calendar/create', function () {
    return Inertia::render('Calendar/create');
})->middleware(['auth', 'verified'])->name('calendar');

Route::get('/calendar/edit/{id?}', function ($id)
{
    $data = Calendar::where(['id' => $id])->first();
    return Inertia::render('Calendar/edit', ['data' => $data]);
})->middleware(['auth', 'verified'])->name('calendar.edit');

Route::get('/calendars', [CalendarController::class, 'index'])->middleware(['auth', 'verified'])->name('my_calendars');


Route::post('/save-calendar', [CalendarController::class, 'store'])
    ->middleware(['auth', 'verified'])
    ->name('calendar_save');

Route::post('/edit-calendar/{id}/{user_id}', [CalendarController::class, 'update'])
    ->middleware(['auth', 'verified'])
    ->name('calendar_update');

Route::post('/edit-calendar-price/{id}/{user_id}', [CalendarController::class, 'priceUpdate'])
    ->middleware(['auth', 'verified'])
    ->name('calendar_price_update');

Route::delete('/delete/{calendar_id}', [CalendarController::class, 'delete'])
    ->middleware(['auth', 'verified'])
    ->name('calendar_delete');

Route::post('/salable/{calendar_id}', [CalendarController::class, 'makeCalendarSalable'])
    ->middleware(['auth', 'verified'])
    ->name('salable');


Route::post('/file-upload', [fileUploadController::class, 'fileUpload'])
    ->middleware(['auth', 'verified'])
    ->name('file_upload');