export const PokemonDetails = ({ weight, height }) => {
    return (
        <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-500 mb-2">Peso</h3>
                <p className="text-lg font-semibold">{(weight / 10).toFixed(1)} kg</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-500 mb-2">Altura</h3>
                <p className="text-lg font-semibold">{(height / 10).toFixed(1)} m</p>
            </div>
        </div>
    );
};