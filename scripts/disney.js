const disney = document.querySelector("#disney");

let disneyList = [];

const displayDisneyChar = (disneyChar) => {
    disneyChar.forEach((character) => {
        const articleElement = document.createElement("article");

        const h3Element = document.createElement("h3");
        h3Element.innerText = character.name;

        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", character.imageUrl);
        imgElement.setAttribute("alt", character.name);

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        disney.appendChild(articleElement);
    })
}

const getDisneyChar = async (charName) => {
    disney.innerHTML = "";
    
    const response = await fetch(`https://api.disneyapi.dev/character?name=${charName}`);

    if (response.ok){
        const characters = await response.json();

        disneyList = characters.data;
    }

    displayDisneyChar(disneyList);    
}


let disneyCharacter = document.getElementById("search").value;

document.querySelector("#searchButton").addEventListener("click", getDisneyChar(disneyCharacter));