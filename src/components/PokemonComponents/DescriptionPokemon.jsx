export const DescriptionPokemon = ({ text = '', className = '' }) => {
    if (!text) return null;

    return (
        <p className={`text-gray-600 text-center italic ${className}`}>
            "{text}"
        </p>
    );
};