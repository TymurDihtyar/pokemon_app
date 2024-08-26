import {IPokemon} from "./pokemosInterface";

export interface IAbilityOrType {
    id: number
    name: string
    pokemon: IPokemonByAbilityOrType[]
}

export interface IPokemonByAbilityOrType {
    pokemon: IPokemon
}