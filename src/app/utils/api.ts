
export const fetchPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    if (!response.ok) throw new Error('Failed to fetch Pokémon');
    const data = await response.json();
    return data.results;
  };
  
  export const fetchPokemonTypes = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/type');
    if (!response.ok) throw new Error('Failed to fetch Pokémon types');
    const data = await response.json();
    return data.results;
  };
  
  export const fetchPokemonDetails = async (name: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) throw new Error('Failed to fetch Pokémon details');
    return await response.json(); // Return the Pokémon details
  };
  