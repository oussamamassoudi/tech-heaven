import React from 'react'
import Categoriescard from './Categoriescard'

const Categories = () => {
  return (
    <div className='flex flex-col p-12 items-center'>
      <div className='w-[1080px]  items-start'>
        <p className='font-poppins text-[16xl] mb-15'>Shop by categories</p>
        </div>
        <div className='flex flex-wrap justify-center p-10 gap-10'>
            <Categoriescard/>
            <Categoriescard/>
            <Categoriescard/>
            <Categoriescard/>
            <Categoriescard/>
            <Categoriescard/>
            
        </div>
    </div>
  )
}

export default Categories