import React, { Component } from "react";
import Birthdaylist from "./Birthdaylist"
// import Ticket from "./Ticket"

class Movie extends Component{
 state={
    name:"Leo das"
 }
    render(){
        return(
            <div>
            {/* //     <h1> Name: {this.state.name}</h1>
            //     <h2>Hero: Vijay</h2>
            //     <h3>LCU : true</h3>    */}

{/*                 
        <Ticket value="LEO"/>
        <Ticket value="JAILER"/>  
        <Ticket value="CAPTAIN"/>         */}
                
                
    <Birthdaylist />
                
                 </div>
        )
    }
}

export default Movie