import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import "./Todoaxios.css"
export default function Todoaxios() {
    let uuid=uuidv4()
const [input,setinput]=useState("")
const [todolist,settodolist]=useState([])

    const handletaskadd=(e)=>{
        setinput(e.target.value)
  
    }
    const handlefetch=async()=>{
        let abc= await axios.get("http://localhost:3000/todoList")
        settodolist(abc.data)
        console.log(abc.data);
    }
useEffect(()=>{
    handlefetch()
},[])
    const handlechange=async()=>{
     let body={
        id:uuid,
        task:input
     }
        await axios.post("http://localhost:3000/todoList",body)
        handlefetch()

     
    }
    const handledelete=async(deleteid)=>{

        await axios.delete("http://localhost:3000/todoList/"+deleteid)
        handlefetch();
    }

    const handleupdate=async(i)=>{
         let updatedata=prompt("update ur task",todolist[i].task)
         let body={
            id:todolist[i].id,
            task:updatedata
          }
        await axios.put("http://localhost:3000/todoList/"+todolist[i].id,body)
        handlefetch()
 

    }
  return (
    <div className='container'>
        <h1>Todolist</h1>
        <br/> <br/>
    <div className='task-text'>
     
        <input  placeholder='Add  Your Task' onChange={(e)=>handletaskadd(e)}/>
        <button className='add' onClick={handlechange}>Add Task</button> <br/><br/>
        {todolist.map((to,i)=>(
            <div  key={i}>
            <span >{to.task}</span>
            <div className='button-container'>
            <button className='up' onClick={()=>handleupdate(i)}>Update</button>
            <button className='del' onClick={()=>handledelete(to.id)}>Delete</button>        
            </div>   
            </div>

        ))}
        </div>
  </div>
  )

}
