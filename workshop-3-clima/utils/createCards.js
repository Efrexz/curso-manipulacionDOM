const $CARDSCONTAINER = document.querySelector(".info-cards");


/*              <div class="card">
                    <h3>Ciudad</h3>
                    <h1>47°C</h1>
                    <img src="../icons/clima.png" alt="clima">
                    <p>Nubes Dispersas</p>
                </div>*/

export function createInfoCard({city,country,temp,icon,info}){
    const card = document.createElement("div");
    card.className = "card";

    const cityName = document.createElement("h3");
    cityName.innerText = city;
    const countryName = document.createElement("h3");
    countryName.innerText = country
    const temperature = document.createElement("h1");
    temperature.innerText = `${temp}°`;
    const weatherIcon = document.createElement("img");
    weatherIcon.src = icon;
    const information = document.createElement("p");
    information.innerText = info;

    card.append(cityName,countryName,temperature,weatherIcon,information);
    $CARDSCONTAINER.innerHTML = "";
    $CARDSCONTAINER.appendChild(card)
}