import {Component} from 'react';

// Custom components
import Menu from './MenuComponent';
import DishDetail from './ViewDish';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';

// Redux import
import { Reducer } from '../redux/reducer';

// React Router
import Home from './Home';
import {Switch, Route, Redirect} from 'react-router-dom';


class Main extends Component {
  onDishSelect(dishId){
    this.setState({ selectedDish: dishId})
    console.log('updated selectedDish' , this.state.selectedDish)
  }

  render (){
    const HomePage = () => {
      return (
        // it is only one wich has features === true.
        <Home 
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    }

    const DishWithId = ({match}) => {
      console.log(match)
      let dish = this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]
      let comment = this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))[0]
      console.log("comment in main", comment)
      return (
        <DishDetail 
          dish={dish}
          comments={comment}
        />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage}/>
          {/* since it requires argument we have to pass it as a function! */}
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/>}/>
          <Route path='/menu/:dishId' component={DishWithId}/>
          <Route exact path='/contact' component={Contact}/>
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