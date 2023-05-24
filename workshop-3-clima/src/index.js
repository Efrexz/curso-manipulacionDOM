const URLBASE = "http://api.weatherapi.com/v1/current.json?q=London";
import { fetchDataHome } from "../utils/fetchDataHome.js";
import { fetchDataByLocation } from "../utils/fetchLocation.js";

const locationInput= document.querySelector("#locationInput");
const btnLocation = document.querySelector("#btnLocation");
console.log(locationInput.value);

btnLocation.addEventListener("click", () => fetchDataByLocation(locationInput.value));


fetchDataHome();