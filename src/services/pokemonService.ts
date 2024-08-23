import {IRes} from "../types";
import {IPokemons} from "../interfaces/pokemosInterface";
import axios from "axios";
import {urls} from "../constants/urls";
import {IOnePokemon} from "../interfaces/onePokemonInterface";

const PokemonService = {
    getAll:(url: string): IRes<IPokemons> => axios.get(url),
    getOne: (id: string): IRes<IOnePokemon> => axios.get(urls.pokemon(id)),
}

export {PokemonService}