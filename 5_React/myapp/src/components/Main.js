
import Menu from './MenuComponent';
import  {DISHES}  from '../shared/dishes';
import {Component} from 'react';
import DishDetail from './ViewDish';
import Header from './Header';
import Footer from './Footer';



class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish: null
    }
  };

  onDishSelect(dishId){
    this.setState({ selectedDish: dishId})
    console.log('updated selectedDish' , this.state.selectedDish)
  }

  render (){
    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
        {/* passing directly the only object having the particular id founded before */}
        <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id == this.state.selectedDish)[0]} />
        <Footer />
      </div>
  )};
}

export default Main;
