import {configureStore} from "@reduxjs/toolkit";
import {formReducer, pokemonReducer} from "./slices";

const store = configureStore({
    reducer:{
        pokemon: pokemonReducer,
        form: formReducer
    }
})

export {store}