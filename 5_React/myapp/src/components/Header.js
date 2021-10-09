import React, {Component} from "react";
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component{
    render () {
        return(
        <React.Fragment>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='#'>We All</NavbarBrand>
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