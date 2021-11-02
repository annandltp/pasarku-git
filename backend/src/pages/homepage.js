import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaShippingFast, FaFunnelDollar, FaUserShield } from 'react-icons/fa'
import Style from '../components/style/global.module.css'
import ProdukItem from "../components/produk_item"
import config from '../config/config'
import axios from 'axios'
import formatRupiah from '../libs/formatRupiah'
import image_1 from "../assets/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png"

class Homepage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            product:[],
            keyword: ''
        }

        this.getInputAction = this.getInputAction.bind(this)
        this.getSearchAction = this.getSearchAction.bind(this)
    }

    getInputAction(event){
        this.setState({ keyword: event.target.value })
    }

    getSearchAction(){
        window.location.href = 'produk?keyword=' + this.state.keyword
    }

    componentDidMount(){
        axios.get(config.ROOT_URL + 'frontend/produkHome')
            .then(result => {
                const product = result.data.data
                this.setState({ product })
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className={`${Style.wrapper} ${Style.banner_1}`}></div>
                <div className={Style.wrapper}>
                    <div className={StyleSheet.row}>
                        <div className={Style.card}>
                            <div className={Style.input_group_1}>
                                <input type="search" placeholder="Cari Produk" onMouseOut={this.getInputAction} />
                                <button onClick={this.getSearchAction}>Cari</button>
                            </div>
                        </div>
                    </div>
                    <div className={Style.row}>
                        <div className={Style.grid_produk}>
                            {this.state.product.map(product => <ProdukItem key={product.id} image={config.ROOT_URL + 'public/' + product.image} title={product.title} price={formatRupiah(product.price)} action={product.url} />)}
                        </div>
                    </div>
                    <div className={`${Style.row} ${Style.bg_primary} ${Style.custom_banner}`}>
                        <div className={Style.grid_2}>
                            <div className={Style.banner_link}>
                                <h1>Adidas Men Running Sneakers</h1>
                                <p>Performance and design. Taken right to the edge.</p>
                                <Link to='/'>SHOP NOW</Link>
                            </div>
                            <div>
                                <img src={image_1} className={Style.image_custom_banner} alt="Produk" />
                            </div>
                        </div>
                    </div>
                    <div className={`${Style.row}`}>
                        <div className={Style.grid_3}>
                            <div>
                                <FaShippingFast />
                                <h4>FREE SHIPPING</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div>
                                <FaFunnelDollar />
                                <h4>100% REFUND</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div>
                                <FaUserShield />
                                <h4>SUPPORT 24/7</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Homepage
