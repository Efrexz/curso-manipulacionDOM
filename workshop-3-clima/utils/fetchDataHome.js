const URLHOME = "http://api.weatherapi.com/v1/current.json?q=London";
import { createInfoCard } from "../utils/createCards.js";



export async function fetchDataHome (){
    try{
        const response = await fetch(URLHOME,{
            headers:{
                "content-type": "application/json",
                "key": '036ea0fd2e8d47129d0204751232305'
            }
        });
        const data = await response.json();
        console.log(data);

        const cityNameHome = data.location.name;
        const countryName = data.location.country;
        const temperatureHome = data.current.temp_c;
        const iconHome = data.current.condition.icon;
        const infoHome = data.current.condition.text;

        createInfoCard({city: cityNameHome,country : countryName ,temp : temperatureHome,icon : iconHome,info : infoHome });
    }
    catch(error){
        console.log(error);
    }
}