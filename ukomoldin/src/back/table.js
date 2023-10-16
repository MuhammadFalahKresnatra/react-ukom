import React from "react";
import Sidenav from "./tabeldonatur";
import Navbarback from "./navbar";
import { Link } from 'react-router-dom';

const Table = () => {
  return (

    <div>
      <Sidenav/>
      <div className="col py-5">
          <div className="">
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-dark w-100 container-fluid">
              
            </nav> */}

            <div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-8 w-100 ">
                  <div className="card p-2 border-0 shadow ">
                    <div className="card-header">
                      <span>
                        <i className="bi bi-table me-2" />
                      </span>{" "}
                      <h2>Data Donasi</h2>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
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
  );
};

export default Table