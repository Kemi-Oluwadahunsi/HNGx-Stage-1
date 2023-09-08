// Get the current date
const currentDate = new Date();

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; //array for days of the week

const dayOfWeek = currentDate.getDay();

// Get the day name from the array
const dayName = dayNames[dayOfWeek];

// Display the day of the week in the DOM
const dayOfWeekElement = document.getElementById("dayOfTheWeek");
dayOfWeekElement.textContent = `Current Day Of The Week: ${dayName}`;

// Get UTC time in milliseconds

function updateTimeInMillisecs() {
    const millisecsElement = document.getElementById('milliseconds');
    const currentTimeMillis = new Date().getTime();
    millisecsElement.textContent = `UTC Time: ${currentTimeMillis}`;
  }

updateTimeInMillisecs();
setInterval(updateTimeInMillisecs, 1000);
