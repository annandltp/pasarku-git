import React from "react"
import Style from '../components/style/global.module.css'
import Logo from "../assets/logo_light.png"

const Footer = () => {
    return (
        <div className={`${Style.row} ${Style.bg_primary} ${Style.footer}`}>
            <img src={Logo} alt="logo" />
            <p>@ Copyright Pasarku 2021</p>
        </div>
    )
}

export default Footer