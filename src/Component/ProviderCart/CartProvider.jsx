import {  useEffect, useState } from "react"
import React from 'react'
import CartContext from "../Context/CartContext"
// import Naviex from "../Common/Naviex"
// import axios from "axios"

export default function CartProvider({children}) {
    const [count,setcount]=useState(0)
  //  const [data,setdata]=useState([])
    const increment=()=>{
        setcount(count+1)
    }
  //   const handlefetch=async()=>{
  //     let abc= await axios.get("https://fakestoreapi.com/products");
     
  //     setdata(abc.data)
  //     console.log(abc.data);
  // }
  // useEffect(()=>{
  //   handlefetch()
  // })
  return (
    <div>
      {/* <Naviex /> */}
        <CartContext.Provider value={{count,increment}}>
{children}
        </CartContext.Provider>
    </div>
  )
}
