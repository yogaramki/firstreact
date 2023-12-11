import React, { useContext } from 'react'
import CartContext from '../Context/CartContext'

export default function Product() {
    const {increment}=useContext(CartContext)
  return (
    <div>
        <button onClick={increment}>Add Cart</button>
    </div>
  )
}
