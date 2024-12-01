import {ColDef, ICellRendererParams} from "ag-grid-community";
import {RowData} from "./pokedexTableRows";

export const pokedexColumns: ColDef[] = [
  { headerName: "Name", field: "pokeName", sortable: true, cellRenderer:(params:ICellRendererParams)=>(params.data.map(data=>data.pokeName + (data.evolutionLevel ? '→' : ''))) },
  {
    headerName: "Icon",
    sortable: false,
    width: 100,
    cellRenderer: (params: ICellRendererParams) => (
        params.data.map((datai:RowData)=> {return <a href={datai.source} target="_blank" rel="noopener noreferrer">
                <img
                    src={datai.iconUrl}
                    alt={datai.pokeName}
                    style={{marginTop: '-5px', height: '50px', width: '50px'}}
                />
            </a>
        })

    ),
  },
    {
        headerName: "Pokedex Entry", cellRenderer: (params: ICellRendererParams) => (
            <span>
                Take me away!
            </span>
        ),
    }
];
