import React, {Component} from "react";
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {isOpen:false}
        // bounding the function to this!
        this.togglerNav = this.togglerNav.bind(this)
    };

    togglerNav() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render () {
        return(
        <React.Fragment>
        {/* Reactive Navbar */}
        <Navbar dark color='primary' expand='md'>
          <div className='container'>
            <NavbarToggler onClick={this.togglerNav} /> 
            <NavbarBrand className='mr-auto' href='#'>
                <img src='assets/logo192.png' height='30' width='30'/>
            </NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/home'><span className='fa fa-home'></span>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'><span className='fa fa-info-circle'></span>Contattaci</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/menu'><span className='fa fa-list'></span>Menu</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
          </div>
        </Navbar>

        <Jumbotron>
            <div className='container'>
                <div className='row row-header'>
                    <div class='col-12 col-sm-6'>
                        <h1>We All</h1>
                        <p>
                            We take inspiration from real life's events and make them shared!
                            Our creation is up the the entire community nothing is excluded.
                        </p>
                    </div>
                </div>
            </div>
        </Jumbotron>
        </React.Fragment>
    )};
}

export default Header;