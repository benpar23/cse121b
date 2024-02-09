const disney = document.querySelector("#disney");

let disneyList = [];

const getDisneyChar = async (charName) => {
    const response = await fetch(`https://api.disneyapi.dev/character?name=${charName}`);

    if (response.ok){
        const character = await response.json();

        disneyList.push(character);
    }

    console.log(disneyList);
}
