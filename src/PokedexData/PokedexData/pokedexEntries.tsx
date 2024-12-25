import {PokedexEntry} from "../../Types/types";
export const pokedexEntries: Array<PokedexEntry> = [
    {generation:1,
    evolutionLines:[
        [{
            pokeNumber: 1,
            pokeName: "Bulbasaur",
            pokemonTypes: ["grass","poison"],
            knownMoves:[{level:1,name:"Tackle"}],
            evolutionLevel:16,
            source: "https://pokemondb.net/pokedex/bulbasaur",
            iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/bulbasaur.png",
        },
        {
            pokeNumber: 2,
            pokeName: "Ivysaur",
            pokemonTypes: ["grass","poison"],
            knownMoves:[{level:1,name:"Tackle"}],
            evolutionLevel:32,
            source: "https://pokemondb.net/pokedex/ivysaur",
            iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/ivysaur.png"
        },
        {
            pokeNumber: 3,
            pokeName: "Venusaur",
            pokemonTypes: ["grass","poison"],
            knownMoves:[{level:1,name:"Tackle"}],
            source: "https://pokemondb.net/pokedex/venusaur",
            iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/venusaur.png"
        },
        ],[
            {
                pokeNumber: 4,
                pokeName: "Charmander",
                pokemonTypes: ["fire"],
                knownMoves:[],
                evolutionLevel:16,
                source: "https://pokemondb.net/pokedex/charmander",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/charmander.png"
            },
            {
                pokeNumber: 5,
                pokeName: "Charmeleon",
                pokemonTypes: ["fire"],
                knownMoves:[],
                evolutionLevel:32,
                source: "https://pokemondb.net/pokedex/charmeleon",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/charmeleon.png"
            },
            {
                pokeNumber: 6,
                pokeName: "Charizard",
                pokemonTypes: ["fire","flying"],
                knownMoves:[],
                source: "https://pokemondb.net/pokedex/charizard",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/charizard.png"
            },
            ],[
            {
                pokeNumber: 7,
                pokeName: "Squirtle",
                pokemonTypes: ["water"],
                knownMoves:[],
                evolutionLevel:16,
                source: "https://pokemondb.net/pokedex/squirtle",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/squirtle.png"
            },
            {
                pokeNumber: 8,
                pokeName: "Wartortle",
                pokemonTypes: ["water"],
                knownMoves:[],
                evolutionLevel:32,
                source: "https://pokemondb.net/pokedex/wartortle",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/wartortle.png"
            },
            {
                pokeNumber: 9,
                pokeName: "Blastoise",
                pokemonTypes: ["water"],
                knownMoves:[],
                source: "https://pokemondb.net/pokedex/blastoise",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/blastoise.png"
            }],
            [{
                pokeNumber: 10,
                pokeName: "Caterpie",
                pokemonTypes: ["bug"],
                knownMoves:[],
                evolutionLevel:7,
                source: "https://pokemondb.net/pokedex/caterpie",
                iconUrl: "https://img.pokemondb.net/sprites/x-y/normal/caterpie.png"
            },
            {
                pokeNumber: 11,
                pokeName: "Metapod",
                pokemonTypes: ["bug"],
                knownMoves:[],
                evolutionLevel:10,
                source: "https://pokemondb.net/pokedex/metapod",
                iconUrl: "https://img.pokemondb.net/sprites/x-y/normal/metapod.png"
            },
            {
                pokeNumber: 12,
                pokeName: "Butterfree",
                pokemonTypes: ["bug","flying"],
                knownMoves:[],
                source: "https://pokemondb.net/pokedex/butterfree",
                iconUrl: "https://img.pokemondb.net/sprites/x-y/normal/butterfree.png"
            },
                ],
            [{
                pokeNumber: 13,
                pokeName: "Weedle",
                pokemonTypes: ["bug","poison"],
                knownMoves:[],
                evolutionLevel:7,
                source: "https://pokemondb.net/pokedex/weedle",
                iconUrl: "https://img.pokemondb.net/sprites/x-y/normal/weedle.png"
            },
            {
                pokeNumber: 14,
                pokeName: "Kakuna",
                pokemonTypes: ["bug","poison"],
                knownMoves:[],
                evolutionLevel:10,
                source: "https://pokemondb.net/pokedex/kakuna",
                iconUrl: "https://img.pokemondb.net/sprites/x-y/normal/kakuna.png"
            },
            {
                pokeNumber: 15,
                pokeName: "Beedrill",
                pokemonTypes: ["bug","poison"],
                knownMoves:[],
                source: "https://pokemondb.net/pokedex/beedrill",
                iconUrl: "https://img.pokemondb.net/sprites/x-y/normal/beedrill.png"
            }],
            [{
                pokeNumber: 16,
                pokeName: "Pidgey",
                pokemonTypes: ["normal","flying"],
                knownMoves:[],
                evolutionLevel:18,
                source: "https://pokemondb.net/pokedex/pidgey",
                iconUrl: "https://img.pokemondb.net/sprites/x-y/normal/pidgey.png"
            },
            {
                pokeNumber: 17,
                pokeName: "Pidgeotto",
                pokemonTypes: ["normal","flying"],
                knownMoves:[],
                evolutionLevel:36,
                source: "https://pokemondb.net/pokedex/pidgeotto",
                iconUrl: "https://img.pokemondb.net/sprites/x-y/normal/pidgeotto.png"
            },
            {
                pokeNumber: 18,
                pokeName: "Pidgeot",
                pokemonTypes: ["normal","flying"],
                knownMoves:[],
                source: "https://pokemondb.net/pokedex/pidgeot",
                iconUrl: "https://img.pokemondb.net/sprites/x-y/normal/pidgeot.png"
            }],
            [{
                pokeNumber: 19,
                pokeName: "Rattata",
                pokemonTypes: ["normal"],
                knownMoves:[],
                evolutionLevel:20,
                source: "https://pokemondb.net/pokedex/rattata",
                iconUrl: "https://img.pokemondb.net/sprites/x-y/normal/rattata.png"
            },
            {
                pokeNumber: 20,
                pokeName: "Raticate",
                pokemonTypes: ["normal"],
                knownMoves:[],
                source: "https://pokemondb.net/pokedex/raticate",
                iconUrl: "https://img.pokemondb.net/sprites/x-y/normal/raticate.png"
            }],
            [{
                pokeNumber: 21,
                pokeName: "Spearow",
                pokemonTypes: ["normal","flying"],
                knownMoves:[],
                evolutionLevel:20,
                source: "https://pokemondb.net/pokedex/spearow",
                iconUrl: "https://img.pokemondb.net/sprites/x-y/normal/spearow.png"
            },
            {
                pokeNumber: 22,
                pokeName: "Fearow",
                pokemonTypes: ["normal","flying"],
                knownMoves:[],
                source: "https://pokemondb.net/pokedex/fearow",
                iconUrl: "https://img.pokemondb.net/sprites/x-y/normal/fearow.png"
            }],
            [{
                pokeNumber: 23,
                pokeName: "Ekans",
                pokemonTypes: ["poison"],
                knownMoves:[],
                evolutionLevel:22,
                source: "https://pokemondb.net/pokedex/ekans",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/ekans.png"
            },
            {
                pokeNumber: 24,
                pokeName: "Arbok",
                pokemonTypes: ["poison"],
                knownMoves:[],
                source: "https://pokemondb.net/pokedex/arbok",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/arbok.png"
            }],
            [{
                pokeNumber: 25,
                pokeName: "Pikachu",
                pokemonTypes: ["electric"],
                knownMoves:[],
                evolutionLevel:25, //TODO: Ask Nathan about how evolution works. Always level?
                source: "https://pokemondb.net/pokedex/pikachu",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/pikachu.png"
            },
            {
                pokeNumber: 26,
                pokeName: "Raichu",
                pokemonTypes: ["electric"],
                knownMoves:[],
                source: "https://pokemondb.net/pokedex/raichu",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/raichu.png"
            }],
            [{
                pokeNumber: 27,
                pokeName: "Sandshrew",
                pokemonTypes: ["ground"],
                knownMoves:[],
                evolutionLevel:22,
                source: "https://pokemondb.net/pokedex/sandshrew",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/sandshrew.png"
            },
            {
                pokeNumber: 28,
                pokeName: "Sandslash",
                pokemonTypes: ["ground"],
                knownMoves:[],
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