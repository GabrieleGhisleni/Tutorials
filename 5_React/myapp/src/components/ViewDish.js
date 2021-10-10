import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderDish(currentDish,comment){
    console.log('inside renderdish', currentDish, comment)
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
                <div className='col-12 col-md-5 text-justify'>
                    <h1 style={{margin: '20px'}}>Comments:</h1>
                    <p>{comment.comment}</p>
                </div>
            </div>
        </div>
    </div>
    )

}

const DishDetail = (props) => {
    let dish = props.dish
    let comment = props.comments
    console.log("inside DishDetail.", dish, comment)
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
                    <h3>{props.dish.name}</h3>
                    {RenderDish(dish,comment)}
                </div>
            </div>
        )
    }
    else { 
        return(<div></div>) 
    }
}

export default DishDetail;