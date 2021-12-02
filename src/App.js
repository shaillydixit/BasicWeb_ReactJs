import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// state hook functional to class compo
class App extends Component{
  state={
    count: 0
  }

  increase = () => [
    this.setState({count:this.state.count +4})
  ]
render(){
  return(
    <div>
      <h1>Time...{this.state.count}</h1>
     <button onClick={this.increase}>Click me</button>
    </div>
  )
}
}
export default App;
