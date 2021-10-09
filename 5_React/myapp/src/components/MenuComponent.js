import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import DishDetail from './ViewDish';

class Menu extends Component{
    constructor(props) {
        super(props);
        // new property called selectedDish
        this.state = {
            selectedDish: null
        }
    }

    // it is invoked lastly! after the rendering!

    onDishSelect(dish){
        this.setState({ selectedDish:dish })
        console.log('menu.this.state.selectedDish != null', this.state.selectedDish != null)
    }

    render(){
        // for every dish return => function
        console.log(this.props)
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className='col-12 col-md-5 m-2'> 
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width='100%' src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle className='text-center'>{dish.name}</CardTitle>
                            </CardImgOverlay>
                    </Card>
                </div>
            )
        }); 
        
        return(
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
                <DishDetail selectedDish={this.state.selectedDish}/>
            </div>
        );
    }
}


export default Menu;
