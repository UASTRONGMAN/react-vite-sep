import {useEffect, useState} from "react";
import {services} from "../services/api.services.ts";
import {ICar} from "../models/ICar.ts";
import Cars from "../components/cars/Cars.tsx";

const CarsPage = () => {
    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {
        services.cars.getAllCars().then(value => setCars(value))
    }, []);
    return (
        <div>
            <Cars cars={cars}/>
        </div>
    );
};

export default CarsPage;