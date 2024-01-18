import React from 'react'
import slaes from"../assets/sales.svg";
import arrow from"../assets/arrow.svg";
const Deals = () => {
  return (
    <div className='w-full flex flex-row justify-around m-20'>
        <div className='flex flex-col justify-around'>
            <h4 className='font-poppins text-[16xl]'>Deals of the mounth</h4>
            <p> Get ready for an exeptional shopping experience with our Deal of the mounth! <br />Every purchase comes with exclusive perks and offers. <br />Don't miss out.</p>
            <button className='bg-button w-[140px] h-[30px] rounded-[12px] text-white flex justify-center '><p>view products</p> </button>
        </div>
        <img className='w-[400px] h-[400px]' src={slaes} alt="Sign In"/>
    </div>
  )
}

export default Deals