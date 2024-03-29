// Selecting DOM elements to display the time and date components
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const monthElement = document.querySelector(".month");
const dayElement = document.querySelector(".day");
const dayNoElement = document.querySelector(".dayNo");
const yearElement = document.querySelector(".year");

// Arrays containing names for days of the week and months for easy reference
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Function to update the clock display on the webpage
const updateClockDisplay = () => {
  // Create a new Date object to get the current date and time
  const now = new Date();

  // Retrieve the current day and month using the Date object
  let day = dayNames[now.getDay()];
  let month = monthNames[now.getMonth()];
  let year = now.getFullYear();

  // Format hours, minutes, and seconds to ensure they are always displayed as two digits
  let hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
  let minute =
    now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
  let second =
    now.getSeconds() < 10 ? `0${now.getSeconds()}` : `${now.getSeconds()}`;

    let dayNo = now.getDate() < 10 ? `0${now.getDate()}` : `${now.getDate()}`;

  // Update the HTML content of the selected elements with the current time and date
  yearElement.innerHTML = year;
  monthElement.innerHTML = month;
  dayElement.innerHTML = day;
  dayNoElement.innerHTML = dayNo;
  hourElement.innerHTML = hour;
  minuteElement.innerHTML = minute;
  secondElement.innerHTML = second;
};

// Set an interval to call the updateClockDisplay function every 1000 milliseconds (1 second)
// This ensures the clock on the webpage is updated in real time
setInterval(updateClockDisplay, 1000);

const date2 = new Date();

console.log();
