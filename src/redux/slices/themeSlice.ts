import {createSlice} from "@reduxjs/toolkit";

interface ITheme {
    theme: string
}

const initialState:ITheme ={
    theme: null
}

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        setTheme:(state, action) => {
            state.theme = action.payload
        }
    }
})

const {reducer:themeReducer, actions} = themeSlice

const themeAction = {
    ...actions
}

export {themeReducer, themeAction}