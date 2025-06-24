import {CardPokemon} from "./CardPokemon";
import { getPokemonList } from "../services/api";
import { useEffect, useState } from "react";
export const ListPokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchPokemonList = async () => {
            setLoading(true);
            try {
                const data = await getPokemonList();
                setPokemonList(data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchPokemonList();
    }, []);
    
    return (
        <div>
            {loading && <p className="text-2xl font-bold">Loading...</p>}
            {error && <p className="text-2xl font-bold">Error: {error.message}</p>}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
            {pokemonList.map((pokemon) => (
                    <CardPokemon
                        key={pokemon.name}
                        id={pokemon.id}
                        name={pokemon.name} 
                        image={pokemon.image}
                        types={pokemon.types}
                    />
            ))}
            </div>
        </div>
    )
}