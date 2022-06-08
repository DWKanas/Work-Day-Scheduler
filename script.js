// grabbed existing html and css elements and put them in a variable
var containerEl = $('.container')
var currentDayEl = $('#currentDay')
var currentHourMinute = moment().format();
var currentHour = currentHourMinute[11] + currentHourMinute[12];


// display current time in a certain format
currentDayEl.text(moment().format('LLL'));


function makeCalender() {
   for (var i = 9; i < 18; i ++) {
       var timeBlockEl = $('<div>')   //making divs and adding css classes to them to be manipulated
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
       
       
       
       
       
       containerEl.append(timeBlockEl);  // adding all the conatainers and divs together
       timeBlockEl.append(hourContainerEl);
       timeBlockEl.append(rowEl)
       rowEl.append(inputTextAreaEl);
       rowEl.append(saveButtonEl);
       
       setHour(i, hourContainerEl)  //set the hour and color when they change
       setColor(i, inputTextAreaEl)
       
       
       saveButtonEl.on('click', 'button', keepText)
       
    }
    
}

// function for keeping text in local storage
function keepText() {
    for (var i = 9; i < 18; i ++) {
        if($(this).attr('id') === i) {
            localStorage.setItem('todo${i}', $(this).siblings().val())
            
        }
    }
}
// function for setting the hour
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
// function for setting the color
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

// running the entire function
makeCalender()