import React, { Component } from 'react'
import LifeChild from './LifeChild';

export default class Lifecyccle extends Component {
    state={
        des:true
    }
// componentDidMount(){
//     console.log("componentDidMount");
// }
// handleclick=()=>{
//     this.setState({count:this.state.count+1})
// }
// componentDidUpdate(prevprop){
//     console.log("componentDidUpdate",prevprop.value);
//     console.log("componentDidUpdate",prevprop.data);
// }
// shouldComponentUpdate(){
//   return true;
// }
// componentWillUnmount(){

//   console.log("cleared");
// }\

handleclick=()=>{
  this.setState({des:false})
}
  render() {
    console.log("render");
    return (<>
      {/* <div>count:{this.state.count}</div> */}
      <button onClick={this.handleclick}>parent</button>

      {this.state.des ?
      <LifeChild/> :null
  }
      </>
    )
  }
}
