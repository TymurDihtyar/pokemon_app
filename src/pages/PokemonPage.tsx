import {useEffect} from "react";
import {urls} from "../constants/urls";
import {Pokemons} from "../components/PokemonsContainer/Pokemons";
import {useAppDispatch, useAppSelector} from "../hooks";
import {pokemonActions} from "../redux/slices";

const PokemonPage = () => {
    const dispatch = useAppDispatch();
    const {allPokemons, next, previous} = useAppSelector(state => state.pokemon)

    useEffect(() => {
        dispatch(pokemonActions.getPokemones({url: urls.pokemons}))
    }, [next, previous]);


    return (
        <div>
            {allPokemons && <Pokemons pokemon={allPokemons}/>}
        </div>
    );
};

export {PokemonPage};