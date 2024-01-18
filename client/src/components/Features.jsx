import React from 'react'
import flexiblepayment from "../assets/flexiblepayment.svg"
import freeshipping from "../assets/freeshipping.svg"
import onlinesupport from "../assets/onlinesupport.svg"
import secureddeals from "../assets/secureddeals.svg"
const Features = () => {
  return (
    <div className=' w-full flex flex-row justify-around m-20'>
        <div className='flex flex-col justify-between '>
        <img className='w-[50px] h-[50px]' src={freeshipping} alt="" />
        <h3 className='font-poppins font-semibold text-left'>Free Shipping</h3>
        <p className='font-poppins '>Free shipping for orders over 350$</p>

    </div>
    <div className='flex flex-col justify-around'>
        <img className='w-[50px] h-[50px]' src={secureddeals} alt="" />
        <h3 className='font-poppins font-semibold text-left'>100% Secured</h3>
        <p>Within 30 days for an exchange</p>

    </div>
    <div className='flex flex-col justify-around'>
        <img className='w-[50px] h-[50px]' src={onlinesupport} alt="" />
        <h3 className='font-poppins font-semibold text-left'>Online Support</h3>
        <p>24 hours a day, 7 days a week</p>

    </div>
    <div className='flex flex-col justify-around'>
        <img className='w-[50px] h-[50px]' src={flexiblepayment} alt="" />
        <h3 className='font-poppins font-semibold text-left'>Flexible Payment</h3>
        <p>Pay with multiple credit cards</p>

    </div>
    </div>
  )
}

export default Features