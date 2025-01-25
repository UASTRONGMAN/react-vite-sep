import axios from 'axios'
import {baseURL, urls} from "../constants/urls.ts";
import {ILoginResponseModel} from "../models/ILoginResponseModel.ts";
import {ILoginDataModel} from "../models/ILoginDataModel.ts";
import {IProductsResponseModel} from "../models/IProductsResponseModel.ts";
import {IProduct} from "../models/IProduct.ts";
import {retriveLocalStorage} from "../helpers/api.helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";


const axiosInstance = axios.create({
    baseURL,
    headers: {}
});


axiosInstance.interceptors.request.use(request => {
    if (request.method?.toUpperCase() === 'GET') {
        request.headers.Authorization = 'Bearer ' + retriveLocalStorage<ILoginResponseModel>('user').accessToken
    }
    return request
})


export const login = async (loginData:ILoginDataModel):Promise<ILoginResponseModel> => {
    const {data} = await axiosInstance.post<ILoginResponseModel>(urls.auth, loginData);
    localStorage.setItem('user', JSON.stringify(data))
    console.log(data)
    return data
}


export const getProducts = async ():Promise<IProduct[]> => {
    const {data} = await axiosInstance.get<IProductsResponseModel>(urls.products);
    return data.products
}

export const refresh = async () => {
    const userWithTokens = retriveLocalStorage<ILoginResponseModel>('user');
    const {data:{accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>(urls.refresh, {refreshToken: userWithTokens.refreshToken, expiresInMins:1});
    userWithTokens.accessToken = accessToken
    userWithTokens.refreshToken = refreshToken
    localStorage.setItem('user', JSON.stringify(userWithTokens))
}


