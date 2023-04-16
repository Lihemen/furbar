import Link from 'next/link';
import React from 'react';

import pageBanner from '@/assets/slider-01.webp';

export default function Hero() {
  return (
    <section
      className='h-screen w-full object-fill object-center bg-no-repeat flex flex-col items-center justify-center text-center gap-8  '
      id='hero'
      style={{ backgroundImage: `url('${pageBanner.src}')` }}>
      <h1 className='text-4xl lg:text-6xl 2xl:text-[5rem] font-rajdhani'>
        Stylish Kitchen Furniture
      </h1>
      <p className='text-gray-950/80 text-lg lg:text-2xl'>
        Unique Furniture Style Design for Your Family <br /> 30% off all stylish
        kitchen furniture
      </p>
      <Link
        href='products'
        className='bg-brand-yellow text-center p-4 px-8 uppercase text-white transition-colors duration-300 hover:bg-brand-dark-blue'>
        purchase now
      </Link>
    </section>
  );
}
