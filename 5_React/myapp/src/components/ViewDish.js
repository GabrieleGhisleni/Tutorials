import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let currentDish = this.props.selectedDish;
        console.log('Insiede ViewDish this.props.selectedDish', currentDish)
        if (currentDish != null){
            return (
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
        else{ // if null return an empty div
            return (<div></div>);
        }
    }
}

export default DishDetail;