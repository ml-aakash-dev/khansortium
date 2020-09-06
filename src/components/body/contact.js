import React, { Component } from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'

import '../../css/body/contact.css'

class contact extends Component {
    render() {
        return (
            <div className="contact" id="contact">
                <Row>
                    <Col md={12} lg={6} className="col">
                        <h1>Get in Touch with Us</h1>
                        <p>Our Headquarters are in Australia, USA, Europe, Asia, Africa</p>
                        <h5>Headquarters:</h5>
                        <br/>
                        <a href="https://goo.gl/maps/DG89PTUwWzqN2oT29" target="_blank" rel="noopener noreferrer">
                            795 Folsom Ave, Suite 600 San Francisco, CA 94107
                        </a>
                        <br/>
                        <h5>Phone:</h5>
                        <a href="tel:(+1) 1234 56789">(+1) 1234 56789</a>
                        <br/>
                        <h5>Fax:</h5>
                        <a href="fax:(+1) 12 3456 78910">(+1) 12 3456 78910</a>
                        <br/>
                        <h5>Email:</h5>
                        <a href="mailto:info@inspiro-media.com">info@inspiro-media.com</a>
                        <h2>We are social</h2>
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
                    <Col xs={12} lg={6} className="col">
                        <Form>
                            <Row>
                                <Col xs={12} sm={6}>
                                    <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                        <Form.Control 
                                        type="name" 
                                        name="name"
                                        placeholder="Enter your Name" 
                                        onChange={this.handleChange}/>
                                    </Form.Group>
                                </Col>
                                <Col xs={12} sm={6}>
                                    <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                        <Form.Control 
                                        type="email" 
                                        name="email"
                                        placeholder="Enter your Email" 
                                        onChange={this.handleChange}/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Phone</Form.Label>
                                    <Form.Control 
                                    type="phone" 
                                    name="phone"
                                    placeholder="Enter your Phone" 
                                    onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Message</Form.Label>
                                    <Form.Control 
                                    as="textarea" rows="5"
                                    type="message"
                                    name="message"
                                    placeholder="Enter your Message" 
                                    onChange={this.handleChange}/>
                            </Form.Group>
                            <Button className="contact-btn" type="submit">
                            <i className="fas fa-paper-plane"></i> SEND MESSAGE
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default contact
