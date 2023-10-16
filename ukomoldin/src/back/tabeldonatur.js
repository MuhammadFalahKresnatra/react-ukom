import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'

const Tabeldonatur = () => {
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
            <div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-8 w-100 ">
                  <div className="card p-2 border-0 shadow mt-5">
                    <div className="card-header">
                      <span>
                        <i className="bi bi-table me-2" />
                      </span>{" "}
                      <h2>Data Donasi</h2>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <button type="button" class="btn btn-primary btn-sm">Tambah Data</button>
                        <table
                          id="example"
                          className="table table-striped data-table"
                          style={{ width: "100%" }}
                        >
                          <thead>
                            <tr>
                              <th>Nama</th>
                              <th>Donasi Ke</th>
                              <th>Nominal</th>
                              <th>Detail</th>
                              <th>Aksi</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Novian</td>
                              <td>Masjid</td>
                              <td>1.000.000</td>
                              <td>
                                <Link to="/detail">
                                  <button type="button" class="btn btn-primary btn-sm ">
                                    Detail
                                  </button>
                                </Link>
                              </td>
                              <td>
                                <button  className="btn btn-warning me-3 btn-sm ">
                                  Edit
                                </button>
                                <button className="btn btn-danger btn-sm ">
                                  Delete
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>Dwi</td>
                              <td>Korban Bencana Alam</td>
                              <td>500.000</td>
                              <td>
                                <Link to="/detail">
                                  <button type="button" class="btn btn-primary btn-sm ">
                                    Detail
                                  </button>
                                </Link>
                              </td>
                              <td>
                                <button className="btn btn-warning me-3 btn-sm">
                                  Edit
                                </button>
                                <button className="btn btn-danger btn-sm">
                                  Delete
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>Rafi Fahrezi</td>
                              <td>Panti Asuhan</td>
                              <td>2.000.000.000</td>
                              <td>
                                <Link to="/detail">
                                  <button type="button" class="btn btn-primary btn-sm ">
                                    Detail
                                  </button>
                                </Link>
                              </td>
                              <td>
                                <button className="btn btn-warning me-3 btn-sm">
                                  Edit
                                </button>
                                <button className="btn btn-danger btn-sm ">
                                  Delete
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }

export default Tabeldonatur;
