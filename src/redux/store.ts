import {configureStore} from "@reduxjs/toolkit";
import {pokemonReducer} from "./slices";

const store = configureStore({
    reducer:{
        pokemon: pokemonReducer,
    }
})

export {store}