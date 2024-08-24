import {useEffect} from "react";
import {urls} from "../constants/urls";
import {Pokemons} from "../components/PokemonsContainer/Pokemons";
import {useAppDispatch, useAppSelector} from "../hooks";
import {pokemonActions} from "../redux/slices";
import {Pagination} from "../components/Pagination";

const PokemonPage = () => {
    const dispatch = useAppDispatch();
    const {allPokemons} = useAppSelector(state => state.pokemon)

    useEffect(() => {
        dispatch(pokemonActions.getPokemones({url: urls.pokemons}))
    }, [dispatch]);


    return (
        <div>
            {allPokemons && <Pokemons pokemon={allPokemons}/>}
            <Pagination/>
        </div>
    );
};

export {PokemonPage};