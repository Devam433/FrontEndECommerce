import React, { useState } from 'react';
import { navItems } from '../constants/index.js';
import Button from './Button.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faSearch, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const cartItems = useSelector(state=>state.cart.cart);
  const navigate = useNavigate();

  function handleMenu(){
    setIsMenuOpen(prev=>!prev);
  }
function handleHamMenu(url){
  setIsMenuOpen(false);
  navigate(url);
}
  return (
    <header className='w-full h-[55px] bg-white flex justify-center fixed top-0 left-0 z-50 shadow-md'>
      <div className='flex w-[97%] h-full bg-white items-center justify-between sm:justify-center gap-3'>
        <div className='sm:hidden flex justify-center items-center w-[50px] h-[45px] bg-slate-800 rounded-[50px]' onClick={handleMenu}>{/* ham menu */}
            <FontAwesomeIcon icon={isMenuOpen ? faTimes: faBars } size='lg' color='white'/>
            
        </div>
        <section className='hidden sm:flex  w-[40%] sm:w-[30%] md:w-[19%] gap-3 h-full items-center'>
          <div className='flex items-center'>{/* logo */}
            <p className='text-4xl font-extrabold text-heading-bold-black' onClick={()=>navigate('/')}>SHOP.CO</p>
          </div>
        </section>
        
        <nav className='hidden sm:flex h-[70%] items-center gap-2 text-lg text-navItem'>
          {
            navItems.map(item => (
              <Button key={item.id} href={item.url} className='px-2 py-1 bg-white'>{item.value}</Button>
            ))
          }
        </nav>

        <section className='flex w-full sm:w-[60%] md:w-[62%] gap-3 h-full items-center'>
          <div className='flex w-[100%] sm:w-[95%] h-full items-center justify-between'>
            <div className='flex w-full rounded-[50px] border border-gray-300 items-center h-[70%] px-3 gap-1 bg-[#f1f0f1]'>
              <FontAwesomeIcon icon={faSearch} size='lg' className='text-gray-400'/>
              <input
                type="text"
                placeholder="Search for products..."
                className='w-full border-none focus:outline-none indent-1 text-lg bg-[#f1f0f1]'
              />
            </div>
          </div>
          
          <div className='flex h-[70%] items-center gap-3'>
            <div className='absolute top-4'>
              <button className='' onClick={()=>navigate('/cart')}><FontAwesomeIcon icon={faCartShopping} size='lg' className='hover:cursor-pointer hover:text-gray-500 transition-colors'/> </button>
              { 
              cartItems.length 
              ?
                <div className=' flex justify-center items-center relative left-[15px] bottom-[40px] w-[16px] h-[18px] rounded-full bg-red-600 text-white'><p className=''>{cartItems.length}</p></div>
              : ''
              }  
            </div>
            
            <div className='ml-[42px]'><button><FontAwesomeIcon icon={faUser} size='lg' className='hover:cursor-pointer hover:text-gray-500 transition-colors'/></button></div>
            
          </div>
        </section>
      </div>
      {
            isMenuOpen ?
            <menu className=' absolute top-[50px] border border-gray-400 bg-[#929397f7] rounded-lg flex justify-center w-[95%] px-[30px]'>
                <nav className='flex flex-col items-center gap-2 text-lg text-navItem p-2 w-full'>
                {
                  navItems.map(item => (
                    <Button key={item.id} className='px-2 py-1 text-white text-lg w-full hover:bg-gray-300 transition-colors hover:text-black' onClick={()=>handleHamMenu(item.url)}>{item.value}</Button>
                  ))
                }
                </nav>
            </menu>
            :
            ''
            }
    </header>
  );
}

export default Header;
