
$(document).ready(function () {
  // Get the current date and time using Day.js
  var currentDate = dayjs().format('MMMM D, YYYY');
  var currentTime = dayjs().format('H'); // 24-hour format

//current date in the header
var currentDate = dayjs().format('MMMM D, YYYY');
document.getElementById('currentDay').textContent = currentDate;


// Get the current time, will make the past, present, and future section functionable 
var currentTime = new Date().getHours();

// Get all elements with the class "time-block"
var timeBlocks = document.querySelectorAll('.time-block');

// Loop through each time block
timeBlocks.forEach(function (timeBlock) {
  var blockId = timeBlock.id;
  var blockTime = parseInt(blockId.split('-')[1]);


  if (blockTime < currentTime) {
    timeBlock.classList.remove('future', 'present');
    timeBlock.classList.add('past');

  } else if (blockTime === currentTime) {
    timeBlock.classList.remove('past', 'future');
    timeBlock.classList.add('present');

  } else {
    timeBlock.classList.remove('past', 'present');
    timeBlock.classList.add('future');
  }
});


  // Function to save tasks to local storage
  function saveTask() {
    var blockId = $(this).parent().attr('id');
    var taskText = $(this).siblings('.description').val();

    localStorage.setItem(blockId, taskText);
  }

  // Load saved tasks from local storage
  //"this" reffering to the current "time-block"
  $('.time-block').each(function () {
    var blockId = $(this).attr('id');
    var savedTask = localStorage.getItem(blockId);

    if (savedTask) {
      $(this).find('.description').val(savedTask);
    }
  });

  // Add click event listeners to save buttons
  $('.saveBtn').on('click', saveTask);
});