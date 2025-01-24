import {useEffect, useState} from "react";
import {getProducts} from "../services/api.services.ts";
import {IProduct} from "../models/IProduct.ts";
import Products from "../components/products/Products.tsx";


const ProductsPage = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        getProducts().then(value => setProducts(value))
    })
    return (
        <div>
            <Products products={products}/>
        </div>
    );
};

export default ProductsPage;