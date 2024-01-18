import React from 'react'
import login from  "../assets/login.svg"
import tabletpng from "../assets/tabletpng.png"
const Categoriescard = () => {
  return (
    <div className='bg-secondary w-[340px] h-[340px] flex flex-col justify-around items-center  rounded[20px]'>
        <img className='w-[180px] h-[180px]' src={tabletpng} alt="" />
        <p className='bg-primary w-[300px] h-[60px] text-[18px]  flex justify-center items-center font-poppins rounded[16px]'>categories</p>
    </div>
  )
}

export default Categoriescard