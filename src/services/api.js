// API URL constante
const API_URL = 'https://pokeapi.co/api/v2';

// Función para obtener la lista de Pokémon
export const getPokemonList = async (limit = 20, offset = 0) => {
  try {
    const response = await fetch(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`);
    if (!response.ok) throw new Error('Failed to fetch Pokémon list');
    const data = await response.json();
    
    // Obtener detalles de cada Pokémon en la lista
    const pokemonWithDetails = await Promise.all(
      data.results.map(async (pokemon) => {
        const details = await getPokemonDetails(pokemon.name);
        return {
          id: details.id,
          name: pokemon.name,
          image: details.sprites.other['official-artwork'].front_default,
          types: details.types.map(typeInfo => typeInfo.type.name),
        };
      })
    );
    
    return {
      count: data.count,
      next: data.next,
      previous: data.previous,
      results: pokemonWithDetails
    };
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);
    throw error;
  }
};

// Función para obtener los detalles de un Pokémon
export const getPokemonDetails = async (identifier) => {
  try {
    const response = await fetch(`${API_URL}/pokemon/${identifier}`);
    if (!response.ok) throw new Error(`Failed to fetch details for ${identifier}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching details for ${identifier}:`, error);
    throw error;
  }
};


// Función para obtener la información de la especie de un Pokémon
export const getPokemonSpecies = async (identifier) => {
  try {
    const response = await fetch(`${API_URL}/pokemon-species/${identifier}`);
    if (!response.ok) throw new Error(`Failed to fetch species for ${identifier}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching species for ${identifier}:`, error);
    throw error;
  }
};

// Función para buscar Pokémon por nombre
export const searchPokemon = async (query) => {
  try {
    const allPokemon = await fetch(`${API_URL}/pokemon?limit=1000`).then(res => res.json());
    const matches = allPokemon.results.filter(pokemon => 
      pokemon.name.includes(query.toLowerCase())
    );
    return Promise.all(matches.map(pokemon => getPokemonDetails(pokemon.name)));
  } catch (error) {
    console.error('Error searching Pokémon:', error);
    throw error;
  }
};