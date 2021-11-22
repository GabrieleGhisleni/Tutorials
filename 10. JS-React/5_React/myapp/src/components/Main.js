import {Component} from 'react';
import React, { useState, useRef, useCallback } from "react";
// Custom components
import Menu from './MenuComponent';
import DishDetail from './ViewDish';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Home from './Home';
import {Loading} from './Loading';

// Redux import
import {connect} from 'react-redux';
import {addComment, fetchDishes, fetchComments, fetchPromos, postComment} from '../redux/ActionCreators';

// Redux form
import { actions } from 'react-redux-form';

// React Router (withRouter is used for Redux)
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

// animations
import {TransitionGroup, CSSTransition} from 'react-transition-group';



// state of redux
const mapStateToProps = state => {
    return ({
      comments: state.comments,
      leaders: state.leaders,
      promotions: state.promotions,
      dishes : state.dishes,
    });
}

// dispatch, action of redux
const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author,comment) => dispatch(addComment(dishId, rating, author,comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm:() => dispatch(actions.reset('feedback')),
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())},
  postComment: () => {dispatch(postComment())}

});


class Main extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchPromos();
    this.props.fetchComments();
  }

  render (){
    const HomePage = () => {
      return (
        // it is only one wich has features === true.
        <Home 
          dishLoading ={this.props.dishes.isLoading}
          dishErrMsg = {this.props.dishes.errMsg}
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promosLoading={this.props.promotions.isLoading}
          promosErrMsg={this.props.promotions.errMsg}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />

      )
    }

    const DishWithId = ({match}) => {
      if (this.props.dishes.isLoading){
          return (
              <div className='container'>
                  <div className='row'>
                      <Loading />
                  </div>
              </div>
          );
      }
    else if (this.props.dishes.dishErrMsg){
        return (
        <div className='container'>
            <div className='row'>
                <h4>{this.props.dishes.dishErrMsg}</h4>
            </div>
        </div>

        );
      }
      else {
      console.log('here',this.props)
      let dish = this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]
      let comment = this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))
      return (
        <DishDetail 
          dishLoading ={this.props.dishes.isLoading}
          dishErrMsg = {this.props.dishes.err}
          dish={dish}
          comments={comment}
          commentsErrMsg={this.props.comments.errMsg}
          postComment = {this.props.postComment}
        />
      );
    }}

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames='page' timeout={1000}>
            <Switch>
              <Route path='/home' component={HomePage}/>
              {/* since it requires argument we have to pass it as a function! */}
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/>}/>
              <Route path='/menu/:dishId' component={DishWithId}/>
              <Route exact path='/contact' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />}/>
              <Redirect to='/home' />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
  )};
}

// wrap the main with connect to use redux

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));


// {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
// {/* passing directly the only object having the particular id founded before */}
// <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id == this.state.selectedDish)[0]} /> */}