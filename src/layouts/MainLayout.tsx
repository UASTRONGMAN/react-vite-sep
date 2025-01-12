import Header from "../components/header/Header.tsx";
import {Outlet} from "react-router-dom";

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