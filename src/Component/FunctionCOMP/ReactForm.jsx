import React, { useState } from 'react'
let count=0
export default function ReactForm() {
    const[name,setname]=useState("")
    const[age,setage]=useState()
    const[email,setemail]=useState("")
    const [show,setshow]=useState(false)
    const handlename=(e)=>{
        setname(e.target.value)
// console.log(e.target.value);
    }
    const handleage=(e)=>{
        setage(e.target.value)
    }
    const handleemail=(e)=>{
        setemail(e.target.value)
    }
    const handleadd=(e)=>{
        e.preventDefault()
setshow(true)
    }
  count++
  return (
    <div> 
        <h1>rendering:{count}</h1> 
<h1>FORM</h1>{ !show&&
        <form>
        
        <label >Name</label>
        <input onChange={(e)=>handlename(e)} type="text" placeholder='Enter UR Name' /><br/><br/>
        <label >Age</label>
        <input onChange={(e)=>handleage(e)} type="Number" placeholder='Enter UR Age' /><br/><br/>
        <label >Email</label>
        <input  onChange={(e)=>handleemail(e)} type="text" placeholder='Enter UR Email'/><br/><br/>
        <button onClick={(e)=>handleadd(e)}>Submit</button>
        
        </form>} 
{ show && <>
        <h4>NAME:{name}</h4>
        <h4>AGE:{age}</h4>
        <h4>EMAIL:{email}</h4>
        </>}
    </div>
  )
}
