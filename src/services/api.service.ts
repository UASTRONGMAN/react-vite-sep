import {baseURL} from "../constants/urls.ts";
import {ITodo} from "../models/ITodo.ts";

const getTodos = async ():Promise<ITodo[]> => {
    return await fetch(baseURL).then(value => value.json())
}

export {getTodos}