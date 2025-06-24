import { ListPokemon } from "../components/ListPokemon";
export const Home = () => {
        return (
        <section className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-center mt-6 mb-6">Pokemon</h1>
            <ListPokemon />
        </section>
    )
}