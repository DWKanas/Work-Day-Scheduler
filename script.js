var containerEl = $('.container')
var currentDayEl = $('#currentDay')
var currentHourMinute = moment().format();
var currentHour = currentHourMinute[11] + currentHourMinute[12];

console.log(currentHour)

currentDayEl.text(moment().format('LLL'));


function makeCalender() {
    var timeBlockEl = $('<div>')
    timeBlockEl.addclass('time-block')
    var hourContainerEl = $('<div>')
    hourContainerEl.addclass('hour')
    var rowEl = $('<div>')
    rowEl.addclass('row')

}