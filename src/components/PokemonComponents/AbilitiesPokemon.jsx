export const AbilitiesPokemon = ({ abilities = [] }) => {
    if (!abilities || abilities.length === 0) return null;

    return (
        <div className="mt-6">
            <h3 className="font-bold text-gray-500 mb-2">Habilidades</h3>
            <div className="flex flex-wrap gap-2">
                {abilities.map((ability, index) => (
                    <span 
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm capitalize"
                    >
                        {ability.ability.name.replace(/-/g, ' ')}
                    </span>
                ))}
            </div>
        </div>
    );
};