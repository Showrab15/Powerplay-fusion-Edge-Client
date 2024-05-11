import React from 'react';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <>
           <Navbar></Navbar> 
           <ToastContainer />

           <Outlet></Outlet>
           <Footer></Footer>
        </>
    );
};

export default MainLayout;