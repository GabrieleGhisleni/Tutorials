import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Alert} from 'reactstrap';
// form elements
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

// since we are going to use form we transform this into a class so to save elements

class Contact extends Component{
    constructor(props){
        super(props);
        this.state= {
            firstName: '',
            lastName: '',
            telNum: '',
            email: '',
            agree: false,
            contactType: 'Tel'
        }
        // bind to this object!
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);


    }
    handleInput(event){
        // which input as been changed
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log("name, value", name, value, this.state.firstName)
        this.setState({
          [name]: value
        });
    }

    

    handleSubmit(event){
        console.log('current stat', JSON.stringify(this.state))
        alert('current stat', (this.state))
        // avoid refresh page!!
        event.preventDefault()
    }

    render(){
        return(
            <div className="container">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active><Link to='/contact'>Contact us</Link></BreadcrumbItem>
                </Breadcrumb>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className='row row-content'>
                    <div className='col-12'>
                        <h3>Send feedback</h3>
                    </div>
                    <div className='col-12 col-md-9'>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            {/*Label md={2} 2 columns! */}
                            
                            <Label htmlFor='firstName' md={2}>First Name</Label>
                            <Col md={10}>
                                <Input type='text' id='firstName' onChange={this.handleInput}
                                name='firstName' placeholder='first name' value={this.state.firstName}/>
                            </Col>

                            <Label htmlFor='lastName' md={2}>last Name</Label>
                            <Col md={10}>
                                <Input type='text' id='lastName' onChange={this.handleInput}
                                name='lastName' placeholder='last name' value={this.state.lastName}/>
                            </Col>
                            <Label htmlFor='telNum' md={2}>tel</Label>
                            <Col md={10}>
                                <Input type='number' id='telnum' onChange={this.handleInput}
                                name='telNum' placeholder='tel' value={this.state.telNum}/>
                            </Col>

                            <Label htmlFor='email' md={2}>email</Label>
                            <Col md={10}>
                                <Input type='email' id='email' onChange={this.handleInput}
                                name='email' placeholder='tel' value={this.state.email}/>
                            </Col>
                            </FormGroup>
                            <FormGroup row>
                                {/* 6 columns treat it as js object */}
                                <Col md={{size:6, offset:2}}>
                                    {/* checkbox */}
                                    <FormGroup check>
                                        <Label check>
                                            <Input type='checkbox' onChange={this.handleInput} name='agree' checked={this.state.agree}/>
                                            {' '} may we contact you?
                                        </Label>
                                    </FormGroup>
                            
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Input type='select' onChange={this.handleInput} name='contactType' value={this.state.contactType}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10, offset:2}}>
                                    <Button type='submit' color='primary'>Submit</Button>
                                </Col>
                            </FormGroup>                       
                    </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;