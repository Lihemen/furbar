import React from 'react';
import { FiEdit } from 'react-icons/fi';

export default function Address() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-16 '>
      <div className='flex flex-col gap-6'>
        <h3 className='text-2xl font-light !font-rajdhani'>Billing Address</h3>

        <p className='leading-8'>Hemense Lan</p>
        <p>
          823 Ralph Shodeinde Street, Central Business Distric, Abuja, Nigeria,
          900102
        </p>
        <p>+234 701 105 6442</p>

        <button className='bg-brand-yellow rounded text-white flex items-center gap-2 justify-center text-center uppercase py-4 hover:bg-brand-dark-blue active:scale-95 duration-150 ease-in-out'>
          <FiEdit />
          Edit Address
        </button>
      </div>
      <div className='flex flex-col gap-6'>
        <h3 className='text-2xl font-light !font-rajdhani'>Shipping Address</h3>

        <p className='leading-8'>Hemense Lan</p>
        <p>
          823 Ralph Shodeinde Street, Central Business Distric, Abuja, Nigeria,
          900102
        </p>

        <p>+234 701 105 6442</p>

        <button className='bg-brand-yellow rounded text-white flex items-center gap-2 justify-center text-center uppercase py-4 hover:bg-brand-dark-blue active:scale-95 duration-150 ease-in-out'>
          <FiEdit />
          Edit Address
        </button>
      </div>
    </div>
  );
}
