import {FC} from "react";
import {ICar} from "../../../models/ICar.ts";

interface IProps{
    car:ICar
}
const Car:FC<IProps> = ({car}) => {
    return (
        <div>
            {car.id}. {car.brand} --- {car.price}$ --- {car.year}.
        </div>
    );
};

export default Car;