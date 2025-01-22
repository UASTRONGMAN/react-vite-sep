import {FC} from "react";
import {ICar} from "../../models/ICar.ts";
import Car from "./car/Car.tsx";

interface IProps{
    cars: ICar[]
}

const Cars:FC<IProps> = ({cars}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;