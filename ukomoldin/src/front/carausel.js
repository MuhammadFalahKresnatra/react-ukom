import React from 'react';
import './carausel.css';
import donasi1 from '../img/donasi1.jpeg';
import donasi2 from '../img/donasi2.jpeg';
import donasi3 from '../img/donasi3.jpeg';
import { Link } from 'react-scroll';

const Carausel = () => {
    return (
        <>
        <section id="intro">
            <div className="row">
                <div className="col-6">
                    <div className="introContent">
                        <span className="hello">Selamat Datang</span>
                        <span className="introText">di <span className="introName">OLDIN</span> <br />Online Donation </span>
                        <p className="introPara">Web ini adalah web untuk donasi <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <Link><button className="btn btn-primary p-2 rounded-3">Donasi Sekarang!</button></Link>
                    </div>
                </div>
                <div className="col-6">
                    <img src={donasi2} alt="Profile" className="bg mt-5 ml-2 rounded-4" />
                </div>
            </div>
        </section>
        </>
    );
}

export default Carausel;
