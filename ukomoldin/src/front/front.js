import React from 'react';
import Navbar from './navbar';
import Carausel from './carausel';
import Isi from './isi';
import Footer from './footer';

const Front = () => {
    return (
        <div>
            <Navbar/>
            <Carausel/>
            <Isi/>
            <Footer/>
        </div>
    );
}

export default Front;
