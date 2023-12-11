import React, { Component } from 'react'

export default class LifeChild extends Component {
    

    componentWillUnmount(){

        console.log("componentWillUnmount");
      }

  render() {
    return (
      <div>

        <button >componentWillUnmount</button>
      </div>
      
    )
  }
}
