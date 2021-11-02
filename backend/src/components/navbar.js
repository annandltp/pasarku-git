import React, { Component } from "react"
import { Link } from "react-router-dom"
import Styles from "./style/navbar.module.css"
import Logo from "../assets/logo.png"
import { FaShoppingCart } from "react-icons/fa"

class Navbar extends Component{
    constructor(props) {
        super(props)        
    }

    render(){
        return(
            <div className={Styles.header}>
                <div className={Styles.container}>
                    <div>
                        <img className={Styles.logo} src={Logo} alt="Logo" />
                    </div>
                    <ul className={Styles.topmenu}>
                        <li> <Link to="/">Homepage</Link> </li>
                        <li> <Link to="/produk">Page</Link> </li>
                        {/* <li> <Link to="/produk/:url">Transaksi</Link> </li> */}
                        <li> <Link to="/kontak">Kontak</Link> </li>
                        <li> <Link to="/tentang">Tentang</Link> </li>
                        <li> <Link to="/keranjang">Keranjang</Link> </li>
                    </ul>
                    <div className={Styles.cart}>
                        <Link to="/keranjang"><FaShoppingCart /></Link>
                        {this.props.getCounter > 0 ? <span className={Styles.badge_cart}>{this.props.getCounter}</span> : ''}
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar