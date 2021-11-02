import React, { Component } from 'react'
import Style from '../components/style/global.module.css'
import { Link } from 'react-router-dom'

class Kontak extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={Style.row}>
                    <div className={Style.container}>
                        <div className={`${Style.form_2_grid} ${Style.shadow} ${Style.minPadding}`}>
                            <div className={Style.grid_form_2}>
                                <div className={Style.kontak_left}>
                                    <h2>Kontak Kami</h2>
                                    <p>Bank BCA an. Anandela No. 2132819</p>
                                    <p>Email : anan.dela211@gmail.com</p>
                                    <p>Telp : (021) 123 123456)</p>
                                    <p>Alamat kami : Jl bekasi</p>
                                </div>
                            </div>
                            <div className={Style.grid_form_2}>
                                <div class="elfsight-app-d44aee35-1e70-4067-9750-cdf5c8852e5b"></div>
                                {/* <form className={`${Style.form} ${Style.form_style_2}`}>
                                    <div className={Style.form_group}>
                                        <label>Nama Lengkap</label>
                                        <input type="text" placeholder="Nama Lengkap" />
                                    </div>
                                    <div className={Style.form_group}>
                                        <label>Email</label>
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div className={Style.form_group}>
                                        <email>Pesan</email>
                                        <textarea className={`${Style.input_textarea}`} placeholder="Tulis pesan disini"></textarea>
                                    </div>
                                        <button className={Style.btn_primary}>Kirim</button>
                                </form> */}
                            </div>
                        </div>
                        <Link to="/transaksi" className={Style.btn_primary}>Proses Pembayaran</Link>
                    </div>
                    Ini halaman Kontak
                </div>

            </React.Fragment>
        )
    }
}

export default Kontak