import React from 'react';
import './ajukandonasi.css';
import donasi from '../../img/donasi6.jpg';
import logo from '../../img/penggalangdana.jpg';
import cerita from '../../img/quotes.jpg';
import user from '../../img/user.jpg';
import atas from '../../img/crotahh.jpg';
import { Link } from "react-router-dom";

const Ajukandonasi = () => {
    return (
        <div className="d-flex justify-content-center container mt-5 mb-5">
            <div className="card bg-white" id='card'>
                <div className="fotodonasi">
                    <img src={atas} className="card-img-top"  width={400} height={350} />
                    <Link to="/"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="black" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </Link>
                </div>
                <div className="about-product mt-3 ms-4 me-4">
                    <div className='mt-3'>
                        <h3 className='text-center fw-bold'> Ajukan permintaan donasi anda  <br /> Sekarang juga !</h3>
                        <h6 className="mt-4 text-black-50 text-center">Di Oldin ada jutaan #OrangBaik yang berdonasi ke <br /> segala jenis program donasi setiap harinya</h6>
                    </div>
                    <hr className="text-black-50 mt-4" />
                    <div >
                        <h4 className='mt-4'>Cara mengajukan donasi di Oldin</h4>
                        <div className='d-flex'>
                            <span className='p-2 ms-3 mt-4 rounded-circle text-white bg-primary' style={{ height: '45px' , width: '45px' }}><p className='text-white' style={{ marginLeft: '10px' }}>1</p></span>
                            <div className="card bg-white w-75 border-0 mt-4 shadow p-2 rounded ms-4">
                                <div class="card-body">
                                    <div className='d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-card-checklist" viewBox="0 0 16 16">
                                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                    </div>
                                    <h5 className='mt-3 fw-bold'>Pilih Jenis Donasi</h5>
                                    <p className='mt-3'>Program dana di Oldin ada 2 jenis, yaitu program donasi pilihan dan unggulan.</p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <span className='p-2 ms-3 mt-4 rounded-circle text-white bg-primary' style={{ height: '45px' , width: '45px' }}><p className='text-white' style={{ marginLeft: '10px' }}>2</p></span>
                            <div className="card bg-white w-75 border-0 mt-4 shadow p-2 rounded ms-4">
                                <div class="card-body">
                                    <div className='d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                        </svg>
                                    </div>
                                    <h5 className='mt-3 fw-bold'>Isi form program donasi</h5>
                                    <p className='mt-3'>Isi form secara lengkap dengan mengikuti instruksi yang diberikan.</p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <span className='p-2 ms-3 mt-4 rounded-circle text-white bg-primary' style={{ height: '45px' , width: '45px' }}><p className='text-white' style={{ marginLeft: '10px' }}>3</p></span>
                            <div className="card bg-white w-75 border-0 mt-4 shadow p-2 rounded ms-4">
                                <div class="card-body">
                                    <div className='d-flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-patch-check" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                        <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                                    </svg>
                                    </div>
                                    <h5 className='mt-3 fw-bold'>Tunggu verifikasi admin</h5>
                                    <p className='mt-3'>Tunggu verifikasi admin untuk menampilkan pengajuan program donasi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 mb-3' style={{ marginTop: '80px' }}>
                        <Link to="/formajukandonasi"> <button type="button" className="btn btn-primary w-100">Ajukan Donasi</button> </Link>
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

export default Ajukandonasi;
