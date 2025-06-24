import { Link } from 'react-router-dom';
import { PokemonImage } from './PokemonComponents/PokemonImage';
import { TypesPokemon } from './PokemonComponents/TypesPokemon';

export const CardPokemon = ({name, image, types, id}) => {
    return(
        <Link to={`/pokemon/${id}`} className="block h-full">
            <section className="card h-full p-4 border border-gray-200 rounded shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex flex-col">
                <h1 className="text-2xl font-bold truncate">#{id} {name}</h1>
                <div className="flex-grow flex items-center justify-center my-2">
                    <PokemonImage 
                        src={image} 
                        alt={name} 
                        width={96}
                        height={96}
                    />
                </div>
                <TypesPokemon types={types} />
            </section>
        </Link>
    )
}