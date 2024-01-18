import React from 'react'
import Hero from './Hero'
import Categories from './Categories'
import Deals from './Deals'
import Features from './Features'
import Productdetails from './Productdetails'

const Home = () => {
  return (
    <>
    <div className='w-full flex justify-center'>
        
        <Hero/>
    </div>
    <div className='w-full flex justify-center'>
        <Categories/>
    </div>
    <div className='w-full flex justify-center'>
        <Deals/>
    </div>
    <div className='w-full flex justify-center'>
      <Features/>
    </div>
     <div className='w-full flex justify-center'>

    </div> 
    </>
  )
}

export default Home