import React, {Component} from 'react';
import  {Media} from 'reactstrap';

class Menu extends Component{
    constructor(props){
        super(props);
        // receiving all the props from the parent
    }

    render(){
        // for every dish return => function
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className='col-12 mt-5'> 
                
                    {/* tag li say that each of the element will have the tag 'li' */}

                    <Media tag='li'>
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.description} />
                        </Media>
                        <Media body className='ml-5'>
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            )
        }); 

        return(
            <div className='container'>
                <div class='row'>
                    {/* // Media that list so the element inside will be a ordered list! */}
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;