import React, { Component } from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'

import '../../../css/body/header/navigationBar.css'

class navigationBar extends Component {
    constructor(props){
        super(props)
        this.state={
            navState: "state1 navigation-bar",
            isNavbarCollapsed: true,
            showDropdown: false
        }
    }

    componentDidMount = () => {
        document.addEventListener("scroll", () => {
            if(window.pageYOffset>500){
                document.getElementById('to-top').style.display="flex"
            }
            else{
                document.getElementById('to-top').style.display="none"
            }
            if(window.pageYOffset>300){
                document.getElementById('navigation-bar').style.position="fixed"
                this.setState({
                    navState:"state2 navigation-bar"
                })
            }
            else{
                document.getElementById('navigation-bar').style.position="relative"
                this.setState({
                    navState:"state1 navigation-bar"
                })
            }
        })
    }
    showDropdown = (e)=>{
        this.setState({
            showDropdown: !this.state.showDropdown
        })
    }
    hideDropdown = e => {
        this.setState({
            showDropdown: false
        })
    }

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
            <Navbar id="navigation-bar" className={this.state.navState} expand="xl">
                <Navbar.Brand id="main-logo" className="logo" href="/">Khansortium</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" children={this._getNavbarToggleIcon()} onClick={this._onNavbarToggleClick}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    {
                        window.innerWidth>1199 ?
                        <Nav className="ml-auto nav-items">
                        <Nav.Link href="/#">Home</Nav.Link>
                        <NavDropdown title="Layout" id="basic-nav-dropdown" className="drop-layout" show={true}>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Features" id="basic-nav-dropdown" className="drop-features" show={true}>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Elements" id="basic-nav-dropdown" className="drop-elements" show={true}>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Pages" id="basic-nav-dropdown" className="drop-pages" show={true}>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Portfolio" id="basic-nav-dropdown" className="drop-portfolio" show={true}>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Blog" id="basic-nav-dropdown" className="drop-blog" show={true}>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Shop" id="basic-nav-dropdown" className="drop-shop" show={true}>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav> : 
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
                    }
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default navigationBar
