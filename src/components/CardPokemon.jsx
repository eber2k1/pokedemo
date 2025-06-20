import { Link } from 'react-router-dom';

export const CardPokemon = ({name, image, types, id}) => {
    return(
        <Link to={`/pokemon/${id}`} className="block">
            <section className="card p-4 border border-gray-200 rounded shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <h1 className="text-2xl font-bold"> #{id} {name}</h1>
                <img className="w-24 h-24 mx-auto" src={image} alt={name} />
                <p className="text-gray-600 font-bold text-center">{types.join(' / ')}</p>
            </section>
        </Link>
    )
}