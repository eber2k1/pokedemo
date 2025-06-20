import { DetailsPokemon } from "../components/DetailsPokemon";
import { useParams } from "react-router-dom";

export const PokemonPage = () => {
    const { id } = useParams();
    return (
        <DetailsPokemon id={id} />
    );
};