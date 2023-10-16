import React, { useState } from "react";
import './navbar.css';
import logo from '../img/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {

    return (

        <>

        <header className='bg-light position-sticky top-0'>
            <div className="logo"> <img src={logo} alt="" className='w-50' /></div>
            <input type="checkbox" id="nav_check" hidden />
            <nav>
                <ul>
                <Link to="/"> 
                    <li> <a href className="active">Home</a> </li>
                </Link> 
                <Link to="/ajukandonasi"> 
                    <li> <a href className="">Ajukan Donasi</a> </li>
                </Link>  
                <Link to="/aboutus"> 
                    <li> <a href className="">About Us</a> </li>
                </Link>
                </ul>
            </nav>
            <label htmlFor="nav_check" className="hamburger">
                <div />
                <div />
                <div />
            </label>
        </header>

        </>
    );
}

export default Navbar;
