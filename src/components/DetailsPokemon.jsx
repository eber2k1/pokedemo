import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PokemonImage } from './PokemonComponents/PokemonImage';
import { TypesPokemon } from './PokemonComponents/TypesPokemon';
import { DescriptionPokemon } from './PokemonComponents/DescriptionPokemon';
import { StatsPokemon } from './PokemonComponents/StatsPokemon';
import { PokemonDetails } from './PokemonComponents/PokemonDetails';
import { AbilitiesPokemon } from './PokemonComponents/AbilitiesPokemon';
import { getPokemonDetails, getPokemonSpecies } from '../services/api';

export const DetailsPokemon = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState(null);
    const [species, setSpecies] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const description = species?.flavor_text_entries?.find(entry => entry.language.name === 'es')?.flavor_text || '';

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
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-t-blue-500 border-blue-300 rounded-full animate-spin mx-auto"></div>
                    <p className="mt-4 text-xl font-bold text-gray-700">Cargando Pokémon...</p>
                </div>
            </div>
        );
    }

    if (error || !pokemon) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-6">
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">¡Oops! Algo salió mal</h1>
                    <p className="text-gray-600 mb-6">No pudimos cargar la información del Pokémon. Intenta de nuevo más tarde.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Volver al Inicio
                    </button>
                </div>
            </div>
        );
    }
    
    return (
        <div className={`min-h-screen bg-gray-100 pb-12`}>
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                    >
                        <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Atrás
                    </button>
                    <h1 className="text-3xl font-bold text-gray-800 capitalize">{pokemon.name}</h1>
                    <span className="text-gray-600">#{String(pokemon.id).padStart(3, '0')}</span>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Image Section */}
                    <div className={`p-6 flex justify-center`}>
                        <PokemonImage 
                            src={pokemon.sprites.other['official-artwork'].front_default} 
                            alt={pokemon.name}
                            width={256}
                            height={256}
                        />
                    </div>

                    {/* Info Section */}
                    <div className="p-6">
                        {/* Types */}
                        <div className="mb-6">
                            <TypesPokemon types={pokemon.types} />
                        </div>

                        {/* Description */}
                        <DescriptionPokemon text={description} className="mb-6" />

                        {/* Stats */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-4 text-gray-800">Estadísticas Base</h2>
                            <StatsPokemon stats={pokemon.stats} />
                        </div>

                        {/* Details */}
                        <PokemonDetails weight={pokemon.weight} height={pokemon.height} />

                        {/* Abilities */}
                        <AbilitiesPokemon abilities={pokemon.abilities} />
                    </div>
                </div>
            </div>
        </div>
    );
};