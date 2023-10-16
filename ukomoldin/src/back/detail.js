import React from 'react'
import img from '../img/donasi5.jpeg'
import { Link } from 'react-router-dom'

const Detail = () => {
  return (
    <div className="container mt-5 mb-5">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card border-0 shadow-sm rounded">
        <div className="card-body">
          <button className="btn btn-sm btn-default">
              <Link to="/dashboard"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="gray" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </Link>
          </button>
          <div className="row">
            <div className="col-12">
              <img src={img} className="w-100 rounded" />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              Nama Lengkap : <h4>Nurdin</h4>
              <br />
              Metode Pembayaran : <h4>Transfer Bank</h4>
              <br />
              Nominal : <h4>Rp 1.000.000</h4>
            </div>
            <div className="col">
              Email : <h4>dinz@gmail.com</h4>
              <br />
              No Telepon : <h4>08223418574623</h4>
              <br />
              Pesan : <h4>Semoga Uang ini dapat membantu korban bencana alam</h4>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Detail
