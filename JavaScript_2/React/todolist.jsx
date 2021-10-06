class Liked extends React.Component{
    constructor(props){
        super(props)
        this.state = {liked : false,
                    name: this.name}}
    
        click() {
            this.setState({liked: !this.state.liked})
        };

        render(){
            var name = this.props.name
            var color = this.state.liked ? 'black' : 'red'
            return <p style={{color:color}} onClick= {this.click.bind(this)}> Hi {this.props.name}</p>
        }
}

ReactDOM.render(
    <div>
        <Liked name='sofy'/>
    </div>,
    document.getElementById('myLike')
)



class Counter extends React.Component { 
    constructor(props) {
      super(props);
      this.state = { count : 0 };
    }
  
        incrementCount () { 
        this.setState({ 
                 count: this.state.count + 1 
          });
        }
        
        
        render () { // invoked when setState is called
        return ( 
        <div>Count: { this.state.count } 
          < button type = "button" onClick = { this.incrementCount.bind(this) } > Increment </button> </div>
    );
    } 
  }; 
  
  ReactDOM.render(
    <div>
      <Counter />
     </div>,
  document.getElementById('container'))