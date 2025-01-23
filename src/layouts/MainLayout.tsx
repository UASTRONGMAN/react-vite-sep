import {Outlet} from "react-router-dom";
import Header from "../components/header/Header.tsx";


const MainLayout = () => {
    return (
        <div>
            <Header/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;