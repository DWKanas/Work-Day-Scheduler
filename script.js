var containerEl = $('.container')
var currentDayEl = $('#currentDay')
var currentHourMinute = moment().format();
var currentHour = currentHourMinute[11] + currentHourMinute[12];

console.log(currentHour)

currentDayEl.text(moment().format('LLL'));

// containerEl.on('click', 'button', )

function makeCalender() {
   for (var i = 9; i < 18; i ++) {
    var timeBlockEl = $('<div>')
    timeBlockEl.addClass('time-block')
    var hourContainerEl = $('<div>')
    hourContainerEl.addClass('hour')
    var rowEl = $('<div>')
    rowEl.addClass('row')
    var inputTextAreaEl = $('<textarea>')
    var saveButtonEl = $('<button>')
    saveButtonEl.addClass('saveBtn')
    saveButtonEl.attr('id', '${i}')

    containerEl.append(timeBlockEl)
    timeBlockEl.append(hourContainerEl)
    timeBlockEl.append(rowEl)
    rowEl.append(inputTextAreaEl)
    rowEl.append(saveButtonEl)

    console.log('test')

   }

}

function keepText() {
    for (var i = 9; i < 18; i ++) {
        if($(this).attr('id') === i) {
            localStorage.setItem('todo${i}', $(this).siblings().val())
        }
    }
}


// function 
makeCalender()