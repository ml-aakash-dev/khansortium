import React, { Component } from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'

import NavHamburger from './navHamburger'

import '../../../css/body/header/navigationBar.css'

class navigationBar extends Component {
    constructor(props){
        super(props)
        this.state={
            navState: "state1",
            isNavbarCollapsed: true
        }
    }

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

    _onNavbarToggleClick = () => {
        this.setState({
            isNavbarCollapsed: !this.state.isNavbarCollapsed
        })
     }
     _getNavbarToggleIcon() {
        return this.state.isNavbarCollapsed ? (
            <i className="fas fa-bars toggle-icon"></i>
        ) : (
            <i className="fas fa-times toggle-icon"></i>
        );
    }

    render() {
        return (
            <Navbar id="navigation-bar" className="navigation-bar" expand="lg">
                <Navbar.Brand id="main-logo" className="logo" href="/">Khansortium</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" children={this._getNavbarToggleIcon()} onClick={this._onNavbarToggleClick}/>
                <Navbar.Collapse id="basic-navbar-nav">
                {/* {
                    window.innerWidth < 992 ?
                    <NavHamburger /> : ""
                } */}
                    <Nav className="ml-auto nav-items">
                        <Nav.Link href="/#">Home</Nav.Link>
                        <NavDropdown title="Layout" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Features" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Elements" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Pages" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Blog" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Shop" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default navigationBar
