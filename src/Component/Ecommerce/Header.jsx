import React, { useContext } from 'react'
import CartContext from '../Context/CartContext'

export default function Header() {
    const {count}=useContext(CartContext)
  return (
    <div>
        <h1>
            Cart:{count}
        </h1>
    </div>
  )
}
