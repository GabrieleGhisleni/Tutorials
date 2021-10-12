# Introduction

React is very useful since it allow complex manipulation of the DOM specially retrieving the data from a server. react it also allow the modularity of the code and the possibility of reusing block of code. 

- What is React?

React is a JavaScript library for building user interfaces.

- **Declarative** making it easy to create views.
- **Component-based**

Some vocabulary: *one-way data flow, JSX, components, state, props, virtual DOM, element, flux/redux, testing*.

## Element and component

the smallest building block is called a react element:

```js
const element = <h1 className='appTitle'>Welcome! </h1>
```

while components are made of elements:

```js
import React, {Component} from 'react';

class App extends Component{
    render(){
        return(
            // not anymore just class but className!
            <div className='App'>
        )
    }
}
```

## JSX

```js
const element = (
    <h1 className='appTitle'>Welcome! </h1>
);
```

there is some HTML inside the javascript code and so this is the special sintax that react use to express the various react elements. JSX is Syntactic extension to Javascript, it is a shorthand notation to represent javascript functions calls that evaluate to javascript objects avoiding artificial sepration of rendering logic from other UI logic. 

```js
const element = React.createElement(
    'h1,
    {className: 'greeting'},
    'Hello, words!'
);

// which will become:

const element = {
    type:'h1',
    props:{
        className : 'greeting',
        children: 'Hello, word'
    },
    id:0
}

// including the variable inside the HTML code
.. return(
    <div key={element.id} className='col-12'></div>
)
```

## Include Bootstrap inside our React App

we have to configure the bootstrap package called **reactstrap** which provide bootstrap components in react. 

install first:
- bootstrap --save
- reactstrap --save
- react-popper --save

then into index.js

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

# React Component

- Component returns a set of React elements that should appear on the screen.
- Enable to split UI into independent, reusable piece.
- *Components also accept inputs*.

some component conventions:
- User-defined component names must always start with a capital letter.
- tags starting with lowercase letters are treated as DOM tags.


```js
// MenuComponent.js

import React, {Component} from 'react';
import  {Media} from 'reactstrap';

class Menu extends Component{
    constructor(props){
    super(props);
    this.state = {
            dishes: [1,2]
    }

    render(){
        const menu = this.state.dishes
        return(
            <div className='container'>
                <div class='row'>

                    // Media object from reactstrap!
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    
}

// export the class
export default Menu;
```

- every item require a key to be specified! it helps react to recognize each one of the element and while rendering the screen it will update the user interfaces.

- the state in declared when the class is initialized and when you have to update the props

```js
this.setState({property: newValue})
```

you can also pass attribute to the class such that \<Menu dishes={this.state.dishes} otherProps={this.state.comments}>

## Map Function 
```js

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
```

## Handling events

handling events is similar to the wau you handle events on DOM elements:

```js
// when click calling the function!
<Card bClick={() => this.onDishSelect(dis)}>
```

- list are handled similar to JavaScript as we seen before with the map function. **for each item is very important to specify the keys.**

## Cards and lifting up of props

```js
class Menu extends Component{
    constructor(props) {
        super(props);
        // new property called selectedDish
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish){
        this.setState({ selectedDish:dish })
    }

    renderDish(dish){
        if (dish != null){
            return (
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{ // if null return an empty div
            return (<div></div>)
        }
    }

    render(){
        // for every dish return => function
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
                <div class='row'>
                    {menu}
                </div>
                <div className='row'>
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}
```

## Component types

- Presentation vs Container
- Skinny vs Fat
- Dumb vs Smart
- Stateless vs Stateful

- Presentational components

are mainly concerned with rendering the 'view', render the view based on the data tha is passed to them in props. they do not maintain their own local state! purely container for views.

- Container components

it is used to track the state, they are responsible fro making things work (data fetching, state updates and so on). **they provide the data to the presentational components!**.  purely container for data.

## Hierarchy of props

Main.js
```js

onDishSelect(dishId){
this.setState({ selectedDish: dishId})
console.log('updated selectedDish' , this.state.selectedDish)

....

<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
```   

Menu.js

```js
<Card onClick={()=> this.props.onClick(dish.id)}>
```

## Header

