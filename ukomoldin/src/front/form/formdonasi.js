import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import gopay from '../../img/gopay.png';
import dana from '../../img/dana.png';
import linkaja from '../../img/linkaja.png';
import bri from '../../img/bri.png';
import mandiri from '../../img/mandiri.png';
import bni from '../../img/bni.png';
import './formdonasi.css';
import { useForm } from 'react-hook-form';

const MAX_STEPS = 3;

const Formdonasi = () => {

    const [ formStep, setFormStep ] = React.useState(0);
    const { watch, register, handleSubmit ,formState: { errors, isValid } } = useForm({mode : "all"});
    const completeFormStep = () => {
        setFormStep(cur => cur + 1)
    }
    const renderButton = () => {
        if (formStep > 2) {
            return undefined
        } else if (formStep === 2) {
            return (
                <button 
                    disabled={!isValid}
                    type="submit" 
                    className="btn btn-primary mt-1 w-100">
                        Submit
                </button>
            )
        } else {
            return (
                <button 
                    disabled={!isValid}
                    onClick={completeFormStep} 
                    type="button" 
                    className="btn btn-primary w-100">
                        Selanjutnya
                </button>
            )
        }
    }

    const goToPreviousStep = () => {
        setFormStep(cur => cur -1);
    }

    return (

        <div className="d-flex justify-content-center container mt-5 mb-5">
            <div className="card border-0 shadow-lg rounded" id='card' style={{ background: '#fff' }}>
                <div className="about-product mt-3 ms-4 me-4">
                    <form onSubmit={handleSubmit((data) => window.alert(JSON.stringify(data, null, 2)))}>
                        {formStep < MAX_STEPS && 
                        <div>
                            {formStep > 0 && 
                                <button className='border-0 bg-white' onClick={goToPreviousStep} type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="black" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                        <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                </button>
                            }
                            <p className='text-center text-black-50 '>Form ke-{formStep + 1} dari {MAX_STEPS} </p>
                        </div>
                        }
                        {formStep === 0 && ( 
                            <section>
                                <div className='mt-3'>
                                    <h3 className='text-center fw-bold'> Masukkan Nominal Donasi </h3>
                                    <h6 className="mt-4 text-black-50 text-center">Masukkan nominal donasi yang anda inginkan</h6>
                                </div>
                                <hr className="text-black-50 mt-4" />
                                <div className="input-group flex-nowrap mt-4">
                                    <span className="input-group-text" id="nominal">Rp.</span>
                                    <input type="number" id="nominal" name="nominal" className="form-control p-3 p-3" {...register('nominal', { required: true })}  />
                                </div>
                                {errors.nominal && <p className='mt-2 text-danger'>Form ini tidak boleh kosong !</p>}
                            </section>
                        )}

                        {formStep === 1 && ( 
                            <section>
                                <div className='mt-3'>
                                    <h3 className='text-center fw-bold'> Pilih Metode Pembayaran </h3>
                                    <h6 className="mt-4 text-black-50 text-center">Pilih metode pembayaran yang anda inginkan</h6>
                                </div>
                                <hr className="text-black-50 mt-4" />
                                <div>
                                    <h6>Pembayaran Instan (Minimal 10.000)</h6>
                                    <div className="card mt-3">
                                        <div className="card-body">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="pembayaran" id="gopay" value="gopay" {...register('pembayaran', { required: true })} />
                                                <label className="form-check-label">
                                                    <img src={gopay} style={{ width: '140px' }} alt="" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mt-3">
                                        <div className="card-body">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="pembayaran" id="dana" value="dana" {...register('pembayaran', { required: true })}/>
                                                <label className="form-check-label" htmlFor="exampleRadios2">
                                                    <img src={dana} style={{ width: '140px' }} alt="" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mt-3">
                                        <div className="card-body">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="pembayaran" id="linkaja" value="linkaja" {...register('pembayaran', { required: true })}/>
                                                <label className="form-check-label" htmlFor="exampleRadios2">
                                                    <img src={linkaja} style={{ width: '140px' }} alt="" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <h6 className='mt-5'>Virtual Account (Verifikasi Otomatis)</h6>
                                    <div className="card mt-3">
                                        <div className="card-body">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="pembayaran" id="bri" value="bri" {...register('pembayaran', { required: true })}/>
                                                <label className="form-check-label">
                                                    <img src={bri} style={{ width: '140px' }} alt="" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mt-3">
                                        <div className="card-body">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="pembayaran" id="mandiri" value="mandiri" {...register('pembayaran', { required: true })}/>
                                                <label className="form-check-label">
                                                    <img src={mandiri} style={{ width: '140px' }} alt="" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mt-3">
                                        <div className="card-body">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="pembayaran" id="bni" value="bni" {...register('pembayaran', { required: true })}/>
                                                <label className="form-check-label">
                                                    <img src={bni} style={{ width: '140px' }} alt="" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {errors.pembayaran && <p className='mt-2 text-danger'>Pilih satu metode pembayaran.</p>}
                                </div>
                            </section>
                        )}    

                        {formStep === 2 && ( 
                            <section>
                                <div className='mt-3'>
                                    <h3 className='text-center fw-bold'> Data Lengkap </h3>
                                    <h6 className="mt-4 text-black-50 text-center">Isi data diri anda dan pastikan semuanya benar</h6>
                                </div>
                                <hr className="text-black-50 mt-4" />
                                <h5>Nominal Donasi</h5>
                                <div className="input-group flex-nowrap mt-4">
                                    <span className="input-group-text" id="addon-wrapping">Rp.</span>
                                    <input type="text" className="form-control p-3 p-3" name='nominal' id='nominal' {...register('nominal', { required: true })} />
                                </div>
                                {errors.nominal && <p className='mt-2 text-danger'>Form ini tidak boleh kosong !</p>}
                                <div className="card mt-4">
                                    <div className="card-body">
                                        <h6>Dukung Oldin untuk terus memudahkanmu menolong sesama</h6>
                                        <div className="row">
                                            <div className="col">
                                                <div className="card mt-4" id='carddonasi'>
                                                    <div className="card-body">
                                                        <h6 className='text-center'>Rp.1000</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="card mt-4" id='carddonasi'>
                                                    <div className="card-body">
                                                        <h6 className='text-center'>Rp.3000</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="card mt-4" id='carddonasi'>
                                                    <div className="card-body">
                                                        <h6 className='text-center'>Rp.5000</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion mt-4" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Masukkan Nominal lain
                                                </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <div className="input-group flex-nowrap mt-2 mb-2">
                                                            <span className="input-group-text" id="addon-wrapping">Rp.</span>
                                                            <input type="text" className="form-control p-3 p-3" name='dukungan' id='dukungan' {...register('dukungan')} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-4">
                                    <div className="card-body ms-3 d-flex justify-content-between">
                                        <img src={bri} style={{ width: '140px' }} alt="" />
                                        <button type="button" className="btn btn-primary rounded-pill mt-2 me-2" style={{ width: '70px' , height: '45px' , color: 'white'}}>Ganti</button>
                                    </div>
                                </div>
                                <div className="card mt-4">
                                    <div className="card-body">
                                        <p>Oldin adalah sebuah platform untuk menitipkan segala donasimu. Oleh karena itu donasimu sudah termasuk 5% donasi operasional Yayasan Kitabisa, kecuali untuk kategori zakat dan bencana alam nasional.</p>
                                        <a href="#">Selengkapnya</a>
                                    </div>
                                </div>

                                <br />
                                <hr />

                                <div className="card mt-4">
                                    <div className="card-body">
                                        <p className='text-center '>Lengkapi data diri anda</p>
                                        <div className="mb-3">
                                            <label for="nama" class="form-label">Nama lengkap</label>
                                            <input className="form-control p-3" type="text" placeholder="Masukkan nama lengkap anda" id='nama' name='nama' {...register('nama', { required: true })}></input>
                                        </div>
                                        {errors.nama && <p className='mt-2 text-danger'>Form ini tidak boleh kosong !</p>}
                                        <div className="mb-3">
                                            <label for="asalkota" class="form-label">Asal kota</label>
                                            <input className="form-control p-3" type="text" placeholder="Masukkan asal kota anda" id='asalkota' name='asalkota' {...register('asalkota', { required: true })}></input>
                                        </div>
                                        {errors.asalkota && <p className='mt-2 text-danger'>Form ini tidak boleh kosong !</p>}
                                        <div className="mb-3">
                                            <label for="telp" class="form-label">No telp</label>
                                            <input className="form-control p-3" type="number" placeholder="Masukkan no telp anda" id='telp' name='telp' {...register('telp', { required: true })}></input>
                                        </div>
                                        {errors.telp && <p className='mt-2 text-danger'>Form ini tidak boleh kosong !</p>}
                                        <div className="mb-3">
                                            <label for="email" class="form-label">Email</label>
                                            <input className="form-control p-3" type="email" placeholder="Masukkan email anda" id='email' name='email' {...register('email', { required: true })}></input>
                                        </div>
                                        {errors.email && <p className='mt-2 text-danger'>Form ini tidak boleh kosong !</p>}
                                        <div className="mb-3">
                                            <label htmlFor="doa" className="form-label">Sertakan doa dan dukungan</label>
                                            <textarea className="form-control p-3" name='doa' id="doa" rows={5} {...register('doa', { required: true })} placeholder="Tulis doa untuk penggalang dana atau dirimu agar bisa diamini oleh Orang baik lainnya" />
                                        </div>
                                        {errors.doa && <p className='mt-2 text-danger'>Form ini tidak boleh kosong !</p>}
                                    </div>
                                </div>
                            </section>
                        )}

                    {formStep === 3 && ( 
                        <section>
                            <h3 className='text-center mt-2'>Donasi anda telah diterima. <br /> Terimakasih Orang Baik !!</h3>
                        </section>
                    )}


                        <div className='mt-5 mb-3' style={{ marginTop: '80px' }}>
                            {renderButton()}
                        </div>

                        {/* Show Data Field */}
                        <pre>{JSON.stringify(watch(), null, 2)}</pre>
                    </form>
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

export default Formdonasi;
