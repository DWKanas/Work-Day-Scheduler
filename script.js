var containerEl = $('.container')
var currentDayEl = $('#currentDay')
var currentHourMinute = moment().format();
var currentHour = currentHourMinute[11] + currentHourMinute[12];

console.log(currentHour)

currentDayEl.text(moment().format('LLL'));


function makeCalender() {
   for (var i = 9; i < 18; i ++) {
       var timeBlockEl = $('<div>')
       timeBlockEl.addClass('time-block')
       var hourContainerEl = $('<div>')
       hourContainerEl.addClass('hour')
       var rowEl = $('<div>')
       rowEl.addClass('row')
       var inputTextAreaEl = $('<textarea>')
       inputTextAreaEl.text(localStorage.getItem(`todo${i}`) || '');
       var saveButtonEl = $('<button>')
       saveButtonEl.addClass('saveBtn')
       saveButtonEl.attr('id', '${i}')
       
       
       
       
       
       containerEl.append(timeBlockEl);
       timeBlockEl.append(hourContainerEl);
       timeBlockEl.append(rowEl)
       rowEl.append(inputTextAreaEl);
       rowEl.append(saveButtonEl);
       
       setHour(i, hourContainerEl)
       setColor(i, inputTextAreaEl)
       
       console.log('test')
       saveButtonEl.on('click', 'button', keepText)
       
    }
    
}


function keepText() {
    for (var i = 9; i < 18; i ++) {
        if($(this).attr('id') === i) {
            localStorage.setItem('todo${i}', $(this).siblings().val())
            console.log("keeptext ran")
        }
    }
}

function setHour(hour, hourEl) {
    if (hour < 12) {
        hourEl.text(hour + "am")

    }
    else if (hour === 12) {
        hourEl.text(hour + "pm")
    }
    else {
        hourEl.text(hour-12 + "pm")
    }
}  

function setColor(i, inputTextAreaEl) {
    if (i < currentHour) {
        inputTextAreaEl.addClass('past')
    }
    else if (i === currentHour) {
        inputTextAreaEl.addClass('present')
    }
    else {
        inputTextAreaEl.addClass('future')
    }
}


makeCalender()