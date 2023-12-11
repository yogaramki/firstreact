import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Usefetchapi(url,intialdata) {
  const [responsedata,setresponsedata]=useState(intialdata)
  useEffect(()=>{
handlefetch()
  },[])

  const handlefetch=async()=>{
    try{
 let res=await fetch(url)
 let data=await res.json()
 setresponsedata(data)
    }
    catch(err){
console.log(err);
    }
  }
  return { responsedata }
}