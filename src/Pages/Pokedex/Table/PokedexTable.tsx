import { AgGridReact } from "ag-grid-react";
import "./PokedexTable.scss"
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {pokedexColumns} from "../../../PageData/PokedexData/pokedexTableColumns"
import {pokedexTableRows, RowDatabase} from "../../../PageData/PokedexData/pokedexTableRows"
import {useState} from "react";



export const PokedexTable = () => {
    const [generation, setGeneration] = useState(1)



    return (<>
        <div className="fullscreen-buttons">
            <button onClick={() => setGeneration(1)}>Gen 1</button>
            <button onClick={() => setGeneration(2)}>Gen 2</button>
            <button onClick={() => setGeneration(3)}>Gen 3</button>
            <button onClick={() => setGeneration(4)}>Gen 4</button>
            <button onClick={() => setGeneration(5)}>Gen 5</button>
            <button onClick={() => setGeneration(6)}>Gen 6</button>
            <button onClick={() => setGeneration(7)}>Gen 7</button>
            <button onClick={() => setGeneration(8)}>Gen 8</button>
            <button onClick={() => setGeneration(9)}>Gen 9</button>
            <button onClick={() => setGeneration(10)}>Gen 10</button>
        </div>
        <div className={"ag-theme-alpine fullscreen-table"}>
                <AgGridReact
                    rowData={pokedexTableRows.find((row: RowDatabase) => (row.generation === generation)).evolutionLines}
                    columnDefs={pokedexColumns}
                    suppressDragLeaveHidesColumns={true}
                    defaultColDef={{
                        sortable: true,
                        filter: true,
                        flex: 1
                    }}
                    rowHeight={50}
                />
        </div>
    </>
    );
};