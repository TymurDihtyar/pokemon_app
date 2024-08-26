import {IRes} from "../types";
import axios from "axios";
import {urls} from "../constants/urls";
import {IAbilityOrType} from "../interfaces/ability_typeInterface";

const TypeService = {
    getPokemonesByType:(name: string): IRes<IAbilityOrType> => axios.get(urls.byTypes(name)),
}

export {TypeService}