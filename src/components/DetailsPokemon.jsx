import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPokemonDetails, getPokemonSpecies } from '../services/api';

export const DetailsPokemon = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [species, setSpecies] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                setLoading(true);
                const [pokemonData, speciesData] = await Promise.all([
                    getPokemonDetails(id),
                    getPokemonSpecies(id)
                ]);
                setPokemon(pokemonData);
                setSpecies(speciesData);
            } catch (err) {
                setError(err);
                console.error('Error fetching Pokémon details:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonData();
    }, [id]);
    
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-2xl font-bold">Cargando...</p>
            </div>
        );
    }

    if (error || !pokemon) {
        return (
            <div className="text-center p-8">
                <h1 className="text-2xl font-bold text-red-600">Error al cargar el Pokémon</h1>
                <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
                    Volver al inicio
                </Link>
            </div>
        );
    }
    
    return (
        <div>
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
            <p>{pokemon.types.map(type => type.type.name).join(', ')}</p>
            <p>{pokemon.weight / 10} kg</p>
            <p>{pokemon.height / 10} m</p>
            <p>{species.flavor_text_entries.find(entry => entry.language.name === 'es').flavor_text}</p>
        </div>
    )
}