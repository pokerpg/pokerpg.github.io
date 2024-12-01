//THESE WILL MATCH THE 'FIELD' OBJECTS WITHIN THE POKEDEXTABLECOLUMNS.
export type RowData = {
    pokeNumber:number;
    pokeName: string;
    evolutionLevel?:number;
    iconUrl: string;
    source: string;
};

export type RowDatabase={
    generation:number;
    evolutionLines:Array<RowData[]>,
}
//The Pokemon Data we care about! https://pokemondb.net/sprites
//TODO: Evolution lines should be what the table uses.
//TODO: Tab to switch between generations.

export const pokedexTableRows: Array<RowDatabase> = [
    {generation:1,
    evolutionLines:[
        [{
            pokeNumber: 1,
            pokeName: "Bulbasaur",
            evolutionLevel:16,
            source: "https://pokemondb.net/pokedex/bulbasaur",
            iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/bulbasaur.png",
        },
        {
            pokeNumber: 2,
            pokeName: "Ivysaur",
            evolutionLevel:32,
            source: "https://pokemondb.net/pokedex/ivysaur",
            iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/ivysaur.png"
        },
        {
            pokeNumber: 3,
            pokeName: "Venusaur",
            source: "https://pokemondb.net/pokedex/venusaur",
            iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/venusaur.png"
        },
        ],[
            {
                pokeNumber: 4,
                pokeName: "Charmander",
                evolutionLevel:16,
                source: "https://pokemondb.net/pokedex/charmander",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/charmander.png"
            },
            {
                pokeNumber: 5,
                pokeName: "Charmeleon",
                evolutionLevel:32,
                source: "https://pokemondb.net/pokedex/charmeleon",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/charmeleon.png"
            },
            {
                pokeNumber: 6,
                pokeName: "Charizard",
                source: "https://pokemondb.net/pokedex/charizard",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/charizard.png"
            },
            ],[
            {
                pokeNumber: 7,
                pokeName: "Squirtle",
                evolutionLevel:16,
                source: "https://pokemondb.net/pokedex/squirtle",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/squirtle.png"
            },
            {
                pokeNumber: 8,
                pokeName: "Wartortle",
                evolutionLevel:32,
                source: "https://pokemondb.net/pokedex/wartortle",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/wartortle.png"
            },
            {
                pokeNumber: 9,
                pokeName: "Blastoise",
                source: "https://pokemondb.net/pokedex/blastoise",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/blastoise.png"
            }],
            [{
                pokeNumber: 10,
                pokeName: "Caterpie",
                evolutionLevel:7,
                source: "https://pokemondb.net/pokedex/caterpie",
                iconUrl: "https://img.pokemondb.net/sprites/red-blue/normal/caterpie.png"
            },
            {
                pokeNumber: 11,
                pokeName: "Metapod",
                evolutionLevel:10,
                source: "https://pokemondb.net/pokedex/metapod",
                iconUrl: "https://img.pokemondb.net/sprites/red-blue/normal/metapod.png"
            },
            {
                pokeNumber: 12,
                pokeName: "Butterfree",
                source: "https://pokemondb.net/pokedex/butterfree",
                iconUrl: "https://img.pokemondb.net/sprites/red-blue/normal/butterfree.png"
            },
                ],
            [{
                pokeNumber: 13,
                pokeName: "Weedle",
                evolutionLevel:7,
                source: "https://pokemondb.net/pokedex/weedle",
                iconUrl: "https://img.pokemondb.net/sprites/red-blue/normal/weedle.png"
            },
            {
                pokeNumber: 14,
                pokeName: "Kakuna",
                evolutionLevel:10,
                source: "https://pokemondb.net/pokedex/kakuna",
                iconUrl: "https://img.pokemondb.net/sprites/red-blue/normal/kakuna.png"
            },
            {
                pokeNumber: 15,
                pokeName: "Beedrill",
                source: "https://pokemondb.net/pokedex/beedrill",
                iconUrl: "https://img.pokemondb.net/sprites/red-blue/normal/beedrill.png"
            }],
            [{
                pokeNumber: 16,
                pokeName: "Pidgey",
                evolutionLevel:18,
                source: "https://pokemondb.net/pokedex/pidgey",
                iconUrl: "https://img.pokemondb.net/sprites/red-blue/normal/pidgey.png"
            },
            {
                pokeNumber: 17,
                pokeName: "Pidgeotto",
                evolutionLevel:36,
                source: "https://pokemondb.net/pokedex/pidgeotto",
                iconUrl: "https://img.pokemondb.net/sprites/red-blue/normal/pidgeotto.png"
            },
            {
                pokeNumber: 18,
                pokeName: "Pidgeot",
                source: "https://pokemondb.net/pokedex/pidgeot",
                iconUrl: "https://img.pokemondb.net/sprites/red-blue/normal/pidgeot.png"
            }],
            [{
                pokeNumber: 19,
                pokeName: "Rattata",
                evolutionLevel:20,
                source: "https://pokemondb.net/pokedex/rattata",
                iconUrl: "https://img.pokemondb.net/sprites/red-blue/normal/rattata.png"
            },
            {
                pokeNumber: 20,
                pokeName: "Raticate",
                source: "https://pokemondb.net/pokedex/raticate",
                iconUrl: "https://img.pokemondb.net/sprites/red-blue/normal/raticate.png"
            }],
            [{
                pokeNumber: 21,
                pokeName: "Spearow",
                evolutionLevel:20,
                source: "https://pokemondb.net/pokedex/spearow",
                iconUrl: "https://img.pokemondb.net/sprites/red-blue/normal/spearow.png"
            },
            {
                pokeNumber: 22,
                pokeName: "Fearow",
                source: "https://pokemondb.net/pokedex/fearow",
                iconUrl: "https://img.pokemondb.net/sprites/red-blue/normal/fearow.png"
            }],
            [{
                pokeNumber: 23,
                pokeName: "Ekans",
                evolutionLevel:22,
                source: "https://pokemondb.net/pokedex/ekans",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/ekans.png"
            },
            {
                pokeNumber: 24,
                pokeName: "Arbok",
                source: "https://pokemondb.net/pokedex/arbok",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/arbok.png"
            }],
            [{
                pokeNumber: 25,
                pokeName: "Pikachu",
                evolutionLevel:25, //TODO: Ask Nathan about how evolution works. Always level?
                source: "https://pokemondb.net/pokedex/pikachu",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/pikachu.png"
            },
            {
                pokeNumber: 26,
                pokeName: "Raichu",
                source: "https://pokemondb.net/pokedex/raichu",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/raichu.png"
            }],
            [{
                pokeNumber: 27,
                pokeName: "Sandshrew",
                evolutionLevel:22,
                source: "https://pokemondb.net/pokedex/sandshrew",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/sandshrew.png"
            },
            {
                pokeNumber: 28,
                pokeName: "Sandslash",
                source: "https://pokemondb.net/pokedex/sandslash",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/sandslash.png"
            }]
    ]
},
    {
        generation: 2,
        evolutionLines: []
    },
    {
        generation: 3,
        evolutionLines: []
    },
    {
        generation: 4,
        evolutionLines: []
    },
    {
        generation: 5,
        evolutionLines: []
    },
    {
        generation: 6,
        evolutionLines: []
    },
    {
        generation: 7,
        evolutionLines: []
    },
    {
        generation: 8,
        evolutionLines: []
    },
    {
        generation: 9,
        evolutionLines: []
    },
    {
        generation: 10,
        evolutionLines: []
    }
]