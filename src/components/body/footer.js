import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import { Link} from "react-scroll"

import '../../css/body/footer.css'

class footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="content">
                    <Row>
                        <Col xs={12} lg={5} className="col">
                            <h1>POLO HTML5 TEMPLATE</h1>
                            <p>Built with love in Fort Worth, Texas, USA <br/>
                                All rights reserved. Copyright © 2019. INSPIRO.</p>
                        </Col>
                        <Col xs={12} lg={2} className="col">
                            <h1>Menu</h1>
                            <Link
                                onClick={this.scrollToSection}
                                activeClass="active"
                                to="header"
                                spy={true}
                                smooth={true}
                                offset={-0}
                                duration= {500}
                                >
                            <span>- Home</span>
                            </Link>
                            <br/>
                            <Link
                                onClick={this.scrollToSection}
                                activeClass="active"
                                to="the-company"
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration= {500}
                                >
                            <span>- The Company</span>
                            </Link>
                            <br/>
                            <Link
                                onClick={this.scrollToSection}
                                activeClass="active"
                                to="our-services"
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration= {500}
                                >
                            <span>- Our Services</span>
                            </Link>
                            <br/>
                            <Link
                                onClick={this.scrollToSection}
                                activeClass="active"
                                to="our-blog"
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration= {500}
                                >
                            <span>- Our Bolg</span>
                            </Link>
                            <br/>
                            <Link
                                onClick={this.scrollToSection}
                                activeClass="active"
                                to="our-clients"
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration= {500}
                                >
                            <span>- Our Clients</span>
                            </Link>
                        </Col>
                        <Col xs={12} lg={3} className="col">
                            <h1>Our Services</h1>
                                    <a href="https://wholecellonline.com/internal/" target="_blank" rel="noopener noreferrer">- Whole Cell Accessories</a>
                                    <br/>
                                    <a href="https://wholecellonline.com/wfp_store/" target="_blank" rel="noopener noreferrer">- We Fix Phones</a>
                                    <br/>
                                    <a href="https://wholecellonline.com/prepaidcity/" target="_blank" rel="noopener noreferrer">- Prepaid City</a>
                        </Col>
                        <Col xs={12} lg={2} className="col">
                            <h1>Support</h1>
                            <Link
                                onClick={this.scrollToSection}
                                activeClass="active"
                                to="locator"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration= {500}
                                >
                            <span>- Our Location</span>
                            </Link>
                            <br/>
                            <Link
                                onClick={this.scrollToSection}
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration= {500}
                                >
                            <span>- Our Contact</span>
                            </Link>
                        </Col>
                    </Row>
                </div>
                <p className="copyrights">Created By Tensor Solutions LLC | Copyrights Reserved &copy;</p>
            </div>
        )
    }
}

export default footer
