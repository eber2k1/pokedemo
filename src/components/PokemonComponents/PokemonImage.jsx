export const PokemonImage = ({ 
    src, 
    alt, 
    width = 256, 
    height = 256,
    className = '' 
}) => {
    const handleImageError = (e) => {
        e.target.src = '/pokebola-loading.png';
    };

    return (
        <img 
            src={src || '/pokebola-loading.png'}
            alt={alt || 'Pokemon'}
            className={`object-contain ${className}`}
            style={{ width: `${width}px`, height: `${height}px` }}
            onError={handleImageError}
        />
    );
};