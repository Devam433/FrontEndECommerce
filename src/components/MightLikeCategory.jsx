import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsByCategory } from '../features/productsSlice';
import ProductCard from './ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


function MightLikeCategory({categoryName}) {

    const dispatch = useDispatch();
    const categoryProducts = useSelector(state=>state.products.categoryProducts);
    const status = useSelector(state=>state.products) 

    useEffect(()=>{
        dispatch(fetchProductsByCategory(categoryName));
    },[categoryName])
  return (
    <div className='flex flex-col w-[93%] mt-[40px] gap-8 justify-center py-5'> 
        <h1 className='text-heading-bold-black text-4xl font-extrabold text-center'>YOU MIGHT ALSO LIKE</h1>
        {
        status === 'loading' ?
        <div>
            <FontAwesomeIcon icon={faSpinner} spinPulse size='lg' color='red'/>
        </div>
        :
        <section className='flex gap-3 flex-wrap justify-center'>
            {
                categoryProducts?.slice(0,4).map(item=>{
                    return (
                        <ProductCard
                        imageUrl={item.images[0]}
                        id={item.id}
                        title={item.title}
                        rating={item.rating}
                        price={item.price}
                        key={item.id}
                        />
                    )
                })
            }
        </section>
        }
    </div>
  )
}

export default MightLikeCategory