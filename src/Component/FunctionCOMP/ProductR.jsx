import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function ProductR() {
  const nav=  useNavigate()
  const handleclick=()=>{
nav("/contact")
  }

  const location=useLocation()
  console.log(location);
  return (
    <div>ProductR
        <button onClick={handleclick}> Contact</button>
    </div>
  )
}

