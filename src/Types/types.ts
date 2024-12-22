export type Pokemon = {
    pokeNumber:number;
    pokeName: string;
    pokemonTypes: PokemonType[];
    knownMoves:any[]; // TODO Update any to be a real typescript type
    evolutionLevel?:number;
    iconUrl: string;
    source: string;
};

export type PokemonType = "normal" | "fire" | "water" | "electric" |
    "grass" | "ice" | "fighting" | "poison" | "ground" |
    "flying" | "psychic" | "bug" | "rock" | "ghost" |
    "dragon" | "dark" | "steel" | "fairy";

export type PokedexEntry = {
    generation:number;
    evolutionLines:Array<Pokemon[]>,
}


export type PokemonMove = {
    name: string;
    damage?: `${number}d${number}`; // Matches the "int-d-int" pattern (e.g., "1d8", "2d10").
    moveType: PokemonType;
    category: "Physical" | "Special" | "Status";
    description: string;
    additionalEffects?: string[];
    range?: string; // Specifies range of the move, e.g., "Melee", "Ranged", specific distances.
    keywords?: string[]; // Additional tags, e.g., "priority", "area-of-effect", "healing".
};