import {ColDef, ICellRendererParams} from "ag-grid-community";
import {Pokemon} from "../../../Types/types";
import {NavLink} from "react-router-dom";
import {PokemonImage} from "../../../Components/PokemonImage/PokemonImage";

export const columnRenderingDefinition: ColDef[] = [
  { headerName: "Name", field: "pokeName", sortable: true, cellRenderer:(params:ICellRendererParams)=>(params.data.map(data=>data.pokeName + (data.evolutionLevel ? '→' : ''))) },
  {
    headerName: "Icon",
    sortable: false,
    width: 100,
    cellRenderer: (params: ICellRendererParams) => (
        params.data.map((pokemonData:Pokemon)=> {return <a href={pokemonData.source} target="_blank" rel="noopener noreferrer">
                <PokemonImage pokemon={pokemonData}/>
            </a>
        })

    ),
  },
    {
        headerName: "Pokedex Entry", cellRenderer: (params: ICellRendererParams) => (
            <span>
                 <NavLink to={"/pokedex/" + params.data.map((pokemonData:Pokemon)=>pokemonData.pokeName).join("-")}>
                   Take me away!
                </NavLink>
            </span>
        ),
    }
];
