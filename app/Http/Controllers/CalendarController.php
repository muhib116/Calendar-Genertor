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
        $calendar->settings = array_key_exists('settings', $data) ? json_encode($data['settings']) : json_encode([]);
        $calendar->save();

        return \Redirect::route('my_calendars');
    }

    function update(Request $request) {
        $data = $request->all();

        $payload = [];
        if($data['price']>0){
            $payload = [
                'price' => $data['price']
            ];
        }else{
            $payload = [
                'year' => $data['year'],
                'month' => $data['month'],
                'language' => $data['language'],
                'week' => $data['week'],
                'theme' => $data['theme'],
                'settings' => $data['settings'],
            ];
        }
        
        if(count($payload)){
            Calendar::where(['id' => $request->id])->where(['user_id' => $request->user_id])->update($payload);
        }

        return \Redirect::back();
    }

    function priceUpdate(Request $request) {
        $data = $request->all();
        $payload = [
            'price' => $data['price']
        ];
        
        if(count($payload)){
            Calendar::where(['id' => $request->id])->where(['user_id' => $request->user_id])->update($payload);
        }

        return \Redirect::back();
    }

    function delete($calendar_id){
        Calendar::where(['id' => $calendar_id])->delete();
        return redirect()->back();
    }

    function makeCalendarSalable(Request $request, $calendar_id){
        $calendar = Calendar::where(['id' => $calendar_id])->first();
        Calendar::where(['user_id' => $calendar->user_id])->update([
            'is_salable' => 0
        ]);

        Calendar::where(['id' => $calendar_id])->update([
            'is_salable' => 1
        ]);

        return \Redirect::back();
    }
}
