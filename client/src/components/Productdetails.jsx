import React from 'react'
import login from "../assets/login.svg"
import { addcommande } from '../redux/commandeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const Productdetails = ({show, setshow, product, ping, setping}) => {
    const user = useSelector((state) => state.user.user);
    const dispatch=useDispatch()
const [newcommande, setnewcommande] = useState({
    iduser:user?._id,
    nameuser:user?.name+""+user?.lastname,
    nameprod:product?.namePro,
    imgprod:product?.imgPro,
    qte:1,
    price:product?.price,
    date:new Date(),
    status:"non-payé"
})
  // if(!visible) return null;
  return (
    <>


<div className='fixed inset-0 bg-button bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
  
<div class=" flex flex-row justify-around items-center overflow-hidden bg-secondary w-[800px] h-[420px] rounded-[12px]">
    
        <div class=" w-[57%] flex flex-col justify-around gap-2 ">
            <h4 class="flex flex-col font-black  font-poppins">
            {product?.namePro}
            </h4>
            <p class="w-[100%] text-justify text-[11px]">
            {product?.description}DT
            </p>
            <span>{product?.price}DT</span>
            <div class="flex mt-8">
                <button onClick={()=>{dispatch(addcommande(newcommande));setping(!ping)}} class="px-4 py-2 mr-4 text-white uppercase bg-button border-2 border-transparent rounded-lg text-md hover:bg-pink-400">
                    add to cart
                </button>
                <button  onClick={()=>setshow(false)} class="px-4 py-2 text-button uppercase bg-transparent border-2 border-button rounded-lg  hover:bg-pink-500 hover:text-button text-md">
                    Close
                </button>
            </div>
        </div>
        <div class="">
            <img src={product?.imgPro} class="w-[300px] h-[300px] rounded-[12px]"/>
        </div>
   
</div>
</div>
   </>

  )
}

export default Productdetails