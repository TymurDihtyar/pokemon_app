import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

import {AxiosError} from "axios";
import {IPokemon, IPokemons} from "../../interfaces/pokemosInterface";
import {IOnePokemon} from "../../interfaces/onePokemonInterface";
import {IAbilityOrType} from "../../interfaces/ability_typeInterface";
import {PokemonService} from "../../services/pokemonService";
import {TypeService} from "../../services/typeService";
import {AbilityService} from "../../services/abilityService";
import {urls} from "../../constants/urls";

interface IState {
    currentUrl: string
    next: string
    previous: string
    allPokemons: IPokemon[]
    pokemonById: IOnePokemon
    pokemonsByAbilityOrType: IPokemon[]
    errors: boolean
    isLoading: boolean
}

const initialState: IState = {
    currentUrl: urls.pokemons,
    next: null,
    previous: null,
    allPokemons: [],
    pokemonById: null,
    pokemonsByAbilityOrType: [],
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

const getPokemonesByAbility = createAsyncThunk<IAbilityOrType, { name: string }>(
    'pokemonSlice/getPokemonesByAbility',
    async ({name}, {rejectWithValue}) => {
        try {
            const {data} = await AbilityService.getPokemonesByAbility(name)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getPokemonesByType = createAsyncThunk<IAbilityOrType, { name: string }>(
    'pokemonSlice/getPokemonesByType',
    async ({name}, {rejectWithValue}) => {
        try {
            const {data} = await TypeService.getPokemonesByType(name)
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
    reducers: {
        setUrl: (state, action) => {
            state.currentUrl = action.payload
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getPokemonById.fulfilled, (state, action) => {
                state.pokemonById = action.payload
                state.errors = false
                state.isLoading = false
            })

            .addCase(getPokemones.fulfilled, (state, action) => {
                const {results, next, previous} = action.payload
                state.allPokemons = results
                state.previous = previous
                state.next = next
                state.pokemonById = null
                state.errors = false
                state.isLoading = false
            })

            .addMatcher(isFulfilled(getPokemonesByAbility, getPokemonesByType), (state, action) => {
                const {pokemon} = action.payload
                const normalize = pokemon.map(({pokemon}) => pokemon)
                state.pokemonsByAbilityOrType = normalize
                state.errors = false
                state.isLoading = false
            })

            .addMatcher(isRejected(getPokemonById, getPokemones, getPokemonesByAbility, getPokemonesByType), (state) => {
                state.errors = true
                state.isLoading = false
            })
            .addMatcher(isPending(getPokemonById, getPokemones, getPokemonesByAbility, getPokemonesByType), (state) => {
                state.isLoading = true
            })
})

const {reducer: pokemonReducer, actions} = pokemonSlice

const pokemonActions = {
    ...actions,
    getPokemones,
    getPokemonById,
    getPokemonesByAbility,
    getPokemonesByType
}
export {pokemonReducer, pokemonActions}