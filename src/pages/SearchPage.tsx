import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks";
import {pokemonActions} from "../redux/slices";

import {Pokemons} from "../components/PokemonsContainer/Pokemons";
import {PokemonInfo} from "../components/PokemonsContainer/PokemonInfo";
import {ErrorComponent} from "../components/ErrorComponent";

const SearchPage = () => {
    const [query] = useSearchParams();
    const keyword = query.get("keyword");
    const searchType = query.get("searchType");
    const dispatch = useAppDispatch();
    const {pokemonById, pokemonsByAbilityOrType, errors} = useAppSelector(state => state.pokemon);

    useEffect(() => {
        if (searchType === "ability") {
            dispatch(pokemonActions.getPokemonesByAbility({name: keyword}));
        } else if (searchType === "type") {
            dispatch(pokemonActions.getPokemonesByType({name: keyword}));
        } else {
            dispatch(pokemonActions.getPokemonById({id: keyword}));
        }
    }, [keyword, searchType, dispatch]);

    return (
        <>
            {errors ? <ErrorComponent/>
                : <div>
                    {searchType === "ability" || searchType === "type" ? (
                        <Pokemons pokemon={pokemonsByAbilityOrType}/>
                    ) : pokemonById ? (
                        <PokemonInfo pokemonById={pokemonById}/>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>}
        </>

    );
};

export {SearchPage};
