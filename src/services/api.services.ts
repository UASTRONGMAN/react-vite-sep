import axios from 'axios'
import {baseURL, urls} from "../constants/urls.ts";
import {ICar} from "../models/ICar.ts";

const axiosInstance = axios.create({
    baseURL,
    // headers:{"Content-Type":"application/json"}
});

const services = {
    cars: {
        getAllCars: async (): Promise<ICar[]> => {
            const {data} = await axiosInstance.get<ICar[]>(urls.cars.getAllCars);
            return data
        },
        adCarForm: async (car:ICar) => {
            await axiosInstance.post<ICar>(urls.cars.getAllCars, car);

        }
    }

}

export {services}