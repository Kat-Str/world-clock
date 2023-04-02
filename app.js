//warsaw variables
let warsaw = document.querySelector("#warsaw");
let warsawDate = warsaw.querySelector(".date");
let warsawTime = warsaw.querySelector(".time");

//shanghai variables
let shanghai = document.querySelector("#shanghai");
let shanghaiDate = shanghai.querySelector(".date");
let shanghaiTime = shanghai.querySelector(".time");

//sydney variables
let sydney = document.querySelector("#sydney");
let sydneyDate = sydney.querySelector(".date");
let sydneyTime = sydney.querySelector(".time");

//fill with real data
function displayRealTime() {
  warsawDate.innerHTML = moment().tz("Europe/Warsaw").format("D MMMM, dddd");
  warsawTime.innerHTML = moment().tz("Europe/Warsaw").format("H:mm:ss");
  shanghaiDate.innerHTML = moment().tz("Asia/Shanghai").format("D MMMM, dddd");
  shanghaiTime.innerHTML = moment().tz("Asia/Shanghai").format("H:mm:ss");
  sydneyDate.innerHTML = moment().tz("Australia/Sydney").format("D MMMM, dddd");
  sydneyTime.innerHTML = moment().tz("Australia/Sydney").format("H:mm:ss");
}

displayRealTime();
setInterval(displayRealTime, 1000);

//selected cities
let displayedCities = document.querySelector("#displayed-cities");
let cities = document.querySelector("#selected-cities");
let selectedCity;

function displaySelectedCity() {
  displayedCities.innerHTML = `<div class="row displayed-city">
          <div class="col section-one">
            <h2>
             ${selectedCity.replace("_", " ").split("/")[1]}
            </h2>
            <h3 class="date">${moment()
              .tz(selectedCity)
              .format("D MMMM, dddd")}</h3>
          </div>
          <div class="col section-two">
            <h3 class="time">${moment().tz(selectedCity).format("H:mm:ss")}</h3>
          </div>
        </div>`;
}

function setSelectedCity(response) {
  selectedCity = response.target.value;
  displaySelectedCity();
}

cities.addEventListener("change", setSelectedCity);
setInterval(displaySelectedCity, 1000);
