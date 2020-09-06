import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'

import '../../css/body/services.css'

class services extends Component {
    render() {
        return (
            <div className="services" id="our-services">
                <h1>OUR SERVICES</h1>
                <span className="heading-border"></span>
                <p>
                    Create amam ipsum dolor sit amet, Beautiful nature, and rare feathers!.
                </p>

                <Row>
                    <Col xs={12} lg={4} className="col">
                        <Row>
                            <Col xs={3} sm={2} lg={3}>
                                <div className="icon-wrapper">
                                <i className="fas fa-plug icon"></i>
                                </div>
                            </Col>
                            <Col xs={9} sm={10} lg={9}>
                                <div className="content">
                                    <h1>Powerful template</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={4} className="col">
                        <Row>
                            <Col xs={3} sm={2} lg={3}>
                                <div className="icon-wrapper">
                                <i className="fas fa-desktop icon"></i>
                                </div>
                            </Col>
                            <Col xs={9} sm={10} lg={9}>
                                <div className="content">
                                    <h1>Flexible Layouts</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={4} className="col">
                        <Row>
                            <Col xs={3} sm={2} lg={3}>
                                <div className="icon-wrapper">
                                <i className="fas fa-cloud icon"></i>
                                </div>
                            </Col>
                            <Col xs={9} sm={10} lg={9}>
                                <div className="content">
                                    <h1>Retina Ready</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus. 
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={4} className="col">
                        <Row>
                            <Col xs={3} sm={2} lg={3}>
                                <div className="icon-wrapper">
                                <i className="far fa-lightbulb icon"></i>
                                </div>
                            </Col>
                            <Col xs={9} sm={10} lg={9}>
                                <div className="content">
                                    <h1>Fast processing</h1>
                                    <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={4} className="col">
                        <Row>
                            <Col xs={3} sm={2} lg={3}>
                                <div className="icon-wrapper">
                                <i className="fas fa-trophy icon"></i>
                                </div>
                            </Col>
                            <Col xs={9} sm={10} lg={9}>
                                <div className="content">
                                    <h1>Unlimited Colors</h1>
                                    <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={4} className="col">
                        <Row>
                            <Col xs={3} sm={2} lg={3}>
                                <div className="icon-wrapper">
                                <i className="fas fa-thumbs-up icon"></i>
                                </div>
                            </Col>
                            <Col xs={9} sm={10} lg={9}>
                                <div className="content">
                                    <h1>Premium Sliders</h1>
                                    <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={4} className="col">
                        <Row>
                            <Col xs={3} sm={2} lg={3}>
                                <div className="icon-wrapper">
                                <i className="fas fa-rocket icon"></i>
                                </div>
                            </Col>
                            <Col xs={9} sm={10} lg={9}>
                                <div className="content">
                                    <h1>Modern Design</h1>
                                    <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={4} className="col">
                        <Row>
                            <Col xs={3} sm={2} lg={3}>
                                <div className="icon-wrapper">
                                <i className="fas fa-flask icon"></i>
                                </div>
                            </Col>
                            <Col xs={9} sm={10} lg={9}>
                                <div className="content">
                                    <h1>Clean Modern Code</h1>
                                    <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={4} className="col">
                        <Row>
                            <Col xs={3} sm={2} lg={3}>
                                <div className="icon-wrapper">
                                <i className="fas fa-umbrella icon"></i>
                                </div>
                            </Col>
                            <Col xs={9} sm={10} lg={9}>
                                <div className="content">
                                    <h1>Free Updates & Support</h1>
                                    <p>
                                    Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default services
