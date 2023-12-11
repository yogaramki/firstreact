import React, { Component } from "react"
import "./Product.css"


class ProductComp extends Component{
 state={
    productlist:[]
 }


    handlefetch=()=>{
        let res=fetch("https://fakestoreapi.com/products")
        .then((resolve)=>{
            return resolve.json()
   
        })
        .then((data)=>{
            this.setState({productlist:data})
        console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        })
        console.log(res);
    };
   

    render(){
        return(
            <div>
                <h1> Product Page</h1>
                {this.state.productlist.map((da,i)=>(
                    <div>
                   <img src={da.image}/>
                   <h3 className="header ">{da.title}</h3>
                   <button className="container">Price:{da.price}</button>
                   <h2 className="des">Description{da.description}</h2>


                        </div>
                ))}
                <button onClick={this.handlefetch}>Add</button>
            </div>
        )
    }
}
export default ProductComp