import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { conuterAction } from "./Redux/Slice/CounterSlice";
export default function CounterComp() {
    // const[count,setcount]=useState(0)
    let countNumber=useSelector((store)=>store.counter.count)
    let dispatch=useDispatch()

    const handleincrement =()=>{
       dispatch(conuterAction.increment())
    }
    const handledecrement=()=>{
    dispatch(conuterAction.decrement())
    }
  
  return (
    <div className="container mt-5">
      <button onClick={handleincrement}>Increment</button>
      <span>count :{countNumber}</span>
      <button onClick={handledecrement}>Decrement</button>
    </div>
  );
}
