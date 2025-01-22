import {useForm} from "react-hook-form";
import {ICar} from "../models/ICar.ts";
import {services} from "../services/api.services.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/car.validator.ts";



const FormPage = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<ICar>({mode:'all', resolver: joiResolver(carValidator)});

    const submit = (car:ICar) => {
        services.cars.adCarForm(car)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>
                    <input type="text" placeholder={'brand'} {...register('brand')}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </label>

                <label>
                    <input type="number" placeholder={'price'} {...register('price')}/>
                    {errors.price && <div>{errors.price.message}</div>}
                </label>

                <label>
                    <input type="number" placeholder={'year'} {...register('year')}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </label>
                <button>Add car</button>
            </form>
        </div>
    );
};

export default FormPage;