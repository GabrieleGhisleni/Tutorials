import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import DishDetail from './ViewDish';

class Menu extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        // for every dish return => function
        const menuList = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className='col-12 col-md-5 m-2'> 
                {/* function from the Main class, also the props setted will be the one in the previous class */}
                    <Card onClick={()=> this.props.onClick(dish.id)}>
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
                    {menuList}
                </div>
            </div>
        );
    }
}


export default Menu;
