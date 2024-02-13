const disney = document.querySelector("#disney");

let disneyList = [];

let favoritesList = [];

const displayDisneyChar = (disneyChar) => {
    disney.innerHTML = "";
    
    disneyChar.forEach((character) => {
        const articleElement = document.createElement("article");

        const h3Element = document.createElement("h3");
        h3Element.innerText = character.name;

        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", character.imageUrl);
        imgElement.setAttribute("alt", character.name);

        const buttonElement = document.createElement("button");
        buttonElement.setAttribute("id", "favoritesButton");
        buttonElement.textContent = "Add to favorites";
        buttonElement.addEventListener("click", () => {
            favoritesList.push(character);
        })

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        articleElement.appendChild(buttonElement);

        disney.appendChild(articleElement);
    })
}

const getDisneyChar = async (charName) => {
    
    const response = await fetch(`https://api.disneyapi.dev/character?name=${charName}`);

    if (response.ok){
        const characters = await response.json();

        if (Array.isArray(characters.data)){
            disneyList = characters.data;
    } else {
        disneyList = [characters.data];
    }}

    displayDisneyChar(disneyList);    
}

const displayFavorites = (favorites) => {
    disney.innerHTML = "";

    favorites.forEach((character, index) => {
        const articleElement = document.createElement("article");

        const h3Element = document.createElement("h3");
        h3Element.innerText = character.name;

        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", character.imageUrl);
        imgElement.setAttribute("alt", character.name);

        const buttonElement = document.createElement("button");
        buttonElement.setAttribute("id", "removeButton");
        buttonElement.textContent = "Remove";
        buttonElement.addEventListener("click", () => {
            favoritesList.splice(index, 1);
        })

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        articleElement.appendChild(buttonElement);

        disney.appendChild(articleElement);
    })
}

document.getElementById("search").addEventListener("keydown", event => {
    if (event.key === "Enter") {
        let disneyCharacter = document.getElementById("search").value;
        getDisneyChar(disneyCharacter);
    }
})


document.querySelector("#searchButton").addEventListener("click", () => {
    let disneyCharacter = document.getElementById("search").value;
    getDisneyChar(disneyCharacter);
});

document.querySelector("#favoriteListButton").addEventListener("click", (displayFavorites(favoritesList)))