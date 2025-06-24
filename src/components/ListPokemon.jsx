import { useEffect } from 'react';
import { CardPokemon } from "./CardPokemon";
import { LoadingSpinner } from "./ui/LoadingSpinner";
import { ErrorMessage } from "./ui/ErrorMessage";
import { usePokemonPagination } from "../hooks/usePokemonPagination";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const ListPokemon = () => {
    const {
        pokemonList,
        loading,
        error,
        hasMore,
        loadMorePokemon,
        loadInitialData
    } = usePokemonPagination(20); // 20 Pokémon por página

    // Configurar scroll infinito
    useInfiniteScroll(loadMorePokemon, loading, hasMore);

    // Cargar datos iniciales
    useEffect(() => {
        loadInitialData();
    }, [loadInitialData]);

    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {pokemonList.map((pokemon) => (
                    <CardPokemon
                        key={`${pokemon.id}-${pokemon.name}`}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        types={pokemon.types}
                    />
                ))}
            </div>

            {loading && <LoadingSpinner />}
            {error && <ErrorMessage message="Error al cargar más Pokémon. Intenta de nuevo." />}
            
            {!loading && !hasMore && pokemonList.length > 0 && (
                <div className="text-center my-4 text-gray-500">
                    Has llegado al final de la lista de Pokémon.
                </div>
            )}
        </div>
    );
};