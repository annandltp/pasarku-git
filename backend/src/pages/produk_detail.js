import React, { Component } from 'react'
import Style from '../components/style/global.module.css'
import sample from '../assets/produk/1.png'
import axios from 'axios'
import formatRupiah from '../libs/formatRupiah'
import config from '../config/config'
import { FaCartPlus } from 'react-icons/fa'

class Produk_detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_item: {},
            qty: 1,
        }
     
        this.handleMinus = this.handleMinus.bind(this)
        this.handlePlus = this.handlePlus.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    componentDidMount(){
        const url = this.props.match.params.id
        axios.get(config.ROOT_URL + 'frontend/produkDetail/' + url)
            .then(result => {
                const product_item = {
                    id: result.data.data.id,
                    title: result.data.data.title,
                    description: result.data.data.description,
                    full_description: result.data.data.full_description,
                    price: formatRupiah(result.data.data.price),
                    image: result.data.data.image,
                    url: result.data.data.url,
                    createdAt: result.data.data.createdAt,
                    kategori: result.data.data.kategori.name,
                }
                this.setState({ product_item })
            })
            
    }

    handlePlus = () => {
        this.setState(prevState => {
            return { qty: prevState.qty + 1 }
        })
    }

    handleMinus = () => {
        this.setState(prevState => {
            if(prevState.qty <= 1){
                alert('Minimal pembelian adalah 1 item')
                return false
            } else {
                return { qty: prevState.qty - 1 }
            }
        })
    }

    addToCart(key) {
        const data = {
            produk_id: this.state.product_item.id,
            qty: this.state.qty,
            session_id: localStorage.getItem('cartId')
        }
        console.log(data)

        axios.post(config.ROOT_URL + 'frontend/keranjang', { data })
            .then(result => {
                alert(result.data.message)
                this.props.setCounter()
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className={Style.row}>
                    <div className={Style.container_detail_produk}>
                        <div className={Style.detail_produk}>
                            <div className={Style.item}>
                                <img src={config.ROOT_URL + 'public/' + this.state.product_item.image} ale="Gambar Produk" />
                            </div>
                            <div className={Style.item}>
                                <div>
                                    <h2>{this.state.product_item.title}</h2>
                                    <h4>{this.state.product_item.price}</h4>
                                    <hr />
                                    <p>Kategori: {this.state.product_item.kategori}</p>
                                    <p>Deskripsi Singkat: {this.state.product_item.description}</p>
                                    <hr />
                                    <div className={Style.input_group_2}>
                                        <button onClick={this.handleMinus}>-</button>
                                        <input type="number" value={this.state.qty} />
                                        <button onClick={this.handlePlus}>+</button>
                                    </div>

                                    <button onClick={this.addToCart} className={Style.tambah_keranjang}><FaCartPlus />Tambah ke keranjang</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                <div className={Style.row}>
                    <div className={Style.container_detail_produk}>
                        <div className={Style.deskripsi_produk}>
                            <h2>DESKRIPSI</h2>
                            <hr />
                            <p>{this.state.product_item.full_description}</p>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Produk_detail
