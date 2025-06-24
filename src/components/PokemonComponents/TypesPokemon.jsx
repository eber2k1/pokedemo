export const TypesPokemon = ({ types = [] }) => {
    if (!types || types.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-2 justify-center">
            {types.map((type, index) => (
                <span 
                    key={index}
                    className="px-4 py-1 rounded-full text-white font-medium text-sm capitalize"
                    style={{ backgroundColor: `var(--color-${type.type.name})` }}
                >
                    {type.type.name}
                </span>
            ))}
        </div>
    );
};