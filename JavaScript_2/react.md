# React

React is a JS library for building user interfaces. 
React introudces the notion of VirtualDOM that allows to introduce elements and it is very useful for its modularity, the lifecycle maintenance and last **JSX** which allow to embed html into javascript.

First you should add the react.js in your head, as with jQuery:

```
<script src="https://fb.me/react-0.14.3.js"></script>
<script src="https://fb.me/react-dom-0.14.3.js"></script>
```

Components are the core of React, they make uo the nodes inside the VirtualDOM anch each component includes and maintains a state that changes with events. the **VirtualDOM** selectively renders and re-renderes the different parts of the tree, based on state changes. Basically in the normal DOM when an element is changed all the element inside the page are re-rendered while using VirtualDOM and react it change just the node that is changing, this stop is done with two steps: 'diff' and 'reconciliation' moreover, developing with react implies:

- Allocate a position on the page in which the desired React component will be rendered eg a \<div>
- Create a React component in JS (initial state, eventlistener, rendering)
- Drop the component into the position allocated in 1

JSX stand for JavaScript XML Syntax transform and it allow user to write html-like tags within javascript such as:

```
<div id='container></div>

<script type='text/jsx'>
ReactDOM.render(
    <h1>Hello, world!</h1>, 
    document.getElementById('container')
)
</script>
```

**Components** are JavaScript objectss based of te *React.Component prototype*, they define properties, eventà-base state variables and callback functions. a component's render() function is used to render its HTML.

```
var HelloComponent = React.createClass({

    render: function(){
        return (<h1>Hello word!</h1>)
    }

})


ReactDom.render(
    <HelloComponent />
    document.getElementById('container')
)

// one of the properties (key of the dict) is the render which has associated a function that is the html to be rendered!

```


ES6 allow to creating custom components, instead of creating a variable we are creating a class instead of a single object.

```
class HelloComponent extends React.Component{
    render(){
        return (<h1>Hello World!</h1>)
    }
}
```

There are 4 important parts of a react component:

1. Render () function
2. Properties which are attributes and values that are set when the component is created (not to be modified)
3. State that are attributes and value but that can be changed and modified according th the status

**Properties**
To access the properties are like arguments to the function and are retrieved using **this.props.** and is used to initialization attributes, you should not change this.

```
class HelloComponent extends React.Component{
    render(){
        return (<h1>Hello {this.props.name}! </h1>)
    }
}

ReactDOM.render(
    <HelloComponent name='Sofy'>,
    document.getElementById('container')
)
```

**State**
is the set of variables that can change during the component's lifecycle, they should be initialized in the constructor (is the function that is called when the object is create) and can be access with **this.state**.

```
class TimeViewed extends React.Component{

    constructor(props){
        super(props)

        var TimeViewed = 0
        if (localStorage.TimeViewed){TimeViewed = localStorage.TimeViewed}

        TimeViewed++
        this.state = {numViews:TimeViewed}
        localStorage.TimeViewed = TimeViewed
    }

    render(){
        return <h1> You've seen this page {this.state.numViews}</h1>
    }
}

```

the state change in response to some user action or event and we can bind an event to a call back function within th React component. the component can then change its state using the seState function, and when seState is called, that will automatically call render, which will redraw the component.

```
class Counter extends React.components{

    constructor(props){
        super(props)
        this.state { count: 0}
    }

    incrementCount(){
        this.setState({count: this.state.count +1}) //invoke automatically render()
    }

    render(){ 
        return (
            <div> Count {this.state.count} </div>
            <button type='button'>  onClick={this.incrementCount.bind(this)}  Increment </button>
            </div>
        )
    }
}
```

## Advanced React

First we start by doing a todolist with a reactive list

```
class TodoList extends React.Component{
    constructor(super){
        var allItems = ['Animal', 'Doing' ,'Stuff', 'Searching']
        this.state = {
            initItems : allItems,
            currentItems: allItems
        }
    }

    filterList(input){
        var updatedList = this.state.initItems

        updatedList = updatedList.filter(        function(item){
            return item.search(input.target.value) !== -1
        })
        this.setState({currentItems : updatedList})
    }

    render(){
        return (
        <div>
            <input type='text' placeholder='search' onChange={this.filterList.bind(this)} />
            <ListItems items = {this.state.currentItems}>
        </div>
        )
    }
}

class ListItems extends React.Component{
    render(){
        return (
            <ul>
                {this.props.items.map(
                    function(item){
                        return <li> key={item} </li>
                    }
                )}
            </ul>
        )
    }
}

ReactDOM.render(<TodoList/>, document.getElementById('container'))
```

