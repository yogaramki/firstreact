import React, { Component } from "react";

export default class Accordionchild extends Component {
  state = {
    isshow: false,
  };

handlechange=()=>{
  this.setState({isshow:  ! this.state.isshow  })
}

  render() {
    return (
      <div>

        <h2>{this.props.title}</h2>
        <button onClick={this.handlechange} className="">
          
          {this.state.isshow ? "-":"+"}
          
          </button>
        {this.state.isshow && <p>{this.props.info}</p>}

      </div>
    );
  }
}
