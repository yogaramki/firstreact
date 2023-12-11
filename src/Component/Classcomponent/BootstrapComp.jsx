import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./BootstrapComp.css"

class BootstrapComp extends Component {
  state = {
    cards: [
      {
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" ,
        title: "Fjallraven - Foldsack No. 1 Backpack",
      price: "1000 ",
      },
      {
        id: 2,
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" ,
        title: "Mens Casual Premium Slim Fit T-Shirt",
        price: "600 ",
      },
      {
        id: 3,
        image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        title: "Mens Cotton Jacket",
        price: "4530 ",
      },
      {
        id: 4,
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" ,
        title: "Mens Casual Slim Fit",
        price: "999 ",
      },
      {
        id: 5,
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: "1000 ",
      },
      {
        id: 6,
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        title: "Solid Gold Petite Micropave",
        price: "7590 ",
      },
      {
        id: 7,
        image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        title: "White Gold Plated ",
        price: "6999 ",
      },
      {
        id: 8,
        image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: "500 ",
      },
      {
        id: 9,
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        title : "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        price: "500 ",
      },
      {
        id: 10,
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: "400 ",
      },
    ]
   
  };
  render() {
    return (
      <>
      <h1>WELCOME</h1>
      <div className="row">
        {this.state.cards.map((cr, i) => (

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
  
        ))}
        </div>
      </>
    );
  }
}
export default BootstrapComp;
