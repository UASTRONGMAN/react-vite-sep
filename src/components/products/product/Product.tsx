import {IProduct} from "../../../models/IProduct.ts";
import {FC} from "react";


interface IProps{
    product: IProduct
}

const Product:FC<IProps> = ({product}) => {
    return (
        <div>
            {product.id}. {product.title}.
        </div>
    );
};

export default Product;