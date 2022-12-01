<?php

use App\Http\Controllers\CalendarController;
use Illuminate\Foundation\Application;
use Inertia\Inertia;

Route::get('/calendar/create', function () {
    return Inertia::render('Calendar/create');
})->middleware(['auth', 'verified'])->name('calendar');

Route::get('/calendars', [CalendarController::class, 'index'])->middleware(['auth', 'verified'])->name('my_calendars');




Route::post('/save-calendar', [CalendarController::class, 'store'])
    ->middleware(['auth', 'verified'])
    ->name('calendar_save');