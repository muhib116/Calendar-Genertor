<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Calendar;
use Inertia\Inertia;

class CalendarController extends Controller
{
    function index(Request $request) {
        $calendars = Calendar::where(['user_id' => $request->user()->id])->get();
        
        return Inertia::render('Calendar/list', compact('calendars'));
    }

    function store(Request $request) {
        $data = $request->all();
        $calendar = new Calendar;
        $calendar->user_id = $data['user_id'];
        $calendar->year = $data['year'];
        $calendar->month = $data['month'];
        $calendar->language = $data['language'];
        $calendar->week = $data['week'];
        $calendar->theme = $data['theme'];
        $calendar->settings = json_encode($data['settings']);
        $calendar->save();

        return \Redirect::route('my_calendars');
    }
}
