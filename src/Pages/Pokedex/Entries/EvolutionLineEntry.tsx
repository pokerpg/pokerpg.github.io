import {NavLink, useParams} from "react-router-dom";
import {pokedexEntries} from "../../../PokedexData/PokedexData/pokedexEntries";
import {KnownMoves, PokedexEntry, Pokemon} from "../../../Types/types";
import './EvolutionLineEntry.scss'
import {MoveTypeBlock} from "../../../Components/MoveTypeBlock/MoveTypeBlock";
import {PokemonImage} from "../../../Components/PokemonImage/PokemonImage";

export const EvolutionLineEntry = () =>{
    const { evolutionLine } = useParams();

    const findEvolutionLineByGeneration=(generations:Array<PokedexEntry>, input)=> {
        const names = input.split("-"); // Split the input string into individual Pokémon names

        // Iterate over each generation
        for (const generation of generations) {
            // Iterate over each evolution line within the current generation
            for (const evolutionLine of generation.evolutionLines) {
                // Check if the Pokémon names in the input match the names in the evolution line
                if (names.every((name:string) => evolutionLine.some((pokemon:Pokemon) => pokemon.pokeName === name))) {
                    return evolutionLine; // Return the matching evolution line
                }
            }
        }

        // Return null if no match is found
        return null;
    }

    const evolution:Pokemon[] = findEvolutionLineByGeneration(pokedexEntries,evolutionLine)

    //We'll be putting a lot of simple elements in this as a sandbox.
    return <section className={"pokedex-entry"}>
        <NavLink to="/pokedex">Back to Pokedex</NavLink>
                <h2>Trainer Name: </h2>
                <h2>{evolutionLine}</h2>

                    {evolution.map((pokemon:Pokemon)=>{
                        return <span>

                            {/*{JSON.stringify(pokemon)}*/}
                            <PokemonImage pokemon={pokemon}/>
                            {pokemon.pokemonTypes.map((type)=>{
                                return <MoveTypeBlock moveType={type}/>
                            })}

                            {pokemon.knownMoves.map((move:KnownMoves)=>{
                                return (<span>{move.level}:{move.name}</span>)
                            })}
                        </span>
                    })}

    </section>
}