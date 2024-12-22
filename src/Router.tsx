import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Header} from "./Components/Header/Header";
import {PokedexTable} from "./Pages/Pokedex/Table/PokedexTable";
import {EvolutionLineEntry} from "./Pages/Pokedex/Entries/EvolutionLineEntry";

export const Router = () => {

  return (
    <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<div className={'screen-content'}>Homepage</div>}/>
                <Route path="/pokedex" element={<div className={'screen-content'}><PokedexTable/></div>}/>
                <Route path="/pokedex/:evolutionLine" element={<div className={'screen-content'}><EvolutionLineEntry/></div>}/>
                <Route path="/resources" element={<div className={'screen-content'}>Resources</div>}/>
                <Route path="/contact" element={<div className={'screen-content'}>Contact</div>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
