import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


export default function ProductCard (){
    const {handlefetch}=useContext(CartContext)
    return(
        <div>
         <div className="row">
        {data.map((cr, i) => (

    <Card style={{ width: '18rem' }}>
    <Card.Img src={cr.image}/>
    <Card.Body>
      <Card.Title>{cr.title}</Card.Title>
      <Card.Text>
       {cr.price}
      </Card.Text>
      <Button variant="primary">Order</Button>
    </Card.Body>
  </Card>
  
        ))}</div>
        </div>
    )
}