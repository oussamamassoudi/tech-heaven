import React from 'react'
import iphonepng from "../assets/iphonepng.png"

const Hero = () => {
  return (
    < >
    <section className='w-[92%] h-[500px]  bg-secondary flex flex-row justify-around my-20  py-10'>
        <div className='flex flex-col justify-around p-10 items-center'>
            <p className='text-[60px] font-poppins font-semibold'>Unleashe Innovation <br /> in Every Byte</p>
            <button className='w-[140px] h-[50px] bg-button rounded-[10px] text-white text-[16px]'>Shop Now</button>
        </div >
            <img className='' src={iphonepng} alt="" />
    </section>
    </>
  )
}

export default Hero