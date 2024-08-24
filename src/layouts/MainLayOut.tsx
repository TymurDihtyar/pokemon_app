import {Outlet} from "react-router-dom";
import {Navbar} from "../components/Navbar/Navbar";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MainLayOut = () => {

    return (
        <>
            <Navbar/>
            <Outlet/>
            <ToastContainer/>
        </>
    );
};

export {MainLayOut};