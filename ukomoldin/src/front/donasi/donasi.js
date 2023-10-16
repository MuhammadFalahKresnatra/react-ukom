import React from 'react';
import './donasi.css';
import donasi from '../../img/donasi6.jpg';
import logo from '../../img/penggalangdana.jpg';
import cerita from '../../img/quotes.jpg';
import user from '../../img/user.jpg';
import { Link } from "react-router-dom";

const Donasi = () => {
    return (
        <div className="d-flex justify-content-center container mt-5 mb-5">
            <div className="card bg-white" id='card'>
                <div className="fotodonasi">
                    <img src={donasi} className="card-img-top"  width={400} height={420} />
                    <Link to="/"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </Link>
                </div>
                <div className="about-product mt-3 ms-4 me-4">
                    <div>
                        <h3> Donasi Kemanusiaan Bantuan Langsung <br /> Sembako</h3>
                        <h6 className="mt-0 text-black-50">Program Unggulan</h6>
                        <h5 className='mt-4' style={{ color: "#0275d8" }}>Rp. 23.400.000</h5>
                        <div className='d-flex'> <p className='text-black-50'>Terkumpul dari</p> <p className='ms-2'>Rp.30.000.000 </p> </div> 
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="row mt-4 ">
                            <div className="col border-end">
                                <h6 className='text-center'> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="#0275d8" className="bi bi-award-fill" viewBox="0 0 16 16">
                                        <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                                    </svg>
                                    <span><h5 className='mt-3 '>150</h5><p className='text-black-50'>Total Donasi</p> </span>
                                </h6>
                            </div>
                            <div className="col">
                                <h6 className='text-center'> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="#0275d8" className="bi bi-file-earmark-ruled-fill" viewBox="0 0 16 16">
                                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM3 9h10v1H6v2h7v1H6v2H5v-2H3v-1h2v-2H3V9z" />
                                    </svg>
                                    <span><h5 className='mt-3 '>3</h5><p className='text-black-50'>Kabar Terbaru</p> </span>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <hr className="text-black-50 mt-4" />
                    <div >
                        <h4 className='mt-4'>Informasi Penggalangan Dana</h4>
                        <div className='border p-3 rounded'>
                            <h6>Penggalang Dana</h6>
                            <div className='d-flex'>
                                <img className='mt-2' src={logo} style={{ width: '70px' }} alt="" />
                                <p className='ms-5 mt-3'> 
                                    <span className='fw-bold '>Penghubung Kebaikan</span> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="#0275d8" className="bi bi-patch-check-fill ms-3" viewBox="0 0 16 16">
                                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                    </svg>
                                    <br /> 
                                    <span className='text-black-50 fs-6'> Identitas Terverifikasi</span>
                                </p> 
                            </div>
                        </div>
                    </div>
                    <hr className="text-black-50 mt-5" />
                    <div >
                        <div className='d-flex justify-content-between'>
                            <h4 className='mt-4'>Cerita Penggalangan Dana</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-right mt-4" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                        <p className='text-black-50'>11 Sep 2023</p>
                        <img className='mt-1 rounded w-100 h-50 md:w-auto' src={cerita} alt="" />
                    </div>
                    <hr className="text-black-50 mt-5" />
                    <div>
                        <div className='d-flex justify-content-between'>
                            <h4 className='mt-4'>Doa Doa #OrangBaik</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-right mt-4" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                        <div className="card bg-white border-0 mt-3 shadow p-2 rounded">
                            <div class="card-body">
                                <div className='d-flex'>
                                    <img className='mt-2' src={user} style={{ width: '70px' }} alt="" />
                                    <p className='ms-5 mt-3'> 
                                        <span className='fw-bold '>Bambang Kuswanto</span> 
                                        <br /> 
                                        <span className='text-black-50 fs-6'>Orang baik</span>
                                    </p> 
                                </div>
                                <p className='mt-3'>Semoga uang tak seberapa ini bisa sedikit membantu.. semoga rezeki untuk sahabat saya yg selalu membantu dikala susah dilipatgandakan, dimudahkan segala urusannya, disehatkan dan qobal segala doa nya.. Aamiin ya allah</p>
                            </div>
                        </div>
                        <div className="card bg-white border-0 mt-4 shadow p-2 rounded">
                            <div class="card-body">
                                <div className='d-flex'>
                                    <img className='mt-2' src={user} style={{ width: '70px' }} alt="" />
                                    <p className='ms-5 mt-3'> 
                                        <span className='fw-bold '>Muhammad Nurdin</span> 
                                        <br /> 
                                        <span className='text-black-50 fs-6'>Orang baik</span>
                                    </p> 
                                </div>
                                <p className='mt-3'>Yaa Allah Yaa Latif Yaa Mujib, ampuni kami, berkahi kami, lembutkan hati kami, lepangkan hati suami dan hati kami semua agar iklas mengurus org tua kami dgn penuh tanggung jawab dan kasih sayang. Ridhoi lah semua langkah2 &hajat kami ya Allah</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 mb-3' style={{ marginTop: '80px' }}>
                        <Link to="/formdonasi"> <button type="button" className="btn btn-primary w-100">Donasi</button> </Link>
                    </div>
                </div>
                {/* <div className="stats mt-2">
                    <div className="d-flex justify-content-between p-price"><span>Pro Display XDR</span><span>$5,999</span></div>
                    <div className="d-flex justify-content-between p-price"><span>Pro stand</span><span>$999</span></div>
                    <div className="d-flex justify-content-between p-price"><span>Vesa Mount Adapter</span><span>$199</span></div>
                </div> */}
            </div>
        </div>
    );
}

export default Donasi;
