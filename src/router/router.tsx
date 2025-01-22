import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import CarsPage from "../pages/CarsPage.tsx";
import FormPage from "../pages/FormPage.tsx";

export const router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {path:'/cars', element:<CarsPage/>},
            {path:'/form', element:<FormPage/>}
        ]}
]);