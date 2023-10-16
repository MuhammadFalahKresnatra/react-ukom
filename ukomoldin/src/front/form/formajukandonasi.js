import React from 'react';
import './formajukandonasi.css';
import { useForm } from 'react-hook-form';

const MAX_STEPS = 3;

const Formajukandonasi = () => {

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
                    className="btn btn-primary mt-4 w-100">
                        Submit
                </button>
            )
        } else {
            return (
                <button 
                    disabled={!isValid}
                    onClick={completeFormStep} 
                    type="button" 
                    className="btn btn-primary mt-4 w-100">
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
                                    <h3 className='text-center fw-bold'> Pilih Program Donasi </h3>
                                    <h6 className="mt-4 text-black-50 text-center">Pilih program donasi yang anda inginkan</h6>
                                </div>
                                <hr className="text-black-50 mt-4" />
                                <select className="form-select p-3" id="program" name="program" {...register('program', { required: true })}>
                                    <option selected disabled value="" >Pilih Program Donasi</option>
                                    <option value="1">Program Pilihan</option>
                                    <option value="2">Program Unggulan</option>
                                </select>
                                {errors.program && <p className='mt-2 text-danger'>Pilih program yang anda inginkan !</p>}
                            </section>
                        )}

                        {formStep === 1 && ( 
                        <section>
                            <div className='mt-3'>
                                <h3 className='text-center fw-bold'> Form Pengajuan Donasi </h3>
                                <h6 className="mt-4 text-black-50 text-center">Isi form ini tuntuk mengajukan donasi </h6>
                            </div>
                            <hr className="text-black-50 mt-4" />
                            
                                <div className="mb-3">
                                    <label htmlFor="nama" className="form-label">Nama Instansi / Perseorangan </label>
                                    <input type="text" className="form-control p-3" id="nama" name='nama' placeholder='Nama Instansi / Perseorangan' {...register('nama', { required: true })}/>
                                </div>
                                {errors.nama && <p className='mt-2 text-danger'>Form ini tidak boleh kosong !</p>}
                                <div className="mb-3">
                                    <label htmlFor="telp" className="form-label">No Telp</label>
                                    <input type="number" className="form-control p-3" id="telp" name='telp' placeholder='Pastikan nomor anda aktif' {...register('telp', { required: true })}/>
                                </div>
                                {errors.telp && <p className='mt-2 text-danger'>Form ini tidak boleh kosong !</p>}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control p-3" id="email" name='email' placeholder='Pastikan email anda aktif' {...register('email', { required: true })}/>
                                </div>
                                {errors.email && <p className='mt-2 text-danger'>Form ini tidak boleh kosong !</p>}
                                <div className="mb-3">
                                    <label htmlFor="foto" className="form-label">Foto Pendukung </label>
                                    <input type="file" className="form-control p-3" id="foto" name='foto'  />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="namaprogram" className="form-label">Nama Program </label>
                                    <input type="text" className="form-control p-3" id="namaprogram" name='namaprogram' placeholder='Contoh : Program Donasi Wamena & Papua' {...register('namaprogram', { required: true })}/>
                                </div>
                                {errors.namaprogram && <p className='mt-2 text-danger'>Form ini tidak boleh kosong !</p>}
                                <div className="mb-3">
                                    <label htmlFor="maksimaldonasi" className="form-label">Perkiraan Maksimal Donasi </label>
                                    <input type="number" className="form-control p-3" id="maksimaldonasi" name='maksimaldonasi' placeholder='Rp.'  {...register('maksimaldonasi', { required: true })}/>
                                </div>
                                {errors.maksimaldonasi && <p className='mt-2 text-danger'>Form ini tidak boleh kosong !</p>}
                                <div className="mb-3">
                                    <label htmlFor="rincian" className="form-label">Isi Rincian Penggunaan Dana Donasi </label>
                                    <input type="text" className="form-control p-3" id="rincian" name='rincian' placeholder='Contoh : Biaya Operasional = 70% , dll = 30%'  {...register('rincian', { required: true })}/>
                                </div>
                                {errors.rincian && <p className='mt-2 text-danger'>Form ini tidak boleh kosong !</p>}
                        </section>
                        )}

                    {formStep === 2 && ( 
                        <section>
                            <div className='mt-3'>
                                <h3 className='text-center fw-bold'> Penerima Donasi </h3>
                                <h6 className="mt-4 text-black-50 text-center">Isi form ini untuk mengetahui kepada siapa tujuan donasi  </h6>
                            </div>
                            <hr className="text-black-50 mt-4" />
                            <div class="mb-3">
                                <label for="namayayasan" class="form-label">Nama Yayasan / Lembaga</label>
                                <textarea class="form-control" id="namayayasan" name='namayayasan' rows="5" placeholder='Contoh : Yayasan At-Taqwa' {...register('namayayasan', { required: true })}></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="namayayasan" class="form-label">Tujuan Donasi</label>
                                <textarea class="form-control" id="tujuandonasi" name='tujuandonasi' rows="5" placeholder='Contoh : Bantuan Operasional untuk Yayasan At-Taqwa' {...register('tujuandonasi', { required: true })}></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="namayayasan" class="form-label">Lokasi / Alamat lengkap</label>
                                <textarea class="form-control" id="lokasi" name='lokasi' rows="5" placeholder='Contoh : Jl. Traniko perum.Pondok Buana No.AB 1, Bluru Kidul, Sidoarjo, Sidoarjo Regency, East Java 61228' {...register('lokasi', { required: true })}></textarea>
                            </div>
                        </section>
                    )}

                    {formStep === 3 && ( 
                        <section>
                            <h3 className='text-center mt-2'>Pengajuan Donasi anda telah diterima. <br /> Mohon tunggu admin memverfikasi dahulu</h3>
                        </section>
                    )}

                        <div className='mb-3'>
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

export default Formajukandonasi;
