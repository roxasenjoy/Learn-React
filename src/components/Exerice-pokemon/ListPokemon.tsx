import { ItemPokemon } from "./pokemon/ItemPokemon";

export function ListPokemon(props: {pokemons: any}){

    const pokemonsList = [];

    // Créer une boucle FOR pour afficher la liste de tous les pokemons
    for(let pokemon of props.pokemons){
        pokemonsList.push(<ItemPokemon key={pokemon.id} pokemon={pokemon}></ItemPokemon>);
    }

    return (
        <div className="container-fluid mt-3">
            <div className="row justify-content-center">
                {pokemonsList}
            </div>
        </div>
    );
    

}