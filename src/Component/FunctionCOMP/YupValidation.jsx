import React from 'react'
import {useForm} from "react-hook-form"
import * as yup from "yup"
// import {yupResolver} from "@hookform/resolvers/yup"
import { yupResolver } from '@hookform/resolvers/yup';


const detailschema=yup.object({
    name:yup.string().required("name is Mandatory"),
    email:yup.string().email("email need to be valid").required("email is Mandatory"),
    age:yup.number().required("age is Mandatory"),
    password:yup.string().required("Password is mandatory")
})

export default function YupValidation() {
    const {register,handleSubmit,formState}=useForm(
        {
            resolver:yupResolver(detailschema)
        }
    );
    const {errors}=formState
    const onsubmit=(data)=>{
        console.log(data);
    }

  return (
    <div>
        
        <form>
        
        <label>Name</label>
        <input 
         type="text"
          placeholder='Enter UR Name'
          {...register("name")}
          />
          <p>{errors?.name?.message} </p>
          <br/><br/>
        <label>Age</label>
        <input 
         type="Number"
        placeholder='Enter UR Age' 
        {...register("age")}
        />
        
        <p>{errors?.age?.message}</p>
        <br/><br/>
        <label>Email</label>
        <input   
        type="text"
         placeholder='Enter UR Email'
         {...register("email")}
         />
         <p>{errors?.email?.message}</p>
         <br/><br/>

         <label>Password</label>
<input
                    type="password "
                    placeholder="Password"
                
                    {...register("password")}
                  />
         <p>{errors?.password?.message}</p>
         <br/><br/>


        <button onClick={handleSubmit(onsubmit)}>Submit</button>
      
        
        </form>

    </div>
  )
}
