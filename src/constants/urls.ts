const pokemons = 'https://pokeapi.co/api/v2/pokemon';

const urls = {
    pokemons,
    pokemon: (id: string) => `${pokemons}/${id}`,
}

export {urls}