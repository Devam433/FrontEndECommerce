import React from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux';

function OurVault() {
  const products = useSelector(state=>state.products.products);
  return (
    <section className='w-[97%] flex flex-col items-center gap-5 mt-7'>
        <div className=''>
            <h1 className='text-heading-bold-black font-extrabold text-[3rem]'>Our Vault</h1>
        </div>
        <div className='flex flex-wrap gap-5 justify-center'>
            {
                products?.slice(0,8).map((item)=>(
                    <ProductCard
                    imageUrl={item.images[0]}
                    id={item.id}
                    title={item.title}
                    rating={item.rating}
                    price={item.price}
                    key={item.id}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default OurVault