```js
import React, {Component} from "react";
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {isOpen:false}
        // bounding the function to this!
        this.togglerNav = this.togglerNav.bind(this)
    };

    togglerNav() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render () {
        return(
        <React.Fragment>
        {/* Reactive Navbar */}
        <Navbar dark color='primary' expand='md'>
          <div className='container'>
            <NavbarToggler onClick={this.togglerNav} /> 
            <NavbarBrand className='mr-auto' href='#'>
                <img src='assets/logo192.png' height='30' width='30'/>
            </NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/home'><span className='fa fa-home'></span>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'><span className='fa fa-info-circle'></span>Contattaci</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/menu'><span className='fa fa-list'></span>Menu</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
          </div>
        </Navbar>

        <Jumbotron>
            <div className='container'>
                <div className='row row-header'>
                    <div class='col-12 col-sm-6'>
                        <h1>We All</h1>
                        <p>
                            We take inspiration from real life's events and make them shared!
                            Our creation is up the the entire community nothing is excluded.
                        </p>
                    </div>
                </div>
            </div>
        </Jumbotron>
        </React.Fragment>
    )};
}

export default Header;
```

## React Router 

React router are used to deal the pages of the app. are collection of navigational components, it enables navigation among different views. 

- install react-router-dom that five a \<BrowserRouter> component.

in order to determine matcgning components we user \<Route> and \<Switch> components. the first one enable to specify the url path. in a web cpplication we use the \<NavLink> component that enable to creates link in the applications. 


```js
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
    
<Switch>
    <Route path='/home' component={HomePage}/>
    {/* since it requires argument we have to pass it as a function! */}
    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/>}/>
    <Redirect to='/home' />
</Switch>
```

Router parameters specified in the path specification as a token using the *:* such as: **menu/:id**. 
they are specified using this syntax:


```js
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

<Route path='/menu/:dishId' component={DishWithId}/>


<Link to{`/menu/${dish.id}`}>
```

## Single page application

<img src='__images/singlepage.PNG'>


## Forms

```js
// form elements
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

// since we are going to use form we transform this into a class so to save elements

class Contact extends Component{
    constructor(props){
        super(props);
        this.state= {
            firstName: '',
            lastName: '',
            telNum: '',
            email: '',
            agree: false,
            contactType: 'Tel'
        }
        // bind to this object!
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);


    }
    handleInput(event){
        // which input as been changed
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log("name, value", name, value, this.state.firstName)
        this.setState({
          [name]: value
        });
    }

    

    handleSubmit(event){
        console.log('current stat', JSON.stringify(this.state))
        alert('current stat', (this.state))
        // avoid refresh page!!
        event.preventDefault()
    }

    render(){
        return(<div className='row row-content'>
                    <div className='col-12'>
                        <h3>Send feedback</h3>
                    </div>
                    <div className='col-12 col-md-9'>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            {/*Label md={2} 2 columns! */}
                            
                            <Label htmlFor='firstName' md={2}>First Name</Label>
                            <Col md={10}>
                                <Input type='text' id='firstName' onChange={this.handleInput}
                                name='firstName' placeholder='first name' value={this.state.firstName}/>
                            </Col>

                            <Label htmlFor='lastName' md={2}>last Name</Label>
                            <Col md={10}>
                                <Input type='text' id='lastName' onChange={this.handleInput}
                                name='lastName' placeholder='last name' value={this.state.lastName}/>
                            </Col>
                            <Label htmlFor='telNum' md={2}>tel</Label>
                            <Col md={10}>
                                <Input type='number' id='telnum' onChange={this.handleInput}
                                name='telNum' placeholder='tel' value={this.state.telNum}/>
                            </Col>

                            <Label htmlFor='email' md={2}>email</Label>
                            <Col md={10}>
                                <Input type='email' id='email' onChange={this.handleInput}
                                name='email' placeholder='tel' value={this.state.email}/>
                            </Col>
                            </FormGroup>
                            <FormGroup row>
                                {/* 6 columns treat it as js object */}
                                <Col md={{size:6, offset:2}}>
                                    {/* checkbox */}
                                    <FormGroup check>
                                        <Label check>
                                            <Input type='checkbox' onChange={this.handleInput} name='agree' checked={this.state.agree}/>
                                            {' '} may we contact you?
                                        </Label>
                                    </FormGroup>
                            
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Input type='select' onChange={this.handleInput} name='contactType' value={this.state.contactType}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10, offset:2}}>
                                    <Button type='submit' color='primary'>Submit</Button>
                                </Col>
                            </FormGroup>                       
                    </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;

```


