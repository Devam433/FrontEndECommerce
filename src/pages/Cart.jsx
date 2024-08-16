import React from 'react'
import CartProductCard from '../components/CartProductCard'
import { useSelector } from 'react-redux'
import Button from '../components/Button';

function Cart() {

  const cartItems = useSelector(state => state.cart.cart);
  console.log(cartItems);

  return (
    <section className='flex justify-center mt-[100px] flex-col'>
      <h1 className='text-heading-bold-black text-2xl tracking-tight'>YOUR CART</h1>
      <div className='w-[93%] flex flex-row md:flex-col mt-[100px]'>
        <div className='w-full'>
          {
            cartItems.map(item=>{
              console.log(item);
              return <CartProductCard
              key={item.id}
                  title={item.title}
                  imageUrl={item.thumbnail}
                  price={item.price}
                  quantity={item.quantity}
              />
            })
          }
        </div>
        <div className='w-full flex flex-col'>
            <div className='felx flex-col '>
              <h1>Order Summery</h1>
              <div className='flex flex-col '>
                <li className='flex justify-between'><span>Subtotal</span><span>{5000}</span></li>
                <li className='flex justify-between'><span>Discount</span><span>{4999}</span></li>
                <li className='flex justify-between'><span>Delivery</span><span>{2343}</span></li>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex justify-between'>
                <li>Total</li>
                <li>546</li>
              </div>
              <div className='flex flex-col'>  
                <li className='flex justify-between'>
                  <input type="text" />
                  <Button>Apply</Button>
                </li>
                <Button>Checkout</Button>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Cart