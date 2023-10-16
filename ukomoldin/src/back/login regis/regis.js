import React from 'react';
import './regis.css';
import { Link } from 'react-router-dom';
import logo from '../../img/logopolos.png'

const Regis = () => {
    return (
        <div className="wrapper">
            <div className="logoback">
                <img src={logo} />
            </div>
            <div className="text-center mt-4 name">
                OLDIN
            </div>
            <form className="p-3 mt-3">
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user" />
                    <input type="text" name="userName" id="userName" placeholder="Username" />
                </div>
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user" />
                    <input type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key" />
                    <input type="password" name="password" id="pwd" placeholder="Password" />
                </div>
                <Link to="/dashboard"><button className="btn mt-3">Register</button></Link>
            </form>
            <div className="text-center fs-6">
                <Link to="/admin"><a className='tombolbawah'>Back</a></Link>
            </div>
        </div>
    );
}

export default Regis;
