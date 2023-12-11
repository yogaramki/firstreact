import React, { useEffect, useState } from 'react'
import Usefetchapi from './Hooks/Usefetchapi'

export default function HomeComp() {
    // const [responsedata,setresponsedata]=useState([])
  const{responsedata}=Usefetchapi("https://fakestoreapi.com/products",[])

  return (
    <div>
       {
        responsedata.map((data,i)=>(
            <div>
                <h3>{data.title}</h3>
                </div>
        ))
       }
    </div>
  )
    }
