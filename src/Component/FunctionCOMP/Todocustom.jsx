import React from 'react'
import Usefetchapi from './Hooks/Usefetchapi'

export default function Todocustom() {

const{responsedata}=Usefetchapi("https://jsonplaceholder.typicode.com/todos",[])


  return (
    <div>
        {responsedata.map((da,index)=>(
            <div key={index}> 
                <h3> {da.title}</h3>
            </div>
        ))}
    </div>
  )
}
