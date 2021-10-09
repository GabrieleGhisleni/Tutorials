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