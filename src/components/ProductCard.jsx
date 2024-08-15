import React from 'react'

function ProductCard({title,rating,price,id,imageUrl}) {
  return (
    <div className='flex flex-col' key={id}>
        <div className='w-[300px] h-[350px] bg-product-card rounded-3xl flex justify-center'>
            <img src={imageUrl} alt="" className='h-[100%]' />
        </div>
        <div className='pt-4 flex flex-col gap-1 list-none'>
            <li className='font-bold text-lg'>{title}</li>
            <li>{rating} ⭐</li>
            <li className='font-bold text-xl'>$ {price}</li>
        </div>
    </div>
  )
}

export default ProductCard