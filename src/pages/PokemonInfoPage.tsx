import {useAppDispatch, useAppSelector} from "../hooks";
import {useEffect} from "react";
import {pokemonActions} from "../redux/slices";
import {useParams} from "react-router-dom";

import {PokemonInfo} from "../components/PokemonsContainer/PokemonInfo";
import {Loading} from "../components/Loading";

const PokemonInfoPage = () => {
    const {id} = useParams<string>();
    const dispatch = useAppDispatch();
    const {pokemonById, isLoading} = useAppSelector(state => state.pokemon);

    useEffect(() => {
        if (pokemonById === null) {
            dispatch(pokemonActions.getPokemonById({id}));
        }
    }, [dispatch, id, pokemonById]);


    return (
        <div>
            {isLoading ? (
                <Loading/>
            ) : (
                pokemonById && <PokemonInfo pokemonById={pokemonById}/>
            )}
        </div>
    );
};

export {PokemonInfoPage};
