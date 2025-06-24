export const StatsPokemon = ({ stats = [] }) => {
    if (!stats || stats.length === 0) return null;

    const statNames = {
        hp: 'HP',
        attack: 'Ataque',
        defense: 'Defensa',
        'special-attack': 'Ataque Especial',
        'special-defense': 'Defensa Especial',
        speed: 'Velocidad'
    };

    const getStatBarWidth = (baseStat) => {
        const maxStat = 255; // Valor máximo posible en las estadísticas base de Pokémon
        return Math.min(100, (baseStat / maxStat) * 100);
    };

    const getStatBarColor = (value) => {
        if (value < 40) return 'bg-red-500';
        if (value < 60) return 'bg-yellow-400';
        if (value < 80) return 'bg-green-400';
        return 'bg-green-600';
    };

    return (
        <div className="space-y-3 w-full">
            <h3 className="font-bold text-gray-500">Estadísticas Base</h3>
            {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700 capitalize">
                            {statNames[stat.stat.name] || stat.stat.name}:
                        </span>
                        <span className="font-bold">{stat.base_stat}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                            className={`h-full rounded-full ${getStatBarColor(stat.base_stat)}`}
                            style={{ width: `${getStatBarWidth(stat.base_stat)}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};