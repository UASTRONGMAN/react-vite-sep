import {IProduct} from "../../models/IProduct.ts";
import {FC} from "react";
import Product from "./product/Product.tsx";


interface IProps{
    products:IProduct[]
}

const Products:FC<IProps> = ({products}) => {
    return (
        <div>
            {products.map(product => <Product key={product.id} product={product}/>)}
        </div>
    );
};

export default Products;