import {urls} from "../constants/urls.ts";
import {IUser} from "../models/IUser.ts";
import {IResponse} from "../models/IResponse.ts";

const apiServices = {
    users:{
        getAllUsers: async (skip:string):Promise<IResponse> => {
            return await fetch(urls.users.getAllUsers(skip))
                .then(res => res.json())
        },
        getUser: async (id:number):Promise<IUser> => {
            return await fetch(urls.users.getUser(id))
                .then(res => res.json())
        }
    }
}

export {apiServices}