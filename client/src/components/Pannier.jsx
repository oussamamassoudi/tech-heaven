import React from 'react'
import Cartcard from './Cartcard'
import { useSelector } from 'react-redux'

function Pannier() {
  const user = useSelector((state) => state.user.user);
  const commandes=useSelector((state)=>state.commande.commandelist);
  console.log(commandes)
  return (
    <div className='w-full h-[600px] flex flex-col justify-around '>
     <div className='w-full'> <h2 className='text-[22px] font-poppins font-medium'>Your cart</h2></div>

    { commandes?.filter((el)=>el?.iduser==user?._id).map((el)=><Cartcard commande={el}/>) }

      </div>
  )
}

export default Pannier