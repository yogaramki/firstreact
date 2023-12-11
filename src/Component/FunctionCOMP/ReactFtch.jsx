import React, { useEffect, useState } from 'react'

export default function ReactFtch() {
    const [data,setdata]=useState([]);
    
    useEffect(()=>{
     handlefetch()
    },[]);
    const handlefetch=async()=>{
        let res= await fetch("https://course-api.com/react-tours-project");
        let datas= await res.json();
        setdata(datas)
        console.log(datas);
    }
  return (
    <div>
{
    data.map((d)=>(
        <div> 
            <h1>{d.name}</h1>
            <img src={d.image}/>
            <h4>{d.info}</h4>
        </div>
    ))
}
    </div>
  )
}
