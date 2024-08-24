import {IRes} from "../types";
import axios from "axios";
import {IForm} from "../interfaces/formInterface";

const FormService = {
    getForm:(url: string): IRes<IForm> => axios.get(url),
}

export {FormService}