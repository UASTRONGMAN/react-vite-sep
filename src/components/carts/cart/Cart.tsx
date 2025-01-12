import {FC} from "react";
import {ICart} from "../../../models/ICart.ts";

interface IProps{
    cart:ICart
}
const Cart:FC<IProps> = ({cart}) => {
    return (
        <div>
            {cart.id}. {JSON.stringify(cart.products)}
        </div>
    );
};

export default Cart;