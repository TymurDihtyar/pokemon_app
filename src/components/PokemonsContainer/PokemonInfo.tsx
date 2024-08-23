import { FC, PropsWithChildren } from 'react';
import { useState } from 'react';
import { Radio, RadioGroup } from '@headlessui/react';
import { IOnePokemon } from "../../interfaces/onePokemonInterface";

interface IProps extends PropsWithChildren {
    pokemonById: IOnePokemon;
}

const PokemonInfo: FC<IProps> = ({ pokemonById }) => {
    const { stats, forms, name, abilities, types, sprites, id } = pokemonById;
    const [selectedForm, setSelectedForm] = useState<string>(null);

    return (
        <div className="bg-white">
            <div className="pt-6">
                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <img
                            alt={sprites.other.dream_world.front_default}
                            src={sprites.other.dream_world.front_default}
                            className="h-full w-full object-contain object-center"
                        />
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg flex justify-center">
                            <img
                                alt={sprites.other.showdown.back_default}
                                src={sprites.other.showdown.back_default}
                                className="h-40 w-40 object-contain object-center "
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg flex justify-center">
                            <img
                                alt={sprites.other.showdown.front_default}
                                src={sprites.other.showdown.front_default}
                                className="h-40 w-40 object-contain object-center"
                            />
                        </div>
                    </div>
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img
                            alt={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                            className="h-full w-full object-contain"
                        />
                    </div>
                </div>

                {/* Product info */}
                <div
                    className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{name.toUpperCase()}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <form className="mt-10">
                            <div>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-gray-900">Forms</h3>
                                </div>

                                <fieldset aria-label="Choose a form" className="mt-4">
                                    <RadioGroup
                                        value={selectedForm}
                                        onChange={setSelectedForm}
                                        className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                                    >
                                        {forms.map((item) => (
                                            <Radio
                                                key={item.name}
                                                value={item.name}
                                                className={({ checked }) =>
                                                    `w-24 cursor-pointer bg-white text-gray-900 shadow-sm group relative
                                                    flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium
                                                    uppercase hover:bg-gray-50 focus:outline-none ${
                                                        checked ? 'ring-2 ring-indigo-500 border-transparent' : 'border-gray-300'
                                                    }`
                                                }
                                            >
                                                <span>{item.name}</span>
                                            </Radio>
                                        ))}
                                    </RadioGroup>
                                </fieldset>
                            </div>

                            <button
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Add to collection
                            </button>
                        </form>
                    </div>

                    <div className="flex justify-around py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-8 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Types</h3>
                                <div className="mt-2">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-lg">
                                        {types.map((item, index) => (
                                            <li key={index} className="text-gray-400">
                                                <span className="text-gray-600">{item.type.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-10">
                                <h3 className="text-lg font-medium text-gray-900">Abilities</h3>
                                <div className="mt-2">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-lg">
                                        {abilities.map((item, index) => (
                                            <li key={index} className="text-gray-400">
                                                <span className="text-gray-600">{item.ability.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h3 className="text-lg font-medium text-gray-900">Stats</h3>
                            <div className="mt-2">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-lg">
                                    {stats.map((item, index) => (
                                        <li key={index} className="text-gray-400">
                                            <span className="text-gray-600">{item.stat.name} : {item.base_stat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export { PokemonInfo };
