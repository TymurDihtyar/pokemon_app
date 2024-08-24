import {createAsyncThunk, createSlice, isPending, isRejected} from "@reduxjs/toolkit";

import {AxiosError} from "axios";
import {IForm} from "../../interfaces/formInterface";
import {FormService} from "../../services/formService";

interface IState {
    savedForm: IForm
    errors: boolean
    isLoading: boolean
}

const initialState: IState = {
    savedForm: null,
    errors: null,
    isLoading: null,
}

const getPokemonForm = createAsyncThunk<IForm, { url: string }>(
    'formSlice/getPokemonForm',
    async ({url}, {rejectWithValue}) => {
        try {
            const {data} = await FormService.getForm(url)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const formSlice = createSlice({
    name: 'formSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getPokemonForm.fulfilled, (state, action) => {
                state.savedForm = action.payload
                state.isLoading = false
            })

            .addMatcher(isRejected(getPokemonForm), (state) => {
                state.errors = true
                state.isLoading = false
            })
            .addMatcher(isPending(getPokemonForm), (state) => {
                state.isLoading = true
            })
})

const {reducer: formReducer, actions} = formSlice

const formActions = {
    ...actions,
    getPokemonForm,
}
export {formReducer, formActions}