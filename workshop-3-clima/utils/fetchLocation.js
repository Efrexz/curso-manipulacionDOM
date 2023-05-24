const URLBASE = "http://api.weatherapi.com/v1/current.json";
import { createInfoCard } from "../utils/createCards.js";
import { errorInput } from "./badInput.js";


export async function fetchDataByLocation (location){
    try{
        const response = await fetch(`${URLBASE}?q=${location}`,{
            headers:{
                "content-type": "application/json",
                "key": '036ea0fd2e8d47129d0204751232305'
            }
        });
        const data = await response.json();
        console.log(data);

        const cityName = data.location.name;
        const countryName = data.location.country;
        const temperature = data.current.temp_c;
        const iconLocation = data.current.condition.icon;
        const infoLocation = data.current.condition.text;

        createInfoCard({city: cityName,country : countryName,temp : temperature,icon : iconLocation,info : infoLocation });
    }
    catch(error){
        errorInput(error.message)
    }
}