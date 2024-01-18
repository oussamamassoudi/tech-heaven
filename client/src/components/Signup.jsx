import React from 'react'
import signin from "../assets/signin.svg";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegister } from '../redux/userslices';
import { Link } from 'react-router-dom';
const Signup = () => {
const [register, setregister] = useState({
    name:"",
    lastname:"",
    email:"",
    password:"",
})
const dispatch = useDispatch();

  return (
    <div className=' flex flex-row justify-around'>
        <img  className="w-full h-screen sm:w-[700px] " src={signin} alt="" />
        <div className='flex flex-col justify-center' >
            <h1>Sign Up</h1>
            <form action="">
                <div>
                    <input type="text" onChange={(e)=>setregister({...register, name:e.target.value})} />
                    <label htmlFor='name'>Name</label>
                </div>
                <div>
                    <input type="text" onChange={(e)=>setregister({...register, lastname:e.target.value})}/>
                    <label htmlFor="last name"> Last Name</label>
                </div>
                <div>
                    <input type="email" onChange={(e)=>setregister({...register, email:e.target.value})} />
                    <label htmlFor='email'>Email Address</label>
                </div>
                <input type="password" onChange={(e)=>setregister({...register, password:e.target.value})}/>
                <label htmlFor='password'>Password</label>
            </form>
            <button className='bg-button text-white w-[120px] rounded-sm flex justify-center' onClick={()=>{dispatch(userRegister(register))}} ><Link to="/">Sign up</Link></button>
        </div>
    </div>
  )
}

export default Signup