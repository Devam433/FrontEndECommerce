import { faRemove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function CartProductCard({imageUrl,title,price,quantity}) {
  return (
    <div className='w-full h-[200px]'>
        <div className='w-[15%] flex justify-center'>
            <img src={imageUrl} alt="" className='h-full' />
        </div>
        <div>
            <div>
                <li>{title}</li>
                <li>{quantity}</li>
                <li>{price}</li>
            </div>
            <div className='flex flex-col justify-between'>
                <FontAwesomeIcon icon={faRemove}/>
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