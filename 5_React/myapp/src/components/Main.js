import {Component} from 'react';

// Custom components
import Menu from './MenuComponent';
import DishDetail from './ViewDish';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Home from './Home';

// Redux import
import { Reducer } from '../redux/reducer';
import {connect} from 'react-redux';

// React Router (withRouter is used for Redux)
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

const mapStateToProps = state => {

    return ({
      comments: state.comments,
      leaders: state.leaders,
      promotions: state.promotions,
      dishes : state.dishes,
    });
}



class Main extends Component {
  render (){
    const HomePage = () => {
      return (
        // it is only one wich has features === true.
        <Home 
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />

      )
    }

    const DishWithId = ({match}) => {
      console.log(match)
      let dish = this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]
      let comment = this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))[0]
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
          <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/>}/>
          <Route path='/menu/:dishId' component={DishWithId}/>
          <Route exact path='/contact' component={Contact}/>
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
  )};
}

// wrap the main with connect to use redux

export default withRouter(connect(mapStateToProps)(Main));


// {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
// {/* passing directly the only object having the particular id founded before */}
// <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id == this.state.selectedDish)[0]} /> */}