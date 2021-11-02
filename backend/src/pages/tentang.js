import React, { Component } from 'react'
import Style from '../components/style/global.module.css'
import ImgAbout from '../assets/Promotion Image.png'
import axios from 'axios'

class Tentang extends Component {

    render() {
        return (
            <React.Fragment>
                <div className={Style.row}>
                    <div className={Style.container}>
                        <h2 className={Style.text_center}>Tentang Kami</h2>
                        <p>What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged. It was popularised in 
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including 
                            versions of Lorem Ipsum.
                        </p>
                        <div className={Style.flex} >
                            <img src={ImgAbout} alt="Gambar Tentang Kami" style={{ width: '500px'}} />
                            <p className={Style.margin_left}>What is Lorem Ipsum? <br />
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book. It has survived not only five centuries, but also the leap into 
                                electronic typesetting, remaining essentially unchanged. It was popularised in 
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                and more recently with desktop publishing software like Aldus PageMaker including 
                                versions of Lorem Ipsum.
                            </p>
                        </div>
                        <p>What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged. It was popularised in 
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including 
                            versions of Lorem Ipsum.
                        </p>
                    </div>
                    Ini halaman Tentang
                </div>

            </React.Fragment>
        )
    }
}

export default Tentang
