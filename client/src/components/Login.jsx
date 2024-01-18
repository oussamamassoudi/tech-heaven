import React, { useState } from 'react'
import login2 from "../assets/login2.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { userRegister, userlogin } from '../redux/userslices';
import { useDispatch } from 'react-redux';
const Login = () => {
    const [login, setlogin] = useState({
        email: "",
        password: "",
      });
      const navigate = useNavigate();
      const dispatch = useDispatch();
  return (
    <div className=' flex flex-row justify-around items-center'>
    <img  className="w-full h-screen sm:w-[700px] " src={login2} alt="" />
    <div className='flex flex-col justify-around items-center w-[300px] h-[400px] bg-cyan-600 backdrop:filter backdrop:blur-md bg-opacity-10 rounded-[12px]' >
        <h1>login</h1>
        <form action="" className='flex flex-col justify-between h-[100px]'>
            <div>
                <input type="email" placeholder='Email adress'    onChange={(e) => setlogin({ ...login, email: e.target.value })} />
                
            </div>
            <input type="password" placeholder='Password'  onChange={(e) => setlogin({ ...login, password: e.target.value })} />
            
        </form>
        {/* <button className='bg-button text-white w-[120px] rounded-sm flex justify-center'  onClick={()=>{dispatch(userlogin(login))}} ><Link to="/">login</Link></button> */}
        <button
            className="bg-button w-[100px] h-[30px] text-white rounded-[6px]"
            onClick={() => {
              setTimeout(() => {
                dispatch(userlogin(login));
                navigate("/profil");
              }, 1000);
            }}
          >
            login
          </button>
          <button   onClick={() => navigate("/register") } className='bg-button w-[100px] h-[30px] text-white rounded-[6px]'>sign up</button>
    </div>
</div>
  )
}

export default Login