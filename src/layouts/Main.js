import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';
import Header from '../Pages/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;