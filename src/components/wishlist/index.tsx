import Image from 'next/image';
import React from 'react';
import { BsTrash3 } from 'react-icons/bs';

import wishlistImg from '@/assets/cart-1.webp';
import { Drawer } from '@mantine/core';

export default function Wishlist({ opened, close }: AppearanceController) {
  return (
    <Drawer
      onClose={() => close()}
      opened={opened}
      position='right'
      overlayProps={{ opacity: 0.5, blur: 4 }}
      title='Wishlist'
      size='md'
      classNames={{ title: 'text-3xl', close: 'text-2xl' }}>
      <ul className='space-y-8 py-6'>
        <li className='flex gap-8'>
          <Image src={wishlistImg} alt='Wishlist image' className='h-28 w-28' />
          <div className='flex flex-col gap-4'>
            <h6 className='font-normal '>This is the Product name</h6>
            <p className='line-clamp-3 text-sm text-justify text-brand-gray'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              debitis?{' '}
            </p>
          </div>

          <div className='flex items-center justify-center pl-4'>
            <button className=' hover:text-red-400 w-max h-max transition duration-150 hover:bg-black/10 rounded p-1 active:scale-[.8]'>
              <BsTrash3 size={18} />
            </button>
          </div>
        </li>
        <li className='flex gap-8'>
          <Image src={wishlistImg} alt='Wishlist image' className='h-28 w-28' />
          <div className='flex flex-col gap-4'>
            <h6 className='font-normal '>This is the Product name</h6>
            <p className='line-clamp-3 text-sm text-justify text-brand-gray'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              debitis?{' '}
            </p>
          </div>

          <div className='flex items-center justify-center pl-4'>
            <button className=' hover:text-red-400 w-max h-max transition duration-150 hover:bg-black/10 rounded p-1 active:scale-[.8]'>
              <BsTrash3 size={18} />
            </button>
          </div>
        </li>
        <li className='flex gap-8'>
          <Image src={wishlistImg} alt='Wishlist image' className='h-28 w-28' />
          <div className='flex flex-col gap-4'>
            <h6 className='font-normal '>This is the Product name</h6>
            <p className='line-clamp-3 text-sm text-justify text-brand-gray'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              debitis?{' '}
            </p>
          </div>

          <div className='flex items-center justify-center pl-4'>
            <button className=' hover:text-red-400 w-max h-max transition duration-150 hover:bg-black/10 rounded p-1 active:scale-[.8]'>
              <BsTrash3 size={18} />
            </button>
          </div>
        </li>
      </ul>
      <button className='bg-brand-yellow text-white uppercase w-full text-center p-4 sticky bottom-4 hover:bg-brand-dark-blue transition-all duration-150 ease-linear active:scale-95 '>
        Clear Wishlist
      </button>
    </Drawer>
  );
}
