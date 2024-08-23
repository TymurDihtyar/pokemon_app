import {FC, PropsWithChildren} from 'react';
import {IPokemon} from "../../interfaces/pokemosInterface";
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {pokemonActions} from "../../redux/slices";

interface IProps extends PropsWithChildren {
    item: IPokemon
}

const OnePokemon: FC<IProps> = ({item}) => {
    const dispatch = useAppDispatch();
    const {url, name} = item
    const id = url.split('/').reverse()[1]

    return (
        <NavLink to={`/pokemons/${id}`} onClick={() => dispatch(pokemonActions.getPokemonById({id}))}>
            <div className="flex flex-col items-center">
                <div
                    className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                        alt={name}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                </div>
                <h3 className="mt-2 font-medium text-white">{name.toUpperCase()}</h3>
            </div>
        </NavLink>
    );
};

export {OnePokemon};