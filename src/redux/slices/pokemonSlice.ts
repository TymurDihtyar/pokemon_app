import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

import {AxiosError} from "axios";
import {IPokemon, IPokemons} from "../../interfaces/pokemosInterface";
import {IOnePokemon} from "../../interfaces/onePokemonInterface";
import {PokemonService} from "../../services/pokemonService";

interface IState {
    count: number
    next: string
    previous: string
    allPokemons: IPokemon[]
    pokemonById: IOnePokemon
    errors: boolean
    isLoading: boolean
}

const initialState: IState = {
    count: null,
    next: null,
    previous: null,
    allPokemons: [],
    pokemonById: null,
    errors: null,
    isLoading: null,
}

const getPokemones = createAsyncThunk<IPokemons, { url: string }>(
    'pokemonSlice/getPokemones',
    async ({url}, {rejectWithValue}) => {
        try {
            const {data} = await PokemonService.getAll(url)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getPokemonById = createAsyncThunk<IOnePokemon, { id: string }>(
    'pokemonSlice/getPokemonById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await PokemonService.getOne(id)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const pokemonSlice = createSlice({
    name: 'pokemonSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getPokemonById.fulfilled, (state, action) => {
                state.pokemonById = action.payload
                state.isLoading = false
            })

            .addMatcher(isFulfilled(getPokemones), (state, action) => {
                const {results, count, next, previous} = action.payload
                state.allPokemons = results
                state.previous = previous
                state.next = next
                state.count = count
                state.pokemonById = null
                state.errors = false
                state.isLoading = false
            })
            .addMatcher(isRejected(getPokemonById, getPokemones), (state) => {
                state.errors = true
                state.isLoading = false
            })
            .addMatcher(isPending(getPokemonById, getPokemones), (state) => {
                state.isLoading = true
            })
})

const {reducer: pokemonReducer, actions} = pokemonSlice

const pokemonActions = {
    ...actions,
    getPokemones,
    getPokemonById,
}
export {pokemonReducer, pokemonActions}