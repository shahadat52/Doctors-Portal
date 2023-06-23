import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <div className='fixed top-0 left-0 right-0 z-10 shadow-lg'>
            <Navbar />
            </div>
            <div className='relative mt-32'>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;