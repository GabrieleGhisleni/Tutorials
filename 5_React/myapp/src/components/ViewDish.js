import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


function RenderDish(currentDish){
    console.log('CurrentDish', currentDish)
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
                    <p>{currentDish.comments}</p>
                </div>
            </div>
        </div>
    </div>
    )

}

const DishDetail = (props) => {
    let dish = props.selectedDish
    console.log('props', props)
    if (dish != null){
        return(
            RenderDish(dish)
        )
    }
    else { 
        return(<div></div>) 
    }
}

export default DishDetail;