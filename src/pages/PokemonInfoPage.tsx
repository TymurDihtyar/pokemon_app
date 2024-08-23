import { PokemonInfo } from "../components/PokemonsContainer/PokemonInfo";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect } from "react";
import { pokemonActions } from "../redux/slices";
import { useParams } from "react-router-dom";

const PokemonInfoPage = () => {
    const { id } = useParams<string>();
    const dispatch = useAppDispatch();
    const { pokemonById } = useAppSelector(state => state.pokemon);

    useEffect(() => {
        if (pokemonById === null) {
            dispatch(pokemonActions.getPokemonById({ id }));
        }
    }, [dispatch, id, pokemonById]);


    return (
        <div>
            {pokemonById && <PokemonInfo pokemonById={pokemonById}/>}
        </div>
    );
};

export { PokemonInfoPage };
