import {Pokemon} from "../../Types/types";

type PokemonImageProps ={
    pokemon:Pokemon;
}

export const PokemonImage = ({pokemon}:PokemonImageProps) => {
    return <img
        src={pokemon.iconUrl}
        alt={pokemon.pokeName}
        style={{marginTop: '-5px', height: '50px', width: '50px'}}
    />
}