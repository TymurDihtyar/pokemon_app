import {FC, PropsWithChildren} from 'react';
import {IPokemon} from "../../interfaces/pokemosInterface";
import {OnePokemon} from "./OnePokemon";

interface IProps extends PropsWithChildren {
    pokemon: IPokemon[]
}

const Pokemons:FC<IProps> = ({pokemon}) => {

    return (
        <div className="bg-gradient-to-bl from-indigo-300 via-blue-300 to-purple-300 min-h-screen pt-10">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
                    {pokemon.map((item) => (
                        <OnePokemon key={item.name} name={item.name} id={item.url.split('/').reverse()[1]}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export {Pokemons};
