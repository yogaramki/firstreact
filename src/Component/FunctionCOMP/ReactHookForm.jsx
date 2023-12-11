import React from 'react'
import {useForm} from "react-hook-form"
export default function ReactHookForm() {

    const {register,handleSubmit,formState ,getValues } =useForm(
       {
      
        defaultValues:{
            name:"yoga",
            email:"email@gmail.com"
        },
        mode:'all'
    }
    );
    const {errors}=formState
    const handleget =(e)=>{
        e.preventDefault()
       console.log(getValues());
    };
const onsubmit=(data)=>{
 console.log(data);
};

  return (
    <div>
        {console.log(errors)}
         <form>
        
        <label>Name</label>
        <input 
         type="text"
          placeholder='Enter UR Name'
          {...register("name",{required:"Mandatory"})}
          />
          <p>{errors?.name?.message} </p>
          <br/><br/>
        <label>Age</label>
        <input 
         type="Number"
        placeholder='Enter UR Age' 
        {...register("age",{ 
            valueAsNumber:true,
            required:"Mandatory"
        })}
        />
        
        <p>{errors?.age?.message}</p>
        <br/><br/>
        <label>Email</label>
        <input   
        type="text"
         placeholder='Enter UR Email'
         {...register("email",{required:"Mandatory", pattern:{
            value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message:"email invalid"
        }})}
         />
         <p>{errors?.email?.message}</p>
         <br/><br/>

         <label>Password</label>
        {/* <input   
        type="password"
         placeholder='Enter UR Password'
         {...register("password",
             {required:"Mandatory",
        pattern:{
            value:/ ^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message:"Password conatains Special symbol"
        },
        },
        )}
         /> */}


<input
                    type="password "
                    placeholder="Password"
                
                    {...register("password", { required: 'Password is required',
                    pattern:{
                        value:/^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_â‚¹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_â‚¹]{10,16}$/,
                        message:'Password should include at least one uppercase, one numeric value and one special character'
                    },
                    minLength:{
                        value:8,
                        message:'Minimum Required length is 8'
                    },
                    maxLength: {
                        value: 20,
                        message: "Maximum Required length is 20",
                      },
                 })}
                  />
         <p>{errors?.password?.message}</p>
         <br/><br/>


        <button onClick={handleSubmit(onsubmit)}>Submit</button>
        <button onClick={(e)=>handleget(e)}>getdata</button>
        
        </form>
    </div>
  )
}
