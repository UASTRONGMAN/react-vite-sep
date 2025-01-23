import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import AuthPage from "../pages/AuthPage.tsx";
import ProductsPage from "../pages/ProductsPage.tsx";

export const router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {path:'/auth', element:<AuthPage/>},
            {path:'/products', element:<ProductsPage/>}
        ]}
])