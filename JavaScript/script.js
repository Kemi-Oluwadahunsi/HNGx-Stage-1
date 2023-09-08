// Get the current date
const currentDate = new Date();

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; //array for days of the week

const dayOfWeek = currentDate.getDay();

// Get the day name from the array
const dayName = dayNames[dayOfWeek];

// Display the day of the week in the DOM
const dayOfWeekElement = document.getElementById("dayOfTheWeek");
dayOfWeekElement.textContent = `Current Day : ${dayName}`;

function updateTime() {
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update the time every 100 milliseconds
setInterval(updateTime, 100);

// Initial call to display the time
updateTime();

function updateTimeInMillisecs() {
    const millisecsElement = document.getElementById('milliseconds');
    const currentTimeMillis = new Date().getTime();
    millisecsElement.textContent = `${currentTimeMillis}`;
  }

  // Update the time initially and then every second
  updateTimeInMillisecs();
  setInterval(updateTimeInMillisecs, 1000);
