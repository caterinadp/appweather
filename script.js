//Format Date & Time
let now = new Date();
let FormattedDate = document.querySelector("#date");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "Jan",
  "Feb",
  "March",
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

let date = now.getDate();
let year = now.getFullYear();
let month = months[new Date().getMonth()];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

FormattedDate.innerHTML = `${day} ${date} ${month} ${year}, ${hours}:${minutes}`;

//Format Location

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let input = document.querySelector("#input");
  input.innerHTML = input.value;
  let apiKey = "bd3bb6534458ba51b48c49f5155745b6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}`).then(showTemp);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function showTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = `${temp}°C`;
  let h1 = document.querySelector("#current-city");
  h1.innerHTML = response.data.name;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function currentTemp(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "bd3bb6534458ba51b48c49f5155745b6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showTemp);
}
function currentTempButton(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentTemp);
}

let click = document.querySelector("#currentTemp");
click.addEventListener("click", currentTempButton);

const generateQuote = function () {
  const quotes = [
    {
      quote:
        "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
      author: "Albus Dumbledore",
    },
    {
      quote: "It is impossible to manufacture or imitate love",
      author: "Horace Slughorn",
    },
    {
      quote:
        "Being different isn't a bad thing. I means that you are brave enough to be yourself.",
      author: "Luna Lovegood",
    },
    {
      quote:
        "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
      author: "Sirius Black",
    },
    {
      quote:
        "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
      author: "Arthur Weasley",
    },
    {
      quote: "Every human life is worth the same, and worth saving.",
      author: "Kingsley Shacklebolt",
    },
    {
      quote: "Have a biscuit, Potter.",
      author: "Minerva McGonagall",
    },
    {
      quote:
        "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
      author: "Albus Dumbledore",
    },
    {
      quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
      author: "Dobby",
    },
  ];

  let arrayIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
  document.getElementById("author").innerHTML = quotes[arrayIndex].author;
};
window.onload = function () {
  generateQuote();
  document.getElementById("generate").addEventListener("click", generateQuote);
};
