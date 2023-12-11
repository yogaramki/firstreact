import React, { useEffect, useState } from 'react'

export default function RenderFun() {

    const [count,setcount]=useState(0)
    useEffect(()=>{
        console.log("USE EFFECT");

        return()=>{
            console.log("Destroy");
        }
    },[])
    const handleadd=()=>{
         setcount(count+1);
    };
  return (
    <div>
     
        <h1>{count}</h1>
        <button onClick={handleadd}>Click</button>
    </div>
  )
}
