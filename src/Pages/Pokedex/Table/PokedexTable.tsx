import { AgGridReact } from "ag-grid-react";
import "./PokedexTable.scss"
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {columnRenderingDefinition} from "./pokedexTableFormatter"
import {pokedexEntries} from "../../../PokedexData/PokedexData/pokedexEntries"
import {useState} from "react";
import {PokedexEntry} from "../../../Types/types";



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
        <div className={"ag-theme-alpine-dark fullscreen-table"}>
                <AgGridReact
                    rowData={pokedexEntries.find((row: PokedexEntry) => (row.generation === generation)).evolutionLines}
                    columnDefs={columnRenderingDefinition}
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