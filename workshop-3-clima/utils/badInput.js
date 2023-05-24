const $CARDSCONTAINER = document.querySelector(".info-cards");


export function errorInput(){
    const container = document.createElement("div");
    container.className = "container404";
    const imgError = document.createElement("img");
    imgError.className = "img404";
    imgError.src = "../icons/error.png";
    const errorMessage = document.createElement("h1");
    errorMessage.innerText = "No matching location found.";

    $CARDSCONTAINER.innerHTML = "";
    container.append(errorMessage,imgError);
    $CARDSCONTAINER.append(container);
}

