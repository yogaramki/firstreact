import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let uuid=uuidv4()
const [input,setinput]=useState("")
const [todolist,settodolist]=useState([
    {
        task:"Walking",
        id:1
    },
    {
        task:"Gardening",
        id:2
    }
])

    const handletaskadd=(e)=>{
        setinput(e.target.value)
  
    }

    const handlechange=()=>{
        // console.log("input",input);
        settodolist([...todolist,{id:uuid,task:input}])
    }
    const handledelete=(deleteid)=>{
        const filterdelete=todolist.filter(to=>to.id!=deleteid)
        settodolist(filterdelete)
 console.log(deleteid);
    }

    const handleupdate=(i)=>{
console.log(i);
let updatedata=prompt("update ur task",todolist[i].task)
let copiedtodolist =[...todolist]
copiedtodolist[i].task=updatedata
settodolist(copiedtodolist)

console.log(copiedtodolist);
console.log(updatedata);
    }
  return (
    <div>
     
        <input  placeholder='Add  Your Task' onChange={(e)=>handletaskadd(e)}/>
        <button onClick={handlechange}>Add Task</button> <br/><br/>
        {todolist.map((to,i)=>(
            <div key={i}>
            <span>{to.task}</span>
            <button onClick={()=>handleupdate(i)}>Update</button>
            <button onClick={()=>handledelete(to.id)}>Delete</button>           
            </div>

        ))}
        </div>
  
  )
}
