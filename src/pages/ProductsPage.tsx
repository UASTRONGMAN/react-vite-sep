import {useEffect, useState} from "react";
import {getProducts, refresh} from "../services/api.services.ts";
import {IProduct} from "../models/IProduct.ts";
import Products from "../components/products/Products.tsx";


const ProductsPage = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        getProducts()
            .then(value => setProducts(value))
            .catch(result => {
                console.log(result)
                refresh().then(() => getProducts().then(value => setProducts(value)))
            })
    }, [])
    return (
        <div>
            <Products products={products}/>
        </div>
    );
};

export default ProductsPage;