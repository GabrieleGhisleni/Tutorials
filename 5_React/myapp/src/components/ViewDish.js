import React, {Component} from 'react';
import {Card, Modal ,ModalHeader, ModalBody, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Collapse} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';

class RenderComment extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
        console.log(this.props)
        this.togglerModal = this.togglerModal.bind(this)
        this.submitComment = this.submitComment.bind(this)
    }

    submitComment(event){
        this.props.addComment(this.props.dishId, 3, event.author, event.comment)

    }

    togglerModal(){
        this.setState({isOpen: !(this.state.isOpen)})
    }

    render(){
        let comments = this.props.comments
        const comment = comments.map((comm) => {
            let date = new Date(comm.date).toString('MMMM yyyy')
            date = date.split(' ').slice(0, 4).join(' ');
            return (
                <div className='comments'>
                    <div className='row' key={comm.id}>
                        <div className='col-4'>
                            <p>{comm.author}</p>
                        </div>
                        <div className='col-3'>
                            <p>Rating: {comm.rating}</p>
                        </div>
                        <div className='col'>
                            <p>{date}</p>
                        </div>
                        <div className='col-12'>
                            <p>{comm.comment}</p>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div>
                {comment}
                <div className='row'>
                    <div className='col-12'>
                        <Button onClick={this.togglerModal} className='btn bg-primary' style={{marginLeft:'20px'}}>Send a comment</Button>
                            <Modal isOpen={this.state.isOpen} >
                                <ModalHeader toggle={this.togglerModal}>Send a comment</ModalHeader>
                                <ModalBody>
                                    <LocalForm onSubmit={this.submitComment}>
                                        <Row className="form-group">
                                        <Label htmlFor="author" md={4}>Author</Label>
                                        <Col>
                                        <Control.text model=".author" id="author" name="author"
                                            placeholder="Author "
                                            className="form-control"/>
                                        </Col>
                                        </Row>

                                        <Row className="form-group">
                                        <Label htmlFor="comment" md={4}>comments</Label>
                                        <Col>
                                        <Control.textarea model=".comment" id="comment" name="comment"
                                            placeholder="Comment"
                                            className="form-control"/>
                                        </Col>
                                        </Row>
                                        <Row>
                                            <Button type='submit' onClick={this.togglerModal}  className='btn bg-success' style={{marginLeft:'20px'}}>Send the comment</Button>
                                        </Row>
                                    </LocalForm>
                                </ModalBody>
                            </Modal>
                    </div>
                </div>
            </div>
        )
    }
}


function RenderDish({currentDish, comment, dishId, addComment}){
    return(
    <div className='row'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-5'>
                    <Card>
                        <CardImg width='100%' src={currentDish.image} alt={currentDish.name} />
                        <CardBody>
                            <CardTitle>{currentDish.name}</CardTitle>
                            <CardText>{currentDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-12 col-md'>
                    <h5 style={{margin: '0px'}}>Comments:</h5>
                    <RenderComment comments={comment} dishId={dishId} addComment={addComment}/>
                    
                </div>
            </div>
        </div>

    </div>
    )

}

const DishDetail = (props) => {
    let dish = props.dish
    let comment = props.comments
    if (dish != null){
        return(
            <div className='container'>
                <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active><Link to='/menu'>{props.dish.name}</Link></BreadcrumbItem>
                </Breadcrumb>
                </div>
                <div className='col-12'>
                    <h3 className='text-center' style={{margin:"5px", padding:'10px', backgroundColor:'lightblue', borderRadius:'20px'}}>{props.dish.name}</h3>
                    <div style={{marginTop:'30px'}}>
                        <RenderDish currentDish={dish} 
                        comment= {comment}
                        addComment={props.addComment} 
                        dishId={dish.id}/>
                    </div>
                </div>
            </div>
        )
    }
    else { 
        return(<div></div>) 
    }
}

export default DishDetail;