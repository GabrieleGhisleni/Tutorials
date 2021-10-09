import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import  {DISHES}  from '../shared/dishes';
import {Component} from 'react';
import DishDetail from './ViewDish';




class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish: null,
    }
  };

  onDishSelect(dishId){
    this.setState({ selectedDish: dishId})
    console.log('updated selectedDish' , this.state.selectedDish)
}

  render (){
    return (
      <div>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='#'>We All</NavbarBrand>
          </div>
        </Navbar>
        {/* passing the onClick function to the Menu! inside there is the call this.props.onClick(arg_inside)*/}
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
        {/* passing directly the only object having the particular id founded before */}
        <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id == this.state.selectedDish)[0]} />
      </div>
  )};
}

export default Main;
