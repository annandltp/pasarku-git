import React, { Component } from 'react'
import Style from '../components/style/global.module.css'
import { FiX } from "react-icons/fi"
import { Link } from 'react-router-dom'
import config  from '../config/config'
import axios from 'axios'
import formatRupiah from '../libs/formatRupiah'

class Keranjang extends Component {
    constructor(props){
        super(props)

        this.state = {
            product: []
        }

        this.deleteCart = this.deleteCart.bind(this)
    }

    componentDidMount() {
        this.getCart()
    }

    getCart = () => {
        const sessionId = localStorage.getItem('cartId')
        axios.get(config.ROOT_URL + 'frontend/keranjang?session_id=' + sessionId)
        .then(result => {
            const product = result.data.data
    
            console.log(product)
            this.setState({ product })
        })

    }

    deleteCart = (id) => {
        axios.delete(config.ROOT_URL + 'frontend/keranjang/' + id)
        .then(result => {
            this.getCart()
            alert(result.data.message)
        })
    }
    
    
    render() {
        let totalProduk = 0
        return (
            <React.Fragment>
                <div className={Style.row}>
                    <div className={Style.keranjang_container}>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Produk</th>
                                    <th>Harga</th>
                                    <th>Qty</th>
                                    <th>Jumlah</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.product.length > 0 ?
                                        this.state.product.map((item, index) => {
                                            totalProduk += item.produk.price * item.qty
                                            return(
                                                <tr key={item.id}>
                                                    <td className={Style.text_center}>
                                                        <button onClick={() => this.deleteCart(item.id)} className={Style.hapus_keranjang}><FiX /></button>
                                                    </td>
                                                    <td>
                                                        <div className={Style.item_keranjang}>
                                                            <img src={config.ROOT_URL + 'public/' + item.produk.image} />
                                                            <h4>{item.produk.title}</h4>
                                                        </div>
                                                    </td>
                                                    <td className={Style.text_right}>{formatRupiah(item.produk.price, false)}</td>
                                                    <td className={Style.text_center}>{item.qty}</td>
                                                    <td className={Style.text_right}>{formatRupiah(item.produk.price * item.qty, false)}</td>
                                                </tr>
                                            )
                                        })
                                    :
                                    <tr>
                                        <td colSpan="5" className={Style.text_center}>Belum ada data di keranjang!</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={Style.row}>
                    <div className={Style.total_keranjang}>
                        <div>
                            <table className={Style.total_tabel_keranjang}>
                                <tr>
                                    <td>TOTAL</td>
                                    <td className={Style.text_right}>{formatRupiah(totalProduk, true)}</td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <Link to='/checkout'>Bayar Sekarang</Link>
                                        
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Keranjang
