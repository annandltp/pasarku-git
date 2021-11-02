import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Style from '../components/style/global.module.css'


const ProdukItem = (props) => {
    console.log(props)
    return (
        <div className={Style.item_produk}>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <h4>{props.price}</h4>
            <Link to={'produk/' + props.action}>BELI</Link>
        </div>
    )
}

export default ProdukItem