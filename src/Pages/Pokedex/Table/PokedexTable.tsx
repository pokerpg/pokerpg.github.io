import { AgGridReact } from "ag-grid-react";
import "./PokedexTable.scss"
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {pokedexColumns} from "../../../PageData/PokedexData/pokedexTableColumns"
import {pokedexTableRows} from "../../../PageData/PokedexData/pokedexTableRows"
import {useState} from "react";



export const PokedexTable = () => {
    const [generation, setGeneration] = useState(1)



    return (
        <div className="ag-theme-alpine fullscreen-table">
            <AgGridReact
                rowData={pokedexTableRows.rowData[generation-1]}
                columnDefs={pokedexColumns}
                suppressDragLeaveHidesColumns={true}
                defaultColDef={{
                    sortable: true,
                    filter: true,
                    flex:1
                }}
                rowHeight={50}
            />
        </div>
    );
};