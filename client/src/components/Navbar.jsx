import React, { useState } from 'react'
import logo from "../assets/logo.svg";
import logoutt from "../assets/logout.svg";
import shoppingcart from "../assets/shoppingcart.svg";
import profile from "../assets/profile.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/userslices';





const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggle, settoggle] = useState(false);
  const user = useSelector((state) => state.user.user);
    return (
      <nav className=' w-full bg-primary flex py-6 px-16 justify-between items-center '>
      <img src={logo} alt="" />
      <div className='sm:flex hidden justify-around w-[400px] items-center'>
      <ul className='list-none flex   justify-around  gap-20'>
        <li className='font-poppins font-normal cursor-pointer text-[16px] '><Link to="/">Home</Link></li>
        <li className='font-poppins font-normal cursor-pointer text-[16px]'><Link to="/shop">Shop</Link></li>
       
      </ul>
{ !user?     <button className='bg-button w-[100px] h-[30px] text-white rounded-[6px]'><Link to="/login">Login</Link></button>:<div className='w-[86px] flex flex-row justify-between items-center' ><Link to="/profil"><img className='w-[22px] h-[22px]' src={profile} /></Link>  <button
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
      <img className='w-[22px] h-[22px]' src={logoutt} /> 
        </button><Link to="/pannier"><img className='w-[22px] h-[22px]' src={shoppingcart} /></Link></div>}
      </div>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
      <img src={ toggle ? close : menu } alt="" className=" w-[28px] h-[28px] object-contain" onClick={()=> settoggle((prev)=> !prev)} />
      <div className={`${toggle ? 'flex flex-col' : 'hidden'} p-6 bg-secondary absolute top-20 right-0 mx-4 my-2 min-w-[140px]  rounded-xl sidebar`}>
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
          <li className='font-poppins font-normal cursor-pointer text-[16px]'>
            Homeeee
          </li>
          <li className='font-poppins font-normal cursor-pointer text-[16px]'>
            Shop
          </li>
        
        </ul>
        <button className='bg-button w-[100px] h-[30px] text-white rounded-[6px]'>Login</button>
      </div>


      </div>
      </nav>
    )
  }

export default Navbar