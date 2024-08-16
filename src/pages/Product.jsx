import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../features/productSlice.js';
import ProductCard from '../components/ProductCard.jsx';
import Button from '../components/Button.jsx';
import { addToCart } from '../features/cartSlice.js';
import MightLikeCategory from '../components/MightLikeCategory.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Product() {
    const [loading,setLoading] = useState(true);
    const {id} = useParams();
    const products = useSelector(state=>state.products);
    const Product = useSelector(state=>state.Product.Product);
    const [currentProduct,setCurrentProduct] = useState(null); //current viewing item
   
    const [selectedSize,setSelectedSize] = useState(null);
    const [isSizeSelect,setIsSizeSelect] = useState(false);
    const [error,setError] = useState(null); //error only for select size
    const [quantity,setQuantity] = useState(1);

    const [isAddingToCart,setIsAddingToCart] = useState(false);
    const status = useSelector(state => state.cart.status);

    const dispatch = useDispatch();

    function handleSelectSize(size) {
        if(!isSizeSelect) {
            setSelectedSize(size);
            setIsSizeSelect(true);
            setError(null);
            return;
        }
        setIsSizeSelect(false);
        setSelectedSize(null);
    }

    function handleIncrement(){
        if(quantity<=5) {
            setQuantity(prev=>prev+1);
        }
    }

    function handleDecrement() {
        if(quantity>1) {
            setQuantity(prev=>prev-1);
        }
    }

    function handleAddToCart() {
        if(!selectedSize) {
            setError('Please Select a Size!');
            return;
        }
        // setIsAddingToCart(true);
        dispatch(addToCart({ id: id, quantity: quantity}));
    }

    useEffect(()=>{
        const Product = products?.products.find(product => product.id == id) //gets the required product 
        if(Product) {
            setCurrentProduct(Product);
            setLoading(false);
        } 
        else {
            dispatch(fetchProductById(id));
        }
    },[id])

  return (
    <section className=' flex justify-center flex-col gap-8 items-center'>
    <div className='flex flex-col sm:flex-row w-[93%]  mt-[100px] gap-5 justify-center'> {/**border */}
        <div className='w-[320px] h[370px] sm:w-[400px] sm:h-[450px] bg-product-card rounded-3xl flex justify-center self-center'>
            <img src={currentProduct?.images || Product?.images} alt="" className='h-[100%]' />
        </div>
        <div className='w-[100%] sm:w-[45%] md:w-[60%] flex flex-col gap-7 pt-5 pb-5'>
            <div className='flex flex-col list-none gap-3 border-b-[1.5px] border-[#DFDFDF] pb-3'>
                <li className='text-heading-bold-black font-extrabold  text-[2rem] leading-[1.04]' >{currentProduct?.title || Product?.title}</li>
                <li className=' text-gray-600 font-bold text-lg'>{currentProduct?.rating || Product?.rating}⭐</li>
                <li className=' text-gray-900 font-bold text-[1.5rem]'>$ {currentProduct?.price || Product?.price}</li>
                <li className='text-paragraph-primary text-[14px] w-full tracking-tight'>{currentProduct?.description || Product?.description}</li>
            </div>
            <div className='flex flex-col border-b-[1.5px] border-[#DFDFDF] pb-3 gap-[5px]'>
                <p className='text-sm text-paragraph-primary'>Choose Size: {error ? <span className='text-red-600'>{error}</span> : ''}</p>
                <div className='flex gap-3'>
                    {
                        ['Small','Medium','Large','Very Large'].map(size=>{
                            return <button className={`text-sm bg-button-black  rounded-[50px] px-2 py-2 ${selectedSize === size &&  isSizeSelect ? 'bg-button-black text-white' : 'bg-gray-200 text-black'}`} onClick={()=>{handleSelectSize(size)}}>{size}</button>
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='w-[36%] flex gap-2 items-center'>
                <button className='bg-gray-400 text-slate-100 rounded-[50px] px-4 py-2' onClick={handleDecrement}>-</button>
                            <span className='text-lg font-bold'>{quantity}</span>
                            <button className='bg-gray-400 text-slate-100 rounded-[50px] px-4 py-2' onClick={handleIncrement}>+</button>
                </div>
                <div className='w-[60%]'>
                    <Button className={`bg-button-black text-slate-100 w-full rounded-[50px] px-2 py-3 ${status==='loading'? 'bg-gray-800 text-gray-200': ''}`} disabled={status === 'loading'} onClick={handleAddToCart}>{status==='loading'?<FontAwesomeIcon icon={faSpinner} spinPulse />:`Add to Cart`}</Button>
                </div>
            </div>
        </div>
    </div>
    {
        currentProduct && <MightLikeCategory categoryName={currentProduct?.category}/>
    }
   
    </section>
  )
}

export default Product