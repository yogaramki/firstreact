import React, { Component } from "react";

class Ticket extends Component{
    state={
        name:"LEO",
        releasedate:"10 oct 2023",
        ticketcount: 0
       }
        increaseCount=()=>{
       this.setState({ ticketcount  : this.state.ticketcount+1});
       }
    render()
    {
        return(
            <div>
                <h1>MOVIE NAME:{this.props.value} </h1>
                <h4> RELEASE DATE:{this.state.releasedate }</h4>     
                <h4>TicketCount:{this.state.ticketcount}</h4>
                <button onClick={this.increaseCount}>ADD </button>
            
            </div>
        )
    }
}


export default Ticket