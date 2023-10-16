import React from 'react';
import Navbar from './navbar';
import donasi1 from '../img/donasi2.jpeg';
import donasi2 from '../img/donasi8.jpg';
import donasi3 from '../img/donasi9.png';
import Footer from './footer';

const Aboutus = () => {
    return (
        <div>
            <Navbar/>
            <div>
              <div className="bg-light">
                <div className="container py-5">
                  <div className="row h-100 align-items-center py-5">
                    <div className="col-lg-6">
                      <h1 className="display-4">About Us</h1>
                      <p className="lead text-muted mb-0">Selamat datang di Oldin web donation, tempat dimana kebaikan bertemu dengan aksi. Kami adalah sebuah platform yang didedikasikan untuk membawa perubahan posistif</p>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block"><img src={"https://bootstrapious.com/i/snippets/sn-about/illus.png"} alt className="img-fluid" /></div>
                  </div>
                </div>
              </div>
              <div className="bg-white py-5">
                <div className="container py-5">
                  <div className="row align-items-center mb-5">
                    <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary" />
                      <h2 className="font-weight-light">Misi Kami</h2>
                      <p className="font-italic text-muted mb-4">Misi kami adalah menyediakan sarana yang aman dan efisien bagi individu, kelompok, dan perusahaan untuk berontribusi dalam upaya membantu mereka yang membutuhkan bantuan </p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                    </div>
                    <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={donasi2} alt className="img-fluid mb-4 mb-lg-0" /></div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-lg-5 px-5 mx-auto"><img src={donasi1} alt className="img-fluid mb-4 mb-lg-0 rounded" /></div>
                    <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary" />
                      <h2 className="font-weight-light">Nilai-nilai Kami</h2>
                      <p className="font-italic text-muted mb-4">1. Keterbukaan (Transparan)</p>
                      <p className="font-italic text-muted mb-4">2. Keadilan Sosial </p>
                      <p className="font-italic text-muted mb-4">3. Keselamatan dan Keamanan </p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-light py-5">
                <div className="container py-5">
                  <div className="row mb-4">
                    <div className="col-lg-5">
                      <h2 className="display-4 font-weight-light">Our team</h2>
                      <p className="font-italic text-muted">Dibawah ini adalah beberapa staff & tim kami</p>
                    </div>
                  </div>
                  <div className="row text-center">
                    {/* Team item*/}
                    <div className="col-xl-3 col-sm-6 mb-5">
                      <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt width={100} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                        <h5 className="mb-0">Leny Manjaluna</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                      </div>
                    </div>
                    {/* End*/}
                    {/* Team item*/}
                    <div className="col-xl-3 col-sm-6 mb-5">
                      <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt width={100} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                        <h5 className="mb-0">Bambang Kusmadi</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                      </div>
                    </div>
                    {/* End*/}
                    {/* Team item*/}
                    <div className="col-xl-3 col-sm-6 mb-5">
                      <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt width={100} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                        <h5 className="mb-0">Nikholas Andrew</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                      </div>
                    </div>
                    {/* End*/}
                    {/* Team item*/}
                    <div className="col-xl-3 col-sm-6 mb-5">
                      <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt width={100} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                        <h5 className="mb-0">Arief Muhammad</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                      </div>
                    </div>
                    {/* End*/}
                  </div>
                </div>
              </div>
              <Footer/>
          </div>
</div>

    );
}

export default Aboutus;
