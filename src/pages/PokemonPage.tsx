import { useEffect } from "react";
import { Pokemons } from "../components/PokemonsContainer/Pokemons";
import { useAppDispatch, useAppSelector } from "../hooks";
import { pokemonActions } from "../redux/slices";
import { Pagination } from "../components/Pagination";
import {Loading} from "../components/Loading";

const PokemonPage = () => {
    const dispatch = useAppDispatch();
    const { allPokemons, currentUrl, isLoading } = useAppSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(pokemonActions.getPokemones({ url: currentUrl }));
    }, [currentUrl, dispatch]);

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                allPokemons && <Pokemons pokemon={allPokemons} />
            )}
            <Pagination />
        </div>
    );
};

export { PokemonPage };
