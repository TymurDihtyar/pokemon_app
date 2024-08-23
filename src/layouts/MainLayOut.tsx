import {Outlet} from "react-router-dom";
import {Navbar} from "../components/Navbar/Navbar";

const MainLayOut = () => {

    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export {MainLayOut};