
import React, { useState } from 'react'
import login3 from "../assets/login3.jpg"
import Productdetails from './Productdetails'

const Productcard = ({product, ping, setping}) => {
  const [show, setshow] = useState(false)
  
  return (
    <div className='bg-secondary w-[300px] h-[390px] rounded-[12px] flex flex-col justify-around m-2'>
        <img className='w-[300px] h-[300px] rounded-[12px] ' src={product?.imgPro} alt="" />
        <div className='flex flex-col justify-around items-center'>
        <h4 className='font-poppins'>{product?.namePro}</h4>
        <div className=' w-[290px] flex flex-row justify-around '>
        <p>{product?.price}DT </p>
        <button className='w-[90px] h-[24px] bg-button text-white rounded-md flex justify-center items-center' onClick={()=>setshow(!show)}>See more</button>

        </div>
    { show?   <Productdetails ping={ping} setping={setping} show={show} setshow={setshow} product={product}/>:null}
        </div>
    </div>
  
  )
}

export default Productcard