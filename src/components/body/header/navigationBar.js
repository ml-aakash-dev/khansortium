import React, { Component } from 'react'
import {Nav, Navbar} from 'react-bootstrap'

import '../../../css/body/header/navigationBar.css'

class navigationBar extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         navState: "state1"
    //     }
    // }

    // componentDidMount(){
    //     if(window.pageYOffset>10){
    //         this.setState({
    //             navState: "state2"
    //         })
    //     }else{
    //         this.setState({
    //             navState:"state1"
    //         })
    //     }
    // }

    render() {
        return (
            <div>
                <Navbar className="navigation-bar" expand="lg" fixed="top">
                    <Navbar.Brand className="logo" href="/">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/#">Home</Nav.Link>
                            <Nav.Link href="/#">Layout</Nav.Link>
                            <Nav.Link href="/#">Features</Nav.Link>
                            <Nav.Link href="/#">Elements</Nav.Link>
                            <Nav.Link href="/#">Pages</Nav.Link>
                            <Nav.Link href="/#">Portfolio</Nav.Link>
                            <Nav.Link href="/#">Blog</Nav.Link>
                            <Nav.Link href="/#">Shop</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default navigationBar
