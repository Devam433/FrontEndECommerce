import React from 'react';
import { navItems } from '../constants/index.js';
import Button from './Button.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPerson, faPersonRifle, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className='w-full h-[55px] bg-white flex justify-center fixed top-0 left-0 z-50 shadow-md'>
      <div className='flex w-[97%] h-full bg-white items-center justify-between sm:justify-center gap-3'>
        <div className='sm:hidden w-[35px] h-[35px] bg-slate-800 rounded-full'></div>{/* ham menu */}
        
        <section className='hidden sm:flex  w-[40%] sm:w-[30%] md:w-[19%] gap-3 h-full items-center'>
          <div className='flex items-center'>{/* logo */}
            <p className='text-4xl font-extrabold text-heading-bold-black'>SHOP.CO</p>
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
            <div><FontAwesomeIcon icon={faCartShopping} size='lg'/></div>
            <div><FontAwesomeIcon icon={faUser} size='lg'/></div>
          </div>
        </section>
      </div>
    </header>
  );
}

export default Header;
