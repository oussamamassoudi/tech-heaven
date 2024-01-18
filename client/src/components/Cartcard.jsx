import React from 'react'
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import garbage from "../assets/garbage.svg"
const Cartcard = ({commande}) => {
  return (
    
        <div className='flex flex-row justify-around'>
        <div className='flex flex-col justify-around items-center gap-4'>
            <p>Products</p>
            <div className='flex flex-row justify-between gap-4'>
            <img className='w-[100px] h-[100px]' src={commande?.imgprod} />
            <div className='items-center'>
                <p>{commande?.nameprod} </p>
                <span>{commande?.price} DT</span>
            </div>
            </div>
        </div>
        <div className='flex flex-col justify-around items-center g-4'>
            <p>Quantity</p>
            <div className='flex justify-around gap-1' >
                <img className='w-[25px] h-[25px]' src={minus} />
                <input className='w-[25px] h-[25px] border-gray-500' type="number" min="1" value="1"/>
                <img  className="w-[25px] h-[25px]" src={plus} />
            </div>
           
        </div>
        <div className='flex flex-col justify-around items-center'>
                <p>Total</p>
                <div className='flex justify-around gap-1 items-center'>
                <input className='w-[40px] h-[25px] border-gray-500' type="number" min="1" value="999"/>
                    <img className='w-[16px] h-[16px]' src={garbage}/>
                </div>
            </div>
        </div>
    
  )
}

export default Cartcard