import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayOut} from "./layouts/MainLayOut";
import {PokemonPage} from "./pages/PokemonPage";
import {PokemonInfoPage} from "./pages/PokemonInfoPage";
import {SearchPage} from "./pages/SearchPage";
import {CollectionPage} from "./pages/CollectionPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayOut/>, children: [
            {index: true, element: <Navigate to={'pokemons'}/>},
            {path: 'pokemons', element: <PokemonPage/>},
            {path: 'pokemons/:id', element: <PokemonInfoPage/>},
            {path: 'my-collection', element: <CollectionPage/>},
            {path: 'search', element:<SearchPage/>},
        ]
    }
])

export {router}