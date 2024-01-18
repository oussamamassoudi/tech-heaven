import React, { useState } from 'react'
import Productcard from './Productcard'
import { useSelector } from 'react-redux'

const Shop = ({ping, setping}) => {
  const [category, setcategory] = useState("phone")
    const products=useSelector((state)=>state.product.productlist);
    console.log(products)
  return (
    <div className='w-full bg-primary flex flex-row justify-around '>
        <div className='w-[300px] h-[420px] flex flex-col justify-around'>
            <h3 className='font-poppins '>Product categories</h3>
            <button className='bg-button w-[110px] h-[32px] backdrop:filter backdrop:blur-md bg-opacity-10 rounded-[12px] ' onClick={()=>setcategory("phone")}>Smart phone</button>
            <button className='bg-button w-[110px] h-[32px] backdrop:filter backdrop:blur-md bg-opacity-10 rounded-[12px] ' onClick={()=>setcategory("laptop")} >Laptop</button>
            <button className='bg-button w-[110px] h-[32px] backdrop:filter backdrop:blur-md bg-opacity-10 rounded-[12px] ' onClick={()=>setcategory("watch")} >Smart Watches</button>
           <button className='bg-button w-[110px] h-[32px] backdrop:filter backdrop:blur-md bg-opacity-10 rounded-[12px] ' onClick={()=>setcategory("accessorie")} >Accessories</button>
           <button className='bg-button w-[110px] h-[32px] backdrop:filter backdrop:blur-md bg-opacity-10 rounded-[12px] ' onClick={()=>setcategory("tablet")} >Tablettes</button>
        </div>
 {    <div className='w-[980px] h-[700px] flex flex-wrap justify-around'>
          {products?.filter((el)=>el.category==category).map((el)=>  <Productcard ping={ping} setping={setping} product={el}/>)}  
      </div>}




    </div>
  )
}

export default Shop