import {urls} from "../constants/urls.ts";
import {IUser} from "../models/IUser.ts";
import {IPost} from "../models/IPost.ts";

const apiServices = {
    users:{
        getAllUsers: async ():Promise<IUser[]> => {
            return await fetch(urls.users.getAllUsers)
                .then(res => res.json())
        },
        getUser: async (id:number):Promise<IUser> => {
            return await fetch(urls.users.getUser(id))
                .then(res => res.json())
        }
    },
    posts:{
        getAllPosts: async ():Promise<IPost[]> => {
            return await fetch(urls.posts.getAllPosts)
                .then(res => res.json())
        },
        getPost: async (id:number):Promise<IPost> => {
            return await fetch(urls.posts.getPost(id))
                .then(res => res.json())
        }
    }
}

export {apiServices}