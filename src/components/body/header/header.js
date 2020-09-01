import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'

import NavigationBar from './navigationBar'
import HamMenu from './hamMenu'

import "../../../css/body/header/header.css"

class header extends Component {
    render() {
        return (
            <div className="header" id="header">
                <div className="bgimg">     
                    <div className="image-wrapper">
                        <div className="content">
                            <div className="top-bar">
                                <Row className="top-row">
                                    <Col xs={12} lg={8} className="col">
                                        <Row>
                                            <Col xs={12} lg={4} className="top-left phone col">
                                                <a href="tel:+1 (234) 567-890">Phone: +1 (234) 567-890</a>    
                                            </Col>
                                            <Col xs={12} lg={8} className="top-left mail col">
                                                <a href="mailto:contact@inspiro-media.com">Email: contact@inspiro-media.com</a>   
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} lg={4} className="social-links col">
                                        <a className="yout" href='https://www.youtube.com' target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-youtube icon"></i>
                                        </a>
                                        <a className="insta" href='https://www.instagram.com' target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-instagram icon"></i>
                                        </a>
                                        <a className="fb" href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-facebook-f icon"></i>
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                            <NavigationBar />            
                            {/* <div id="ham-menu">
                                <HamMenu />
                            </div> */}
                            <div className="sub-content">
                                <h5>POLO IS FRIENDLY!</h5>
                                <h1>WORLDWIDE <br/> BUSINESS <br/> COMPANY!</h1>
                                <button className="btn btn-primary">EXPLORE POLO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default header
