import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductCard({title,rating,price,id,imageUrl,description}) {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col hover:cursor-pointer' key={id} onClick={()=>{navigate(`/product/${id}`)}}>
        <div className='w-[300px] h-[350px] bg-product-card rounded-3xl flex justify-center'>
            <img src={imageUrl} alt="" className='h-[100%]' />
        </div>
        <div className='pt-4 flex flex-col  list-none'>
            <li className='font-bold text-lg'>{title}</li>
            <li>{rating} ⭐</li>
            <li className='font-bold text-xl'>$ {price}</li>
        </div>
    </div>
  )
}

export default ProductCard