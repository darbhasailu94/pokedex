import { writable } from "svelte/store";

export const pokemon = writable([]);

const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=100`;
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data)
    const loadedPokemon = data.results.map((data:any, index: number) => {
        return {
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ index + 1 }.png`
        };
    });
    pokemon.set(loadedPokemon);
}
fetchPokemon();