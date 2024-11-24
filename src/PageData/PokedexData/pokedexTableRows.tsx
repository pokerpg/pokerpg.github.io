//THESE WILL MATCH THE 'FIELD' OBJECTS WITHIN THE POKEDEXTABLECOLUMNS.
type RowData = {
    pokeNumber:number;
    pokeName: string;
    iconUrl: string;
    source: string;
};

type RowDatabase={
    rowData:Array<RowData[]>,
}
//The Pokemon Data we care about! https://pokemondb.net/sprites
//TODO: Evolution lines should be what the table uses.
//TODO: Tab to switch between generations.

export const pokedexTableRows: RowDatabase = {
    rowData:[
        [{
            pokeNumber: 1,
            pokeName: "Bulbasaur",
            source: "https://pokemondb.net/pokedex/bulbasaur",
            iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/bulbasaur.png",
        },
            {
                pokeNumber: 2,
                pokeName: "Ivysaur",
                source: "https://pokemondb.net/pokedex/ivysaur",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/ivysaur.png"
            },
            {
                pokeNumber: 3,
                pokeName: "Venusaur",
                source: "https://pokemondb.net/pokedex/venusaur",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/venusaur.png"
            },
            {
                pokeNumber: 4,
                pokeName: "Charmander",
                source: "https://pokemondb.net/pokedex/charmander",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/charmander.png"
            },
            {
                pokeNumber: 5,
                pokeName: "Charmeleon",
                source: "https://pokemondb.net/pokedex/charmeleon",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/charmeleon.png"
            },
            {
                pokeNumber: 6,
                pokeName: "Charizard",
                source: "https://pokemondb.net/pokedex/charizard",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/charizard.png"
            },
            {
                pokeNumber: 7,
                pokeName: "Squirtle",
                source: "https://pokemondb.net/pokedex/squirtle",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/squirtle.png"
            },
            {
                pokeNumber: 8,
                pokeName: "Wartortle",
                source: "https://pokemondb.net/pokedex/wartortle",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/wartortle.png"
            },
            {
                pokeNumber: 9,
                pokeName: "Blastoise",
                source: "https://pokemondb.net/pokedex/blastoise",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/blastoise.png"
            },
            {
                pokeNumber: 10,
                pokeName: "Caterpie",
                source: "https://pokemondb.net/pokedex/caterpie",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/caterpie.png"
            },
            {
                pokeNumber: 11,
                pokeName: "Metapod",
                source: "https://pokemondb.net/pokedex/metapod",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/metapod.png"
            },
            {
                pokeNumber: 12,
                pokeName: "Butterfree",
                source: "https://pokemondb.net/pokedex/butterfree",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/butterfree.png"
            },
            {
                pokeNumber: 13,
                pokeName: "Weedle",
                source: "https://pokemondb.net/pokedex/weedle",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/weedle.png"
            },
            {
                pokeNumber: 14,
                pokeName: "Kakuna",
                source: "https://pokemondb.net/pokedex/kakuna",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/kakuna.png"
            },
            {
                pokeNumber: 15,
                pokeName: "Beedrill",
                source: "https://pokemondb.net/pokedex/beedrill",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/beedrill.png"
            },
            {
                pokeNumber: 16,
                pokeName: "Pidgey",
                source: "https://pokemondb.net/pokedex/pidgey",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/pidgey.png"
            },
            {
                pokeNumber: 17,
                pokeName: "Pidgeotto",
                source: "https://pokemondb.net/pokedex/pidgeotto",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/pidgeotto.png"
            },
            {
                pokeNumber: 18,
                pokeName: "Pidgeot",
                source: "https://pokemondb.net/pokedex/pidgeot",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/pidgeot.png"
            },
            {
                pokeNumber: 19,
                pokeName: "Rattata",
                source: "https://pokemondb.net/pokedex/rattata",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/rattata.png"
            },
            {
                pokeNumber: 20,
                pokeName: "Raticate",
                source: "https://pokemondb.net/pokedex/raticate",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/raticate.png"
            },
            {
                pokeNumber: 21,
                pokeName: "Spearow",
                source: "https://pokemondb.net/pokedex/spearow",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/spearow.png"
            },
            {
                pokeNumber: 22,
                pokeName: "Fearow",
                source: "https://pokemondb.net/pokedex/fearow",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/fearow.png"
            },
            {
                pokeNumber: 23,
                pokeName: "Ekans",
                source: "https://pokemondb.net/pokedex/ekans",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/ekans.png"
            },
            {
                pokeNumber: 24,
                pokeName: "Arbok",
                source: "https://pokemondb.net/pokedex/arbok",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/arbok.png"
            },
            {
                pokeNumber: 25,
                pokeName: "Pikachu",
                source: "https://pokemondb.net/pokedex/pikachu",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/pikachu.png"
            },
            {
                pokeNumber: 26,
                pokeName: "Raichu",
                source: "https://pokemondb.net/pokedex/raichu",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/raichu.png"
            },
            {
                pokeNumber: 27,
                pokeName: "Sandshrew",
                source: "https://pokemondb.net/pokedex/sandshrew",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/sandshrew.png"
            },
            {
                pokeNumber: 28,
                pokeName: "Sandslash",
                source: "https://pokemondb.net/pokedex/sandslash",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/sandslash.png"
            },
            {
                pokeNumber: 29,
                pokeName: "Nidoran♀",
                source: "https://pokemondb.net/pokedex/nidoran-f",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/nidoran-f.png"
            },
            {
                pokeNumber: 30,
                pokeName: "Nidorina",
                source: "https://pokemondb.net/pokedex/nidorina",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/nidorina.png"
            },
            {
                pokeNumber: 31,
                pokeName: "Nidoqueen",
                source: "https://pokemondb.net/pokedex/nidoqueen",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/nidoqueen.png"
            },
            {
                pokeNumber: 32,
                pokeName: "Nidoran♂",
                source: "https://pokemondb.net/pokedex/nidoran-m",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/nidoran-m.png"
            },
            {
                pokeNumber: 33,
                pokeName: "Nidorino",
                source: "https://pokemondb.net/pokedex/nidorino",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/nidorino.png"
            },
            {
                pokeNumber: 34,
                pokeName: "Nidoking",
                source: "https://pokemondb.net/pokedex/nidoking",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/nidoking.png"
            },
            {
                pokeNumber: 35,
                pokeName: "Clefairy",
                source: "https://pokemondb.net/pokedex/clefairy",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/clefairy.png"
            },
            {
                pokeNumber: 36,
                pokeName: "Clefable",
                source: "https://pokemondb.net/pokedex/clefable",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/clefable.png"
            },
            {
                pokeNumber: 37,
                pokeName: "Vulpix",
                source: "https://pokemondb.net/pokedex/vulpix",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/vulpix.png"
            },
            {
                pokeNumber: 38,
                pokeName: "Ninetales",
                source: "https://pokemondb.net/pokedex/ninetales",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/ninetales.png"
            },
            {
                pokeNumber: 39,
                pokeName: "Jigglypuff",
                source: "https://pokemondb.net/pokedex/jigglypuff",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/jigglypuff.png"
            },
            {
                pokeNumber: 40,
                pokeName: "Wigglytuff",
                source: "https://pokemondb.net/pokedex/wigglytuff",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/wigglytuff.png"
            },
            {
                pokeNumber: 41,
                pokeName: "Zubat",
                source: "https://pokemondb.net/pokedex/zubat",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/zubat.png"
            },
            {
                pokeNumber: 42,
                pokeName: "Golbat",
                source: "https://pokemondb.net/pokedex/golbat",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/golbat.png"
            },
            {
                pokeNumber: 43,
                pokeName: "Oddish",
                source: "https://pokemondb.net/pokedex/oddish",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/oddish.png"
            },
            {
                pokeNumber: 44,
                pokeName: "Gloom",
                source: "https://pokemondb.net/pokedex/gloom",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/gloom.png"
            },
            {
                pokeNumber: 45,
                pokeName: "Vileplume",
                source: "https://pokemondb.net/pokedex/vileplume",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/vileplume.png"
            },
            {
                pokeNumber: 46,
                pokeName: "Paras",
                source: "https://pokemondb.net/pokedex/paras",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/paras.png"
            },
            {
                pokeNumber: 47,
                pokeName: "Parasect",
                source: "https://pokemondb.net/pokedex/parasect",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/parasect.png"
            },
            {
                pokeNumber: 48,
                pokeName: "Venonat",
                source: "https://pokemondb.net/pokedex/venonat",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/venonat.png"
            },
            {
                pokeNumber: 49,
                pokeName: "Venomoth",
                source: "https://pokemondb.net/pokedex/venomoth",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/venomoth.png"
            },
            {
                pokeNumber: 50,
                pokeName: "Diglett",
                source: "https://pokemondb.net/pokedex/diglett",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/diglett.png"
            },
            {
                pokeNumber: 51,
                pokeName: "Dugtrio",
                source: "https://pokemondb.net/pokedex/dugtrio",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/dugtrio.png"
            },
            {
                pokeNumber: 52,
                pokeName: "Meowth",
                source: "https://pokemondb.net/pokedex/meowth",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/meowth.png"
            },
            {
                pokeNumber: 53,
                pokeName: "Persian",
                source: "https://pokemondb.net/pokedex/persian",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/persian.png"
            },
            {
                pokeNumber: 54,
                pokeName: "Psyduck",
                source: "https://pokemondb.net/pokedex/psyduck",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/psyduck.png"
            },
            {
                pokeNumber: 55,
                pokeName: "Golduck",
                source: "https://pokemondb.net/pokedex/golduck",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/golduck.png"
            },
            {
                pokeNumber: 56,
                pokeName: "Machop",
                source: "https://pokemondb.net/pokedex/machop",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/machop.png"
            },
            {
                pokeNumber: 57,
                pokeName: "Machoke",
                source: "https://pokemondb.net/pokedex/machoke",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/machoke.png"
            },
            {
                pokeNumber: 58,
                pokeName: "Machamp",
                source: "https://pokemondb.net/pokedex/machamp",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/machamp.png"
            },
            {
                pokeNumber: 59,
                pokeName: "Bellsprout",
                source: "https://pokemondb.net/pokedex/bellsprout",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/bellsprout.png"
            },
            {
                pokeNumber: 60,
                pokeName: "Weepinbell",
                source: "https://pokemondb.net/pokedex/weepinbell",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/weepinbell.png"
            },
            {
                pokeNumber: 61,
                pokeName: "Victreebel",
                source: "https://pokemondb.net/pokedex/victreebel",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/victreebel.png"
            },
            {
                pokeNumber: 62,
                pokeName: "Tentacool",
                source: "https://pokemondb.net/pokedex/tentacool",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/tentacool.png"
            },
            {
                pokeNumber: 63,
                pokeName: "Tentacruel",
                source: "https://pokemondb.net/pokedex/tentacruel",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/tentacruel.png"
            },
            {
                pokeNumber: 64,
                pokeName: "Geodude",
                source: "https://pokemondb.net/pokedex/geodude",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/geodude.png"
            },
            {
                pokeNumber: 65,
                pokeName: "Graveler",
                source: "https://pokemondb.net/pokedex/graveler",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/graveler.png"
            },
            {
                pokeNumber: 66,
                pokeName: "Golem",
                source: "https://pokemondb.net/pokedex/golem",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/golem.png"
            },
            {
                pokeNumber: 67,
                pokeName: "Ponyta",
                source: "https://pokemondb.net/pokedex/ponyta",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/ponyta.png"
            },
            {
                pokeNumber: 68,
                pokeName: "Rapidash",
                source: "https://pokemondb.net/pokedex/rapidash",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/rapidash.png"
            },
            {
                pokeNumber: 69,
                pokeName: "Slowpoke",
                source: "https://pokemondb.net/pokedex/slowpoke",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/slowpoke.png"
            },
            {
                pokeNumber: 70,
                pokeName: "Slowbro",
                source: "https://pokemondb.net/pokedex/slowbro",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/slowbro.png"
            },
            {
                pokeNumber: 71,
                pokeName: "Magnemite",
                source: "https://pokemondb.net/pokedex/magnemite",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/magnemite.png"
            },
            {
                pokeNumber: 72,
                pokeName: "Magneton",
                source: "https://pokemondb.net/pokedex/magneton",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/magneton.png"
            },
            {
                pokeNumber: 73,
                pokeName: "Farfetch'd",
                source: "https://pokemondb.net/pokedex/farfetchd",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/farfetchd.png"
            },
            {
                pokeNumber: 74,
                pokeName: "Sirfetch'd",
                source: "https://pokemondb.net/pokedex/sirfetchd",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/sirfetchd.png"
            },
            {
                pokeNumber: 75,
                pokeName: "Drowzee",
                source: "https://pokemondb.net/pokedex/drowzee",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/drowzee.png"
            },
            {
                pokeNumber: 76,
                pokeName: "Hypno",
                source: "https://pokemondb.net/pokedex/hypno",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/hypno.png"
            },
            {
                pokeNumber: 77,
                pokeName: "Krabby",
                source: "https://pokemondb.net/pokedex/krabby",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/krabby.png"
            },
            {
                pokeNumber: 78,
                pokeName: "Kingler",
                source: "https://pokemondb.net/pokedex/kingler",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/kingler.png"
            },
            {
                pokeNumber: 79,
                pokeName: "Exeggcute",
                source: "https://pokemondb.net/pokedex/exeggcute",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/exeggcute.png"
            },
            {
                pokeNumber: 80,
                pokeName: "Exeggutor",
                source: "https://pokemondb.net/pokedex/exeggutor",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/exeggutor.png"
            },
            {
                pokeNumber: 81,
                pokeName: "Cubone",
                source: "https://pokemondb.net/pokedex/cubone",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/cubone.png"
            },
            {
                pokeNumber: 82,
                pokeName: "Marowak",
                source: "https://pokemondb.net/pokedex/marowak",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/marowak.png"
            },
            {
                pokeNumber: 83,
                pokeName: "Hitmonlee",
                source: "https://pokemondb.net/pokedex/hitmonlee",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/hitmonlee.png"
            },
            {
                pokeNumber: 84,
                pokeName: "Hitmonchan",
                source: "https://pokemondb.net/pokedex/hitmonchan",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/hitmonchan.png"
            },
            {
                pokeNumber: 85,
                pokeName: "Lickitung",
                source: "https://pokemondb.net/pokedex/lickitung",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/lickitung.png"
            },
            {
                pokeNumber: 86,
                pokeName: "Lickilicky",
                source: "https://pokemondb.net/pokedex/lickilicky",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/lickilicky.png"
            },
            {
                pokeNumber: 87,
                pokeName: "Koffing",
                source: "https://pokemondb.net/pokedex/koffing",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/koffing.png"
            },
            {
                pokeNumber: 88,
                pokeName: "Weezing",
                source: "https://pokemondb.net/pokedex/weezing",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/weezing.png"
            },
            {
                pokeNumber: 89,
                pokeName: "Rhyhorn",
                source: "https://pokemondb.net/pokedex/rhyhorn",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/rhyhorn.png"
            },
            {
                pokeNumber: 90,
                pokeName: "Rhydon",
                source: "https://pokemondb.net/pokedex/rhydon",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/rhydon.png"
            },
            {
                pokeNumber: 91,
                pokeName: "Chansey",
                source: "https://pokemondb.net/pokedex/chansey",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/chansey.png"
            },
            {
                pokeNumber: 92,
                pokeName: "Blissey",
                source: "https://pokemondb.net/pokedex/blissey",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/blissey.png"
            },
            {
                pokeNumber: 93,
                pokeName: "Tangela",
                source: "https://pokemondb.net/pokedex/tangela",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/tangela.png"
            },
            {
                pokeNumber: 94,
                pokeName: "Tangrowth",
                source: "https://pokemondb.net/pokedex/tangrowth",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/tangrowth.png"
            },
            {
                pokeNumber: 95,
                pokeName: "Kangaskhan",
                source: "https://pokemondb.net/pokedex/kangaskhan",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/kangaskhan.png"
            },
            {
                pokeNumber: 96,
                pokeName: "Horsea",
                source: "https://pokemondb.net/pokedex/horsea",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/horsea.png"
            },
            {
                pokeNumber: 97,
                pokeName: "Seadra",
                source: "https://pokemondb.net/pokedex/seadra",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/seadra.png"
            },
            {
                pokeNumber: 98,
                pokeName: "Goldeen",
                source: "https://pokemondb.net/pokedex/goldeen",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/goldeen.png"
            },
            {
                pokeNumber: 99,
                pokeName: "Seaking",
                source: "https://pokemondb.net/pokedex/seaking",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/seaking.png"
            },
            {
                pokeNumber: 100,
                pokeName: "Staryu",
                source: "https://pokemondb.net/pokedex/staryu",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/staryu.png"
            },
            {
                pokeNumber: 101,
                pokeName: "Starmie",
                source: "https://pokemondb.net/pokedex/starmie",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/starmie.png"
            },
            {
                pokeNumber: 102,
                pokeName: "Mr. Mime",
                source: "https://pokemondb.net/pokedex/mr-mime",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/mr-mime.png"
            },
            {
                pokeNumber: 103,
                pokeName: "Jynx",
                source: "https://pokemondb.net/pokedex/jynx",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/jynx.png"
            },
            {
                pokeNumber: 104,
                pokeName: "Electabuzz",
                source: "https://pokemondb.net/pokedex/electabuzz",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/electabuzz.png"
            },
            {
                pokeNumber: 105,
                pokeName: "Magmar",
                source: "https://pokemondb.net/pokedex/magmar",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/magmar.png"
            },
            {
                pokeNumber: 106,
                pokeName: "Pinsir",
                source: "https://pokemondb.net/pokedex/pinsir",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/pinsir.png"
            },
            {
                pokeNumber: 107,
                pokeName: "Scyther",
                source: "https://pokemondb.net/pokedex/scyther",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/scyther.png"
            },
            {
                pokeNumber: 108,
                pokeName: "Electrode",
                source: "https://pokemondb.net/pokedex/electrode",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/electrode.png"
            },
            {
                pokeNumber: 109,
                pokeName: "Voltorb",
                source: "https://pokemondb.net/pokedex/voltorb",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/voltorb.png"
            },
            {
                pokeNumber: 110,
                pokeName: "Exeggutor",
                source: "https://pokemondb.net/pokedex/exeggutor",
                iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/exeggutor.png"
            }
        ], [
        {
            pokeNumber: 99999,
            pokeName: "CYNDAQUIL",
            source: "https://pokemondb.net/pokedex/cyndaquil",
            iconUrl: "https://img.pokemondb.net/sprites/scarlet-violet/normal/cyndaquil.png"
        }
        ]
]
}