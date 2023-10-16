import React from 'react';
import logo from '../img/logo.png'

const Footer = () => {
    return (

        <>

        <div className="mt-5">
            <footer className="text-center text-lg-start bg-light" style={{marginTop: '150px'}}>
                <div className="container p-4 pb-0">
                <section className>
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <img className='' src={logo} style={{ width: '200px' , marginTop: '-60px'}} alt="" />
                            <p style={{ marginTop: '-41px' }}>
                                Oldin web donation, tempat dimana kebaikan bertemu dengan aksi. Kami adalah sebuah platform yang didedikasikan untuk membawa perubahan posistif
                            </p>
                        </div>
                            <hr className="w-100 clearfix d-md-none" />
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Program</h6>
                            <p>
                                <a className="text-decoration-none text-black">Program Pilihan</a>
                            </p>
                            <p>
                                <a className="text-decoration-none text-black">Program Unggulan</a>
                            </p>
                        </div>
                    <hr className="w-100 clearfix d-md-none" />
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">
                        Link 
                        </h6>
                        <p>
                        <a className="text-decoration-none text-black">Home</a>
                        </p>
                        <p>
                        <a className="text-decoration-none text-black">About Us</a>
                        </p>
                        <p>
                        <a className="text-decoration-none text-black">Contact</a>
                        </p>
                    </div>
                    <hr className="w-100 clearfix d-md-none" />
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                        <p><i className="fas fa-home mr-3" /> Rungkut, Surabaya, IDN</p>
                        <p><i className="fas fa-envelope mr-3" /> infooldin@gmail.com</p>
                        <p><i className="fas fa-phone mr-3" /> 081334557652</p>
                    </div>
                    </div>
                </section>
                <hr className="my-3" />
                <section className="p-3 pt-0">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7 col-lg-12 text-center text-md-start">
                            <div className="p-3 text-center">
                            © 2023 Copyright by
                            <a className="text-decoration-none text-black"> OLDIN</a>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </footer>
        </div>
        
        </>
    );
}

export default Footer;
