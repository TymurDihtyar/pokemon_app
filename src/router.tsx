import {createBrowserRouter, Navigate} from "react-router-dom";
import {PokemonPage} from "./pages/PokemonPage";
import {MainLayOut} from "./layouts/MainLayOut";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayOut/>, children: [
            {index: true, element: <Navigate to={'pokemons'}/>},
            {path: 'pokemons', element: <PokemonPage/>},
            // {path: 'pokemons/:id', element: <PokemonInfoPage/>},
            // {path: 'pokemons/searchWord', element:<SearchKeyWordPage/>},
        ]
    }
])

export {router}