import React, {Component} from "react";
import {Button,Modal,Label, ModalHeader,ModelBody, Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem, ModalBody, Form, FormGroup, Input} from 'reactstrap';
import {NavLink} from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen:false,
            isModalOpen:false
        }

        // bounding the function to this!
        this.togglerNav = this.togglerNav.bind(this)
        this.togglerModal = this.togglerModal.bind(this)
        this.handleLogin = this.handleLogin.bind(this)

    };

    togglerNav() {
        this.setState({isOpen: !this.state.isOpen});
    }

    togglerModal() {
        this.setState({isModalOpen: !this.state.isModalOpen});
    }

    handleLogin(event){
        this.togglerModal()
        alert('Username:' + this.username.value + 'Password' + this.password.value)
        event.preventDefault()
    }

    render () {
        return(
        <React.Fragment>
        {/* Reactive Navbar */}
        <Navbar dark color='primary' expand='md'>
          <div className='container'>
            <NavbarToggler onClick={this.togglerNav} /> 
            <NavbarBrand className='mr-auto'>
                <img src='/assets/images/logo192.png' height='30' width='30'/>
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
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <Button outline onClick={this.togglerModal}>
                            <span className='fa fa-sign-in'></span>Login
                        </Button>
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

        <Modal isOpen={this.state.isModalOpen}>
            <ModalHeader toggle={this.togglerModal}>Login</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleLogin}>

                    <FormGroup>
                        <Label htmlFor='username'>Username</Label>
                        <Input 
                        type='text' 
                        name='username' 
                        id='username' 
                        innerRef={(input) => this.username = input}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='password'>Password</Label>
                        <Input 
                        type='password' 
                        name='password' 
                        id='password'
                        innerRef={(input) => this.password= input}/>  
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='remember' />Remember me
                        </Label>
                    </FormGroup>
                    <Button type='submit' className='btn' va>Login</Button>
                </Form>
            </ModalBody>
        </Modal>

        </React.Fragment>
    )};
}

export default Header;