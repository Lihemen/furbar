import Link from 'next/link';
import React from 'react';

import { Drawer } from '@mantine/core';

export default function MobileNav({ opened, close }: AppearanceController) {
  return (
    <Drawer
      onClose={() => close()}
      opened={opened}
      position='right'
      overlayProps={{ opacity: 0.5, blur: 4 }}
      size='xs'>
      <ul className='items-start uppercase text-sm font-semibold tracking-wider flex flex-col hover:child:bg-brand-yellow/20 child:p-4 child:flex w-full child:w-full border-b'>
        <Link onClick={() => close()} href='/'>
          Home
        </Link>
        <Link onClick={() => close()} href='/about-us'>
          About
        </Link>
        <Link onClick={() => close()} href='/products'>
          Shop
        </Link>
        <Link onClick={() => close()} href='/blog'>
          Blog
        </Link>
        <Link onClick={() => close()} href='/cart'>
          My Cart
        </Link>
        <Link onClick={() => close()} href='/contact-us'>
          Contact
        </Link>
      </ul>
      <div className='grid grid-cols-2 gap-2 child:p-4 child:border child:border-brand-gray/50 pt-10 text-center uppercase hover:child:bg-brand-yellow/20 '>
        <Link onClick={() => close()} href='/auth/login'>
          Sign In
        </Link>
        <Link onClick={() => close()} href='/auth/create-account'>
          Sign Up
        </Link>
      </div>
    </Drawer>
  );
}
