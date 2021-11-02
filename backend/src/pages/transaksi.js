import React, { Component } from 'react'
import { FaCheckSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Style from "../components/style/global.module.css"

class Transaksi extends Component {

    constructor(props){
        super(props)

        this.state = {
            trs_number: ''
        }
    }

    componentDidMount(){
        const trsNumber = this.props.match.params.number
        this.setState({trs_number: trsNumber})
    }

    render() {
        return (
            <React.Fragment>
                <div className={Style.row}>
                    <div className={Style.container}>
                        <div className={`${Style.text_center} ${Style.transaksi_container}`}>
                            <FaCheckSquare />
                            <div className={Style.space}></div>
                            <h2>Pembayaran Sukses</h2>
                            <p>Dengan No Transaksi: { this.state.trs_number }</p>
                            <div className={Style.space}></div>
                            <Link>Kembali ke Home</Link>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Transaksi
