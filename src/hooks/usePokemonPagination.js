import { useState, useCallback } from 'react';
import { getPokemonList, getPokemonDetails } from '../services/api';

export const usePokemonPagination = (limit = 20) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const fetchPokemonPage = useCallback(async (currentOffset) => {
        try {
            const data = await getPokemonList(limit, currentOffset);
            if (!data?.results?.length) {
                setHasMore(false);
                return [];
            }

            const pokemonWithDetails = await Promise.all(
                data.results.map(processPokemonData(currentOffset))
            );

            return pokemonWithDetails.filter(Boolean);
        } catch (err) {
            console.error('Error fetching Pokémon page:', err);
            setError(err);
            return [];
        }
    }, [limit]);

    const loadMorePokemon = useCallback(async () => {
        if (loading || !hasMore) return;
        
        setLoading(true);
        const newOffset = offset + limit;
        const newPokemon = await fetchPokemonPage(newOffset);

        if (newPokemon.length > 0) {
            setPokemonList(prev => [...prev, ...newPokemon]);
            setOffset(newOffset);
        } else {
            setHasMore(false);
        }
        setLoading(false);
    }, [fetchPokemonPage, hasMore, limit, loading, offset]);

    const loadInitialData = useCallback(async () => {
        setLoading(true);
        const data = await fetchPokemonPage(0);
        setPokemonList(data);
        setLoading(false);
    }, [fetchPokemonPage]);

    return {
        pokemonList,
        loading,
        error,
        hasMore,
        loadMorePokemon,
        loadInitialData
    };
};

const processPokemonData = (currentOffset) => async (pokemon, index) => {
    try {
        const pokemonId = extractPokemonId(pokemon, currentOffset + index);
        const details = await getPokemonDetails(pokemon.name || pokemonId);
        
        return {
            ...pokemon,
            id: pokemonId,
            name: pokemon.name || `pokemon-${pokemonId}`,
            image: getPokemonImage(details, pokemonId),
            types: details?.types || []
        };
    } catch (err) {
        console.error(`Error processing ${pokemon?.name || 'pokemon'}:`, err);
        return createFallbackPokemon(pokemon, currentOffset + index);
    }
};

const extractPokemonId = (pokemon, fallbackIndex) => {
    if (pokemon?.url) {
        const parts = pokemon.url.split('/').filter(part => part);
        return parts[parts.length - 1];
    }
    return (fallbackIndex + 1).toString();
};

const getPokemonImage = (details, pokemonId) => {
    return details?.sprites?.other?.['official-artwork']?.front_default || 
           `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
};

const createFallbackPokemon = (pokemon, index) => ({
    ...pokemon,
    id: `unknown-${index}`,
    name: pokemon?.name || `pokemon-${index}`,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/0.png',
    types: []
});
