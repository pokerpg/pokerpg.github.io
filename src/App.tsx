import { BrowserRouter, Route, Routes } from "react-router-dom";
import {PokeHeader} from "./Components/Header/PokeHeader";
import {PokedexTable} from "./Pages/Pokedex/Table/PokedexTable";

export const App = () => {

  return (
    <>
        <BrowserRouter>
            <PokeHeader/>
            <Routes>
                <Route path="/" element={<>
                    <div className={'screen-content'}>
                        Homepage
                    </div>
                </>}/>
                <Route path="/pokedex" element={<>
                    <div className={'screen-content'}>
                        <PokedexTable/>
                    </div>
                </>}/>
                <Route path="/resources" element={<>
                    <div className={'screen-content'}>
                        Resources
                    </div>
                </>}/>
                <Route path="/contact" element={<>
                    <div className={'screen-content'}>
                        Contact
                    </div>
                </>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
