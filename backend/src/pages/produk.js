import React, { Component } from 'react'
import Style from '../components/style/global.module.css'
import ProdukItem from "../components/produk_item"

import produk_1 from "../assets/produk/1.png"
import produk_2 from "../assets/produk/2.png"
import produk_3 from "../assets/produk/3.png"
import produk_4 from "../assets/produk/4.png"
import produk_5 from "../assets/produk/5.png"
import produk_6 from "../assets/produk/6.png"
import produk_7 from "../assets/produk/7.png"
import produk_8 from "../assets/produk/8.png"
import axios from 'axios'
import config from '../config/config'
import formatRupiah from '../libs/formatRupiah'

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory({ forceRefresh: false })

class Produk extends Component {
    constructor(props){
        super(props)

        this.state = {
            products: [],
            keyword: ''
        }

        this.getInputAction = this.getInputAction.bind(this)
        this.getSearchAction = this.getSearchAction.bind(this)
    }

    getInputAction(event){
        this.setState({ keyword: event.target.value })
    }

    getSearchAction(){
        if (this.state.keyword === '') {
            history.push('produk')
        } else {
            history.push('produk?keyword=' + this.state.keyword)
        }
        this.getProduct()
    }

    async getProduct(){
        
        let getAxiosResponse = null
        try{
            let url = 'produk?keyword=' + this.state.keyword

            if(this.state.keyword === ''){
                url = ''
            }

            if(this.props.location.search != ""){
                url = this.props.location.search
            }

            console.log(JSON.stringify())

            getAxiosResponse = await axios.get(config.ROOT_URL + 'frontend/produkPage' + url)
        }catch(err) {
            if (err.response.status === 404){
                console.log(err.response.status)
            } else {
                alert(err.response)
            }
        } finally {
            if (getAxiosResponse === null) {
                this.setState({ products: [] })
            } else {
                const products = getAxiosResponse.data.data
                this.setState({ products })
            }
        }
    }

    componentDidMount(){
        this.getProduct()
    }


    render() {
        return (
            <React.Fragment>
                <div className={Style.wrapper}>
                    <div className={StyleSheet.row}>
                        <div className={Style.card}>
                            <div className={Style.input_group_1}>
                                <input type="search" value={this.props.location.search != null ? this.props.location.search.split('=')[1] : ''} placeholder="Cari Produk" onMouseOut={this.getInputAction}/>
                                <button onClick={this.getSearchAction}>Cari</button>
                            </div>
                        </div>
                    </div>
                    <div className={Style.row}>
                        <div className={Style.grid_produk}>
                            {
                                this.state.products.length > 0 ? this.state.products.map((item, index) => 
                                    <ProdukItem key={index} image={config.ROOT_URL + 'public/' + item.image} title={item.title} price={formatRupiah(item.price)} action={item.url}/>
                                )
                                :
                                <div className={Style.error_404}>
                                    Tidak ada produk untuk di tampilkan!
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Produk
