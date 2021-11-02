import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"

import Homepage from "../pages/homepage"
import KeranjangPage from "../pages/keranjang"
import KontakPage from "../pages/kontak"
import ProdukPage from "../pages/produk"
import ProdukDetailPage from "../pages/produk_detail"
import TentangPage from "../pages/tentang"
import TransaksiPage from "../pages/transaksi"
import CheckoutPage from "../pages/checkout"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

import config from '../config/config'
import axios from 'axios'


class Routes extends Component {

    constructor(props){
        super(props)

        this.state = {
            counter: 0
        }

        this.getCountCart = this.getCountCart.bind(this)
    }

    getCountCart(){
        const sessionId = localStorage.getItem('cartId')
        axios.get(config.ROOT_URL + 'frontend/keranjang?session_id=' + sessionId)
        .then(result => {
            if(result.data.code === 200) {
                const counter = result.data.data.length
                this.setState({ counter })

            }
        })
    }

    componentDidMount(){
        this.getCountCart()
    }

    render() {
        return(
        <div>
            <Navbar getCounter={this.state.counter} />
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/keranjang" exact component={KeranjangPage} />
                <Route path="/produk" exact component={ProdukPage} />
                <Route path="/produk/:id" exact render={(props) => <ProdukDetailPage setCounter={this.getCountCart} {...props}/>} />
                <Route path="/kontak" exact component={KontakPage} />
                <Route path="/tentang" exact component={TentangPage} />
                <Route path="/keranjang" exact component={KeranjangPage} />
                <Route path="/checkout" exact component={CheckoutPage} />
                <Route path="/transaksi/:number" exact component={TransaksiPage} />
            </Switch>
            <Footer />
        </div>
        )
    }

    
    

}

export default Routes;