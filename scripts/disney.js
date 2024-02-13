const disney = document.querySelector("#disney");

let disneyList = [];

const displayDisneyChar = (disneyChar) => {
    disney.innerHTML = "";
    
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