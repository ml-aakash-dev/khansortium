import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import '../../css/body/ourClients.css'

import Envato from '../../assets/our-clients/envato.png'
import Microsoft from '../../assets/our-clients/microsoft.webp'
import Google from '../../assets/our-clients/google.png'
import Airbnb from '../../assets/our-clients/airbnb.png'
import Lenovo from '../../assets/our-clients/lenovo.png'

class ourClients extends Component {
    constructor(props){
        super(props)
        this.state={
            images:[
                {    
                    id:1,
                    image: Envato
                },
                {    
                    id:1,
                    image: Microsoft
                },
                {    
                    id:1,
                    image: Google
                },
                {    
                    id:1,
                    image: Airbnb
                },
                {    
                    id:1,
                    image: Lenovo
                }
            ]
        }
    }
    render() {
        let settings = {
        infinite: false,
        speed: 1000,
        arrows:false,
        lazyLoad: 'ondemand',
        dots:true,
        slidesToShow: 4,
        slidesToScroll: 1,
    
        responsive: [
          {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
          breakpoint: 576,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      }
      ]
    }
        return (
            <div className="our-clients" id="our-clients">
                <h1>OUR CLIENTS</h1>
                <p>Our awesome clients we've had the pleasure to work with!</p>

                <div className="images-slider">
                {this.state.images.length===0?(
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ):(
                    <Slider {...settings}>
                    {this.state.images.map(image=>(
                            <div className="out" key={image.id}>

                                <img alt={"logo"} src={image.image}/>
                                {/* <div className="card">
                                    <img alt={"logo"} src={image.image}/>
                                </div> */}
                            </div>
                        ))}
                    </Slider>
                )}
                </div>
            </div>
        )
    }
}

export default ourClients
