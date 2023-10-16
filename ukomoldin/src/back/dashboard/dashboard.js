import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
    return (
        <div className="container-fluid">
        <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                >
                <span className="fs-5 d-none d-sm-inline ms-5 fs-2">OLDIN</span>
                </a>
                <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
                >
                    <li>
                        <Link to="/dashboard" className='text-decoration-none'>
                            <span className="ms-1 d-none d-sm-inline text-white ">Dashboard</span>{" "}
                        </Link>
                        <ul
                        className="collapse show nav flex-column ms-1"
                        id="submenu1"
                        data-bs-parent="#menu"
                        ></ul>
                        <li className='mt-5'>
                            <Link to="/donatur" className='text-decoration-none'>
                                <span class="ms-1 d-none d-sm-inline text-white ">Donatur</span>
                            </Link>
                        </li>
                        <li className='mt-5'>
                            <Link to="/programdonasi" className='text-decoration-none'>
                                <span class="ms-1 d-none d-sm-inline text-white ">Program Donasi</span>
                            </Link>
                        </li>
                    </li>
                </ul>
                <hr />
                <div className="dropdown pb-4">
                <a
                    href="#"
                    className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img
                    src="https://bodhicounseling.com/wp-content/uploads/2018/05/blank-profile-picture-973460_960_720-300x300.png"
                    alt="hugenerd"
                    width={30}
                    height={30}
                    className="rounded-circle"
                    />
                    <span className="d-none d-sm-inline mx-3">Oldin Admin</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li>
                    <Link to="/admin">
                        <a className="dropdown-item text-decoration-none">
                        Sign out
                        </a>
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
            </div>

            <div className="col">
                <div className="">
                    <nav className="navbar navbar-expand-lg navbar-light bg-dark w-100 container-fluid p-3" style={{ marginLeft: '-12px' }}>
                        <div className='d-flex justify-content-between'>
                            
                        </div>
                    </nav>
                    <div className="row mt-4">
                        <div className="col-xl-6 col-lg-6">
                            <div className="card l-bg-cherry" id='carddashboard'>
                                <div className="card-statistic-3 p-4 text-white">
                                    <div className="card-icon card-icon-large"><i className="fas fa-shopping-cart" /></div>
                                    <div className="mb-4">
                                        <h5 className="card-title mb-0">Program Donasi</h5>
                                    </div>
                                    <div className="row align-items-center mb-2 d-flex">
                                        <div className="col-8">
                                            <h2 className="d-flex align-items-center mb-0">
                                            2
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="card l-bg-blue-dark">
                                <div className="card-statistic-3 p-4 text-white">
                                    <div className="card-icon card-icon-large"><i className="fas fa-users" /></div>
                                    <div className="mb-4">
                                        <h5 className="card-title mb-0">Donatur</h5>
                                    </div>
                                    <div className="row align-items-center mb-2 d-flex">
                                        <div className="col-8">
                                            <h2 className="d-flex align-items-center mb-0">
                                            6
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="card l-bg-green-dark">
                                <div className="card-statistic-3 p-4 text-white">
                                    <div className="card-icon card-icon-large"><i className="fas fa-ticket-alt" /></div>
                                    <div className="mb-4">
                                        <h5 className="card-title mb-0">Jumlah Dana Donasi</h5>
                                    </div>
                                    <div className="row align-items-center mb-2 d-flex">
                                        <div className="col-8">
                                            <h2 className="d-flex align-items-center mb-0">
                                            Rp. 25.000.000.000
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="card l-bg-orange-dark">
                                <div className="card-statistic-3 p-4 text-white">
                                    <div className="card-icon card-icon-large"><i className="fas fa-dollar-sign" /></div>
                                    <div className="mb-4">
                                        <h5 className="card-title mb-0">Jumlah Kegiatan Donasi</h5>
                                    </div>
                                    <div className="row align-items-center mb-2 d-flex">
                                        <div className="col-8">
                                            <h2 className="d-flex align-items-center mb-0">
                                            3
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Dashboard;
