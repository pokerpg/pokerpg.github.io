import {ColDef, ICellRendererParams} from "ag-grid-community";

export const pokedexColumns: ColDef[] = [
  { headerName: "#", field: "pokeNumber", sortable: true, resizable: true },
  { headerName: "Name", field: "pokeName", sortable: true },
  {
    headerName: "Icon",
    sortable: false,
    width: 100,
    cellRenderer: (params: ICellRendererParams) => (
        <a href={params.data.source} target="_blank" rel="noopener noreferrer">
          <img
            src={params.data.iconUrl}
            alt={params.data.pokeName}
            style={{ marginTop: '-5px', height: '50px', width: '50px' }}
          />
        </a>
),
},
  {headerName:"Pokedex Entry",   cellRenderer: (params: ICellRendererParams) => (
        <a href={params.data.source} target="_blank" rel="noopener noreferrer">
          Take me away!
        </a>
    ),}
];
