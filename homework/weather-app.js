//Feature #1
let today = new Date();
function formatDate() {
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekDays = days[today.getDay()];
  let displayToday = `${weekDays} ${hours}:${minutes}`;
  let dayTime = document.querySelector("p#day-time-weather");
  dayTime.innerHTML = displayToday;
  return displayToday;
}
console.log(formatDate());

//Feature #2
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}`;
  } else {
    h1.innerHTML = null;
    alert("Please enter a city.");
  }
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

//Feature #3 (bonus)
//Notes for later - clean this up if possible and make these links
//would also be fun to convert the emoji depending on the temperature...
function cToF(event) {
  event.preventDefault();
  let convertToF = document.querySelector("#degrees");
  convertToF.innerHTML = "19°";
}
let degreesSwitch = document.querySelector("#celsius");
degreesSwitch.addEventListener("click", cToF);

function fToC(event) {
  event.preventDefault();
  let convertToC = document.querySelector("#degrees");
  convertToC.innerHTML = "40°";
}
let degreesSwitchTwo = document.querySelector("#fahrenheit");
degreesSwitchTwo.addEventListener("click", fToC);
