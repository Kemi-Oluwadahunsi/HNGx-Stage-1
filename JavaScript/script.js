// Get the current date
const currentDate = new Date();

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; //array for days of the week

const dayOfWeek = currentDate.getDay();

// Get the day name from the array
const dayName = dayNames[dayOfWeek];

// Display the day of the week in the DOM
const dayOfWeekElement = document.getElementById("dayOfTheWeek");
dayOfWeekElement.textContent = dayName;


// Get the current time

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('hours').textContent = hours; // Get hour
    document.getElementById('minutes').textContent = minutes; // Get minutes
    document.getElementById('seconds').textContent = seconds; // Get seconds
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();
