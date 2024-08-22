import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

import {AxiosError} from "axios";


interface IState {

}

const initialState: IState = {
    page: null,
    total_pages: 500,
    movies: [],
    movieById: null,
    characters: null,
    genres: null,
    errors: null,
    isLoading: null,
    trailers: null,
    searchWord: null,
    searchGenres: null
}

// const getMovies = createAsyncThunk<IData, { page: string }>(
//     'moviesSlice/getMovies',
//     async ({page}, {rejectWithValue}) => {
//         try {
//             const {data} = await moviesService.getAll(page)
//             return data
//         } catch (e) {
//             const err = e as AxiosError
//             return rejectWithValue(err.response?.data)
//         }
//     }
// )

// const getMovieById = createAsyncThunk<IOneMove, { id: string }>(
//     'moviesSlice/getMovieById',
//     async ({id}, {rejectWithValue}) => {
//         try {
//             const {data} = await moviesService.getById(id)
//             return data
//         } catch (e) {
//             const err = e as AxiosError
//             return rejectWithValue(err.response?.data)
//         }
//     }
// )
//
//
// const getGenres = createAsyncThunk<IGenres, void>(
//     'moviesSlice/getGenres',
//     async (_, {rejectWithValue}) => {
//         try {
//             const {data} = await genresService.getAll()
//             return data
//         } catch (e) {
//             const err = e as AxiosError
//             return rejectWithValue(err.response?.data)
//         }
//     }
// )
//
// const getMoviesByGenre = createAsyncThunk<IData, { page: string, with_genres: string }>(
//     'moviesSlice/getMoviesByGenre',
//     async ({page, with_genres}, {rejectWithValue}) => {
//         try {
//             const {data} = await genresService.getMoviesByGenre(page, with_genres)
//             return data
//         } catch (e) {
//             const err = e as AxiosError
//             return rejectWithValue(err.response?.data)
//         }
//     }
// )
//
// const getMoviesByKeyWord = createAsyncThunk<IData, { page: string, query: string }>(
//     'moviesSlice/getMoviesByKeyWord',
//     async ({page, query}, {rejectWithValue}) => {
//         try {
//             const {data} = await searchService.getByKeyWord(page, query)
//             return data
//         } catch (e) {
//             const err = e as AxiosError
//             return rejectWithValue(err.response?.data)
//         }
//     }
// )

// const moviesSlice = createSlice({
//     name: 'moviesSlice',
//     initialState,
//     reducers: {
//         setPage: (state, action) => {
//             state.page = action.payload.page
//         },
//         setSearchGenres:(state, action) => {
//             state.searchGenres = action.payload.searchGenres.join(',')
//         }
//     },
//     extraReducers: builder =>
//         builder
//             .addCase(getMovieById.fulfilled, (state, action) => {
//                 state.movieById = action.payload
//                 state.isLoading = false
//             })
//             .addCase(getTrailers.fulfilled, (state, action) => {
//                 state.trailers = action.payload.results
//             })
//             .addCase(getCharacters.fulfilled, (state, action) => {
//                 state.characters = action.payload.cast
//             })
//             .addCase(getGenres.fulfilled, (state, action) => {
//                 state.genres = action.payload.genres
//             })
//             .addMatcher(isFulfilled(getMovies, getMoviesByGenre, getMoviesByKeyWord), (state, action) => {
//                 const {total_pages, results} = action.payload
//                 state.movies = results
//                 state.total_pages = total_pages
//                 state.movieById = null
//                 state.errors = false
//                 state.isLoading = false
//             })
//             .addMatcher(isRejected(getMovieById, getGenres, getMovies, getMoviesByGenre, getMoviesByKeyWord), (state) => {
//                 state.errors = true
//                 state.isLoading = false
//             })
//             .addMatcher(isPending(getMovieById, getGenres, getMovies, getMoviesByGenre, getMoviesByKeyWord), (state) => {
//                 state.isLoading = true
//             })
// })
//
// const {reducer: moviesReducer, actions} = moviesSlice
//
// const moviesActions = {
//     ...actions,
//     getMovies,
//     getMovieById,
//     getTrailers,
//     getCharacters,
//     getGenres,
//     getMoviesByGenre,
//     getMoviesByKeyWord
// }
// export {moviesReducer, moviesActions}