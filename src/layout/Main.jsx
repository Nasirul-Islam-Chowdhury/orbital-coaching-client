import React from 'react';
import Header from '../shared pages/header/Header';
import Footer from '../shared pages/footer/Footer';
import { Outlet } from 'react-router-dom';

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