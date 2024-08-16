import React, { useEffect, useState } from 'react'
import CartProductCard from '../components/CartProductCard'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/Button';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteCartItem } from '../features/cartSlice';
import { calculateCheckOut } from '../components/Utils';

function Cart() {

  const [checkoutData,setCheckOutData] = useState();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cart);

  function handleDelete(date){
    const filteredCart = cartItems.filter(item=>item.date!==date);
    dispatch(deleteCartItem(filteredCart));
  }

  useEffect(()=>{
    if(cartItems.length!==0) {
      const result = calculateCheckOut(cartItems,5,15); //cartItems,discount,delivery
      setCheckOutData(result);
    }
  },[dispatch,cartItems.length])

  return cartItems.length ? (
    <div className='flex justify-center w-[100]'>
    <section className='flex mt-[100px] flex-col w-[86%]'>
      <h1 className='text-heading-bold-black text-2xl tracking-tight'>YOUR CART</h1>
      <div className='w-full flex flex-col md:flex-row mt-[100px] gap-[15px]'>
        <div className='w-full md:w-[60%] border border-gray-300 rounded-3xl'>
          {
            cartItems.map(item=>{
              return <CartProductCard
                  key={item.id}
                  itemId={item.id}
                  title={item.title}
                  imageUrl={item.thumbnail}
                  price={item.price}
                  quantity={item.quantity}
                  date={item.date}
                  handleDelete={handleDelete}
              />
            })
          }
        </div>
        <div className='w-full md:w-[40%] flex flex-col border border-gray-300 rounded-3xl py-[12px] px-[20px] gap-4 h-[340px]'>{/**order summary */}
            <div className='flex flex-col gap-1 pb-3 border-b border-gray-300'>
              <h1 className='text-heading-bold-black font-bold text-3xl'>Order Summery</h1>
              <div className='flex flex-col gap-1 list-none'>
                <li className='flex justify-between text-gray-400 text-xl font-semibold'><span>Subtotal</span><span>$ {checkoutData?.subtotal}</span></li>
                <li className='flex justify-between text-xl text-gray-400 font-semibold'><span>{`Discount(5%)`}</span><span className=' text-red-400'>-$ {checkoutData?.discountedPrice}</span></li>
                <li className='flex justify-between text-gray-400 text-xl font-semibold'><span>Delivery</span><span>$ 15</span></li>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between list-none'>
                <li className='text-gray-500 font-semmibold text-xl'>Total</li>
                <li className='text-heading-bold-black font-bold text-2xl'>{checkoutData?.total}</li>
              </div>
              <div className='flex flex-col w-full gap-2'>  
                <li className='flex justify-between'>
                  <div className='flex w-[75%] h-full items-center justify-between'>
                    <div className='flex w-full rounded-[50px] border border-gray-300 items-center h-[90%] px-3 gap-1 bg-[#f1f0f1]'>
                    <FontAwesomeIcon icon={faTag} size='lg' className='text-gray-400'/>
                    <input
                      type="text"
                      placeholder="Search for products..."
                      className='w-full border-none focus:outline-none indent-1 text-lg bg-[#f1f0f1]'
                    />
                    </div>
                  </div>
                  <Button className='bg-button-black text-slate-100 w-[20%] rounded-[50px] py-3'>Apply</Button>
                </li>
                <Button className='bg-button-black text-slate-100 w-full rounded-[50px] py-3'>Checkout</Button>
              </div>
            </div>
        </div>
      </div>
    </section>
    </div>
  )
  :
  (
    <div className='flex justify-center w-[100%] h-[50vh]'>
      <section className=' mt-[100px] flex-col w-[86%] flex justify-between'>
        <h1 className='text-heading-bold-black font-extrabold text-4xl tracking-tight '>YOUR CART</h1>
        <div className='flex justify-center items-center'>
          <h1 className=''>YOUR CART IS EMPTY</h1>
        </div>
      </section>
    </div>
  )
}

export default Cart