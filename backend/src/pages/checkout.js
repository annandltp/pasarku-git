import React, { Component } from 'react'
import Style from '../components/style/global.module.css'
import { FaCity } from "react-icons/fa"
import { Link } from 'react-router-dom'
import axios from 'axios'
import config from '../config/config'

class Checkout extends Component {

    constructor(props) {
        super(props)

        this.state = {
            first_name: '',
            last_name: '',
            address: '',
            email: '',
            phone: '',
            counter: '',
            data: []
        }

        this.submitForm = this.submitForm.bind(this)
        this.handleFirstName = this.handleFirstName.bind(this)
        this.handleLastName = this.handleLastName.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
    }

    submitForm(event){
        event.preventDefault()
        const sessionId = localStorage.getItem('cartId')
        axios.post(config.ROOT_URL + 'frontend/checkout?session_id=' + sessionId, this.state )
            .then(result => {

                if(result.data.code === 200){
                    window.location.href = 'transaksi/' + result.data.data.trs_number
                }
                console.log(result)
            }).catch(err => {
                alert(err.message)
            })
    }

    handleFirstName(event){
        this.setState({first_name: event.target.value})
    }
    handleLastName(event){
        this.setState({last_name: event.target.value})
    }
    handleAddress(event){
        this.setState({address: event.target.value})
    }
    handleEmail(event){
        this.setState({email: event.target.value})
    }
    handlePhone(event){
        this.setState({phone: event.target.value})
    }

    componentDidMount(){
        const sessionId = localStorage.getItem('cartId')
        axios.get(config.ROOT_URL + 'frontend/keranjang?session_id=' + sessionId)
        .then(result => {
            if(result.data.code === 200) {
                const counter = result.data.data.length
                this.setState({ counter })

            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className={Style.row}>
                    <div className={Style.container}>
                        {
                            this.state.counter > 0 ?
                                <form className={Style.form} onSubmit={(data) => this.submitForm(data)}>
                                    <h2 className={Style.color_primary}>Isi form untuk melakukan pembayaran</h2>
                                    <div className={Style.form_2_grid}>
                                        <div className={Style.grid_form_2}>
                                            <input className={Style.input_style} type="text" placeholder="Nama Depan" onKeyUp={this.handleFirstName} />
                                            <input className={Style.input_style} type="email" placeholder="Email" onKeyUp={this.handleEmail} />
                                            <div className={Style.payment_method}>
                                                <h4 className={Style.color_primary}>Metode Pembayaran</h4>
                                                <div className="">
                                                    <FaCity /><span>Bank Transfer</span>
                                                </div>
                                                <p>Bank BCA an. Anandela No. 1231231</p>
                                            </div>
                                        </div>
                                        <div className={Style.grid_form_2}>
                                            <input className={Style.input_style} type="text" placeholder="Nama Belakang" onKeyUp={this.handleLastName} />
                                            <textarea className={`${Style.input_style} ${Style.input_textarea}`} placeholder="Alamat Lengkap" onKeyUp={this.handleAddress}></textarea>
                                            <input className={Style.input_style} type="text" placeholder="Telp" onKeyUp={this.handlePhone} />
        
                                        </div>
                                    </div>
                                    <button className={Style.btn_primary}>Proses Pembayaran</button>
                                </form>
                            :
                            <div className={Style.text_center}>
                                <h2>Kamu belum memiliki keranjang</h2> 
                                <Link to="/" className={Style.btn_primary}>Kembali ke Home</Link>
                            </div>
                        }
                        
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Checkout