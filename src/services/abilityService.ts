import {IRes} from "../types";
import axios from "axios";
import {urls} from "../constants/urls";
import {IAbilityOrType} from "../interfaces/ability_typeInterface";

const AbilityService = {
    getPokemonesByAbility:(name: string): IRes<IAbilityOrType> => axios.get(urls.byAbilities(name)),
}

export {AbilityService}