## Model view 

design patterns is a well-documented solution to a recurring problem, if there is a well documentation while fixed again and again the same problem? tern offer reusable solution to commonly occurring problems. 

the Model-View-Controller Framer allow to isolation the domain logic from user interface, this permits independent development testing and maintenance, this model is composed by three components: model, view, controller.

the Model:

- manages the behavior and data of the application domain
- responds to requests for information about its state
- responds to instructions to change state (usually from the controller)


The View:

- Renders the model into a form suitable for interaction, typically a user interface element.
- A viewport typically has a one to one correspondence with a display surface and knows how to render it.

- Controller:

- Receives user input and initiates a respond by making calls on a model objects

### Flux

it is a software engineering patter: 

<img src ='../Frontend/__images/flux.PNG'>

in flux architecture any action must be done trough the dispatcher. new actions propagated trough the system in reponse to user interactions centralized by the dispatcher. no other way to change the state of the application.

### Redux

**Consistent way to support the state!** it makes state mutations predictable. there is a single source of truth, only one storage. the state is read-only, changes should only be done trough actions. changes are made with pure functions they take prvious state and action and return next state (no mutation of the previous state, it will return a new state but do not modify the previous).

it allows easy to implement:
- Logging
- API handling
- Undo/redo
- State persistence

the state is stored in a plain JS object while the action is a plain JS objcet with a type field that specifies how to change something in the state. the reducer is a pure fucntions that take the current state and action and return a new state. 

#### redux store

- created using createStore()
- supplies three methods:
    - dispatch() states state update with the privded action object
    - geState() return the current stored state value
    - subscribe()

> react-redux; redux; react-redux-form packges

### Redux configuration

```js
import {ConfigureStore} from './redux/configureStore'
const store = ConfigureStore();
      <Provider store={store}>
```

```js
import { Reducer, initialState } from "./reducer";
import {createStore} from 'redux';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );
    return store;
}
```
```js
// static json
import  {DISHES}  from '../shared/dishes';
import  {COMMENTS}  from '../shared/comments';
import  {LEADERS}  from '../shared/leader';
import  {PROMOTIONS}  from '../shared/promotions';

export const initialState = {
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS,
    dishes : DISHES,
}

export const Reducer = (state=initialState, action) => {
    return(
        state
    );
};
```
```js
const mapStateToProps = state => {

    return ({
      comments: state.comments,
      leaders: state.leaders,
      promotions: state.promotions,
      dishes : state.dishes,
    });
}
export default withRouter(connect(mapStateToProps)(Main));
```


> install redux-tunk; redux-logger

# Fetch

## Promises

A promise as a mechanism that supports asynchronous computations. in using a promise it provides a rpoxy for a value not necessarily known when the promise is created (return a proxy object that give you acess to results when it is available).

a promise will be in pending state untill the results will arrive. 

```js
new Promise (function(resolve, reject){ ... }) // Promise is the fetch() functions.

fetch()
    .then(function(result)){...} // resolved
    .then(function(result)){...} // chain 
    .catch(function(error)){...} // rejected
```

promises can be chained.

## Fetch abstractions:

- Request represent a resoruce requeste
- Response represent the response to a request
- Headers represent response/request headers
- Body provides methods relating to the body of the response/requests

```js
// GET OPERATION
fetch(baseUrl + 'dishes')  //return a promise object
    .then(response => response.json()) // transform it into a json data
    .then(data => console.log(data)) //chain
    .catch(error => console.log(error.message)) // if promise fails

// POST OPERATION -> must specify the properties.
let specific = {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {'Content-Type':'application/json'}
    credentials: 'same-origin'
}

fetch(baseUrl + 'dishes', specific)  //return a promise object
    .then(response => response.json()) // transform it into a json data
    .then(data => console.log(data)) //chain
    .catch(error => console.log(error.message)) // if promise fails

// Dealing with errors
fetch(BaseUrl + 'dishes')
    .then(response => {
        if (response.ok){return response}
        else{
            var error = new Error('Error' + response.status+ ': '+ response.statusText);
            error.response = response;
            throw error;
        }
     })
     error => {
         var errMsg= new Error(error.message);
         throw errMsgM;
     }
     .then(response => {...})
```
> install cross-fetch

- alternatives are Axios.