import {configureStore} from "@reduxjs/toolkit";

import { themeReducer} from "./slices";

const store = configureStore({
    reducer:{
        // movies: moviesReducer,
        theme: themeReducer
    }
})

export {store}