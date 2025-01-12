import {useEffect, useState} from "react";
import {ICart} from "../../models/ICart.ts";
import Cart from "./cart/Cart.tsx";
import {apiServices} from "../../services/api.services.ts";
import {useParams} from "react-router-dom";


const Carts = () => {
    const {id} = useParams();
    console.log(id)
    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        apiServices.carts.byUser(Number(id))
            .then(({carts}:ICart[]) => setCarts(carts))
    }, [id]);
    return (
        <div>
            {carts.map(cart => <Cart key={cart.id} cart={cart}/>)}
        </div>
    );
};

export default Carts;