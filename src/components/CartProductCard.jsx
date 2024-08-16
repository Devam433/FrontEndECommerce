import { faDeleteLeft, faRemove, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function CartProductCard({imageUrl,title,price,quantity,itemId,handleDelete='',date}) {

    

  return (
    <div className='w-[97%] h-[150px] md:h-[200px] flex flex-row justify-center m-auto gap-2 border-b border-b-gray-400'>
        <div className='w-[27%] flex justify-start h-[90%] self-center bg-product-card rounded-md'>
            <img src={imageUrl} alt="" className='' />
        </div>
        <div className='flex w-[71%] justify-between py-[10px] h-full'>
            <div className='flex flex-col list-none'>
                <li className='text-heading-bold-black text-lg'>{title}</li>
                {/* <li className=''>{quantity}</li> */}
                <li className='font-bold text-xl'>$ {price}</li>

            </div>
            <div className=' flex flex-col justify-between'>
             <FontAwesomeIcon icon={faTrash} className='text-red-400 hover:cursor-pointer hover:text-red-300 transition-colors' onClick={()=>{handleDelete(date)}}/>
                <div className='w-[36%] flex gap-2 items-center'>
                <button className='bg-gray-400 text-slate-100 rounded-[50px] px-4 py-2' >-</button>
                            <span className='text-lg font-bold'>{quantity}</span>
                            <button className='bg-gray-400 text-slate-100 rounded-[50px] px-4 py-2' >+</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartProductCard