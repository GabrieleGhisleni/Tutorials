
import Menu from './MenuComponent';
import  {DISHES}  from '../shared/dishes';
import {Component} from 'react';
import DishDetail from './ViewDish';
import Header from './Header';
import Footer from './Footer';

// React Router
import Home from './Home';
import {Switch, Route, Redirect} from 'react-router-dom';


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
    const HomePage = () => {
      return (
        <Home />
      )
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage}/>
          {/* since it requires argument we have to pass it as a function! */}
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/>}/>
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
  )};
}

export default Main;


// {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
// {/* passing directly the only object having the particular id founded before */}
// <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id == this.state.selectedDish)[0]} /> */}