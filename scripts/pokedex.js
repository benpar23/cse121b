const pokemon = document.querySelector("#pokemon");

let pokemonList = [];

const getPokedex = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokedex/2");

    if (response.ok){
        const list = await response.json();

        pokemonList = await list;
    }

    console.log(pokemonList);
}

const getPokemon = async () => {
    const entries = pokemonList.pokemon_entries;

    
}