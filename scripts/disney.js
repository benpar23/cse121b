const disney = document.querySelector("#disney");

let disneyList = [];

const getDisneyChar = async () => {
    const response = await fetch("https://api.disneyapi.dev/character?pageSize=1000");

    if (response.ok){
        const list = await response.json();

        disneyList = await list;
    }

    console.log(disneyList);
}

const getCharacter = async () => {
    const entries = disneyList;

    
}