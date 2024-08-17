import React from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function OurVault() {
  const products = useSelector(state=>state.products.products);
  const status = useSelector(state=>state.products)
  return (
    <section className='w-[97%] flex flex-col items-center gap-10 mt-24'>
        <div className=''>
            <h1 className='text-heading-bold-black font-extrabold text-[3rem]'>Our Vault</h1>
        </div>
        {
        status === 'loading' ?
        <div>
            <FontAwesomeIcon icon={faSpinner} spinPulse size='lg' className='text-black text-[400px]'/>
        </div>
        :
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
        }
    </section>
  )
}

export default OurVault