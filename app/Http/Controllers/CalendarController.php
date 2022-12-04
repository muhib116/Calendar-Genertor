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

    function update(Request $request) {
        $data = $request->all();

        $payload = [
            'year' => $data['year'],
            'month' => $data['month'],
            'language' => $data['language'],
            'week' => $data['week'],
            'theme' => $data['theme'],
            'settings' => json_encode($data['settings']),
        ];
        
        Calendar::where(['id' => $request->id])->where(['user_id' => $request->user_id])->update($payload);

        return \Redirect::back();
    }
}
