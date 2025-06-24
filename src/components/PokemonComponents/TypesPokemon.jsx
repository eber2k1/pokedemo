import { colors } from '../../utils/ColorType';


export const TypesPokemon = ({ types = [] }) => {
    if (!types || types.length === 0) return null;

    // Función para obtener la clase de color según el tipo de Pokémon
    const getTypeColor = (typeName) => {
        return colors[typeName] || 'bg-gray-400'; // Color por defecto si no se encuentra el tipo
    };

    return (
        <div className="flex flex-wrap gap-2 justify-center">
            {types.map((type, index) => {
                // type puede ser un string o un objeto con { type: { name: string } }
                const typeName = typeof type === 'string' ? type : type?.type?.name;
                if (!typeName) return null;
                
                const colorClass = getTypeColor(typeName);
                
                return (
                    <span 
                        key={index}
                        className={`px-4 py-1 rounded-full text-white font-medium text-sm capitalize ${colorClass}`}
                    >
                        {typeName}
                    </span>
                );
            })}
        </div>
    );
};