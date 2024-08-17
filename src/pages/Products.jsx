import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { fetchProductsByFilter, fetchProducts, setCurrentPage } from '../features/productsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Products() {
  
  const dispatch = useDispatch();
  const [sortOrder,setSortOrder] = useState('asc');
  const {products,currentPage,totalPages,status} = useSelector(state=>state.products);

  const displayedProducts = products.slice((currentPage - 1) * 9, currentPage * 9);
  
  function handleNext(){
    if ((currentPage*9)>(totalPages-1)) {
      dispatch(fetchProducts(currentPage+1));
    }
    dispatch(setCurrentPage(currentPage+1));
  }
  function handlePrev(){
    if(currentPage>1){
     dispatch(setCurrentPage(currentPage-1));
    }
  }

  function handleSelectChange(event) {
    setSortOrder(event.target.value);
  }
  function handleApplyFilter(e){
    e.preventDefault();
    const selectedsortby = Array.from( //Array.from() used to create converts a NodeList into an actual array.
      document.querySelectorAll('input[type=checkbox]:checked') //document.querySelectorAll() returns NodeList
    ).map(checkbox=>checkbox.value);
    dispatch(fetchProductsByFilter({ sortBy: selectedsortby, order: sortOrder })) 
  }


  return (
    <div className='flex justify-center mt-[100px]'>
      <main className={`w-[94%] flex flex-col md:flex-row`}>
        <section className=' w-full md:w-[300px] h-fit border border-gray-400 rounded-3xl p-4'> {/** Flter */}
          <div className=' h-full w-full flex flex-col'>
            <h1 className=' hidden md:block text-heading-bold-black text-3xl font-bold pb-3 border-b border-b-gray-300'>Filter</h1>
            <div className='flex flex-col'> {/**Sort By */}
                <form onSubmit={handleApplyFilter} className='flex flex-col gap-1 md:gap-5'>
                  <div className='flex flex-row md:flex-col gap-2'>
                    <h1 className='text-heading-bold-black text-xl font-semibold border-b border-b-gray-200'>Sort By</h1>
                    <div className='flex flex-row gap-2 md:gap-0 md:flex-col ml-1 mt-1 md:mt-0'>
                      <label >
                        <input type="checkbox" value="title" className='scale-150'/> Title
                      </label>
                      <label>
                        <input type="checkbox" value="rating" className='scale-150'/> Rating
                      </label>
                      <label >
                        <input type="checkbox" value="price" className='scale-150'/> Price
                      </label>
                    </div>
                  </div>
                  {/* <button type='submit' className='px-4 py-2 rounded-lg bg-button-black text-white text-base'>Submit</button> */}

                  <Button type={'submit'} className={`bg-button-black text-slate-100 w-full rounded-[50px] px-2 py-3 ${status==='loading'? 'bg-gray-800 text-gray-200': ''}`} disabled={status === 'loading'} >{status==='loading'?<FontAwesomeIcon icon={faSpinner} spinPulse />:`Submit`}</Button>
                </form>
            </div>
          </div>
        </section >
        <section className='flex flex-col gap-5 p-4 w-full md:w-[79%]'> {/** Display Products */}
          <div className='flex justify-between px-4'>{/**Heading And Sort */}
            <h1 className='text-heading-bold-black text-3xl font-bold'>All PRODUCTS</h1> {/**Category Type */}
            <div> {/**SortBY DropDown */}
                <select name="select" id="select1" value={sortOrder} onChange={handleSelectChange}>
                  <option value="asc">ASC</option>
                  <option value="desc">DESC</option>
                </select>
            </div>
          </div> 
          <div className='flex flex-wrap gap-7 justify-center'>{/**Products Display */}
            {
              displayedProducts?.map((item)=>(
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
          <div className='flex items-center justify-center gap-5'>{/**Pgination */}
            <Button className={` ${currentPage==1 ? `bg-gray-300 text-gray-400` : 'bg-gray-600'}`} disabled={currentPage==1} onClick={handlePrev}>Prev</Button>
            <p className=''>{currentPage}</p>
            <Button className='bg-gray-600' onClick={handleNext}>Next</Button>
          </div> 
        </section>
      </main>
    </div>
  )
}

export default Products