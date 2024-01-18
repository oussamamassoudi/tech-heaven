import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/userslices';
import login from "../assets/login.svg"
import logoutt from "../assets/logout.svg"
import profil from "../assets/profile.svg"

function Profil() {
    const user = useSelector((state) => state.user.user);
    console.log(user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
      <div className=' flex flex-col items-center w-full bg-pink-400'>
      
        <h1 className='font-poppins font-semibold text-[18px]'>My profile</h1>
        
        <div className='flex justify-around ' >
          <div className='w-[460px] h-[620px] bg-blue-400 flex flex-col items-center'>
            <div className='w-[400px] flex flex-row justify-around items-center g-4'>
              <img src={login} className='w-[80px] rounded-full' />
              <div>
                <h3>{user?.name}</h3>
                <p>{user?.email}</p>
              </div>
            </div>
          <div className='flex flex-col items-start m-16 gap-10'>
          <div className='flex justify-around gap-1'>
            <img src={profil} className='w-[20px]' />
            <p>Personal informations</p>
           </div >
           <div className='flex justify-around gap-1'>
           <img src={logoutt} className='w-[20px]' />
           <p>Logout</p>
           </div>
          </div>

          </div>
      <div className='bg-green-700 w-[760px] flex flex-col justify-around items-center'>
        <h3 className='font-poppins font-medium'>Personal informations</h3>
        <div className='h-[220px] flex flex-col gap-4'>
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email address"/>
        <input type="password" placeholder="password"/>

        </div>
      </div>
        </div>
  
        <button
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          logout
        </button>
      </div>
    );
}

export default Profil