import React from 'react';
import './isi.css';
import donasi1 from '../img/donasi4.jpg';
import donasi2 from '../img/donasi5.jpeg';
import donasi3 from '../img/donasi6.jpg';
import donasipil1 from '../img/donasipil1.png';
import donasipil2 from '../img/donasipil2.jpg';
import donasipil3 from '../img/donasipil3.png';
import { Link } from "react-router-dom";

const Isi = () => {
    return (
        <>
            <div>
                <h2 className='text-center'>Program Unggulan</h2>
                <div className="container mt-5 mb-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="ms-2 c-details">
                                        <h6 className="mb-0">OLDIN | Online Donation</h6>
                                        <img src={donasi3} className="rounded mt-2 md:w-auto" style={{width: '144%' , height: '200px'}}  alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h3 className="heading ms-2">Donasi<br />Kemanusiaan </h3>
                                    <div className="mt-5">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <div className="mt-3"> <span className="text1">120 orang berpatisipasi <span className="text2">dari 150 kapasitas</span></span> </div>
                                        <Link to="/detaildonasi"><button type="button" class="btn btn-primary mt-3">Donasi</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="ms-2 c-details">
                                        <h6 className="mb-0">OLDIN | Online Donation</h6>
                                        <img src={donasi1} className="rounded mt-2" style={{width: '120%' , height: '200px'}}  alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h3 className="heading ms-2">Donasi<br />Renovasi Masjid </h3>
                                    <div className="mt-5">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <div className="mt-3"> <span className="text1">150 orang berpatisipasi <span className="text2">dari 200 kapasitas</span></span> </div>
                                        <Link to="/detaildonasi"><button type="button" class="btn btn-primary mt-3">Donasi</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="ms-2 c-details">
                                        <h6 className="mb-0">OLDIN | Online Donation</h6>
                                        <img src={donasi2} className="rounded mt-2" style={{width: '137%' , height: '200px'}}  alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h3 className="heading ms-2">Donasi<br />Bencana Alam </h3>
                                    <div className="mt-5">
                                        <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <div className="mt-3"> <span className="text1">50 orang berpatisipasi <span className="text2">dari 100 kapasitas</span></span> </div>
                                        <Link to="/detaildonasi"><button type="button" class="btn btn-primary mt-3">Donasi</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className='text-center mt-5'>Program Pilihan</h2>
                <div className="container mt-5 mb-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="ms-2 c-details">
                                        <h6 className="mb-0">OLDIN | Online Donation</h6>
                                        <img src={donasipil1} className="rounded mt-2" style={{width: '100%'}}  alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h3 className="heading ms-2">Donasi<br />untuk Air Bersih </h3>
                                    <div className="mt-5">
                                        <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: '4%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <div className="mt-3"> <span className="text1">100 orang berpatisipasi <span className="text2">dari 2500 kapasitas</span></span> </div>
                                        <Link to="/detaildonasi"><button type="button" class="btn btn-primary mt-3">Donasi</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="ms-2 c-details">
                                        <h6 className="mb-0">OLDIN | Online Donation</h6>
                                        <img src={donasipil2} className="rounded mt-2" style={{width: '100%' , height: '214px'}}  alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h3 className="heading ms-2">Donasi<br /> Jumat Berkah </h3>
                                    <div className="mt-5">
                                        <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <div className="mt-3"> <span className="text1">1000 orang berpatisipasi <span className="text2">dari 2000 kapasitas</span></span> </div>
                                        <Link to="/detaildonasi"><button type="button" class="btn btn-primary mt-3">Donasi</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="ms-2 c-details">
                                        <h6 className="mb-0">OLDIN | Online Donation</h6>
                                        <img src={donasipil3} className="rounded mt-2" style={{width: '100%'}}  alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h3 className="heading ms-2">Pray<br />For Maroko </h3>
                                    <div className="mt-5">
                                        <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                        <div className="mt-3"> <span className="text1">2000 orang berpatisipasi <span className="text2">dari 2000 kapasitas</span></span> </div>
                                        <Link to="/detaildonasi"><button type="button" class="btn btn-primary mt-3">Donasi</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Isi;
