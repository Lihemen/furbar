'use client';

import { SearchNormal1 } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { RiHeartLine, RiShoppingBag2Line } from 'react-icons/ri';

import banner1 from '@/assets/banner-05.webp';
import banner2 from '@/assets/banner-06.webp';
import productImg1 from '@/assets/product-img/product-details-1.webp';
import productImg2 from '@/assets/product-img/product-details-2.webp';
import productImg3 from '@/assets/product-img/product-details-3.webp';
import productImg4 from '@/assets/product-img/product-details-4.webp';
import productImg5 from '@/assets/product-img/product-details-5.webp';

export default function NewArrivals() {
  const [selection, setSelection] = useState('all');
  return (
    <div className='space-y-8 pb-32 section-padding'>
      <h3 className='text-center font-semibold text-3xl tracking-widest uppercase'>
        New Arrivals
      </h3>
      <ul className='text-brand-gray text-sm uppercase child:cursor-pointer flex gap-8 flex-wrap items-center text-center justify-center hover:child:text-brand-yellow '>
        <li
          onClick={() => setSelection('all')}
          className={
            selection === 'all' ? 'text-brand-yellow font-semibold' : undefined
          }>
          all
        </li>
        <li
          onClick={() => setSelection('trending')}
          className={
            selection === 'trending'
              ? 'text-brand-yellow font-semibold'
              : undefined
          }>
          trending
        </li>
        <li
          onClick={() => setSelection('discount')}
          className={
            selection === 'discount'
              ? 'text-brand-yellow font-semibold'
              : undefined
          }>
          discount
        </li>
        <li
          onClick={() => setSelection('top-sales')}
          className={
            selection === 'top-sales'
              ? 'text-brand-yellow font-semibold'
              : undefined
          }>
          top sales
        </li>
        <li
          onClick={() => setSelection('best-rated')}
          className={
            selection === 'best-rated'
              ? 'text-brand-yellow font-semibold'
              : undefined
          }>
          best rated
        </li>
      </ul>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 text-center place-items-center'>
        <div className='space-y-4'>
          <div className='relative group overflow-y-hidden'>
            <Image className='bg-[#f8f8f8]' src={productImg1} alt='Product' />
            <ul className='bg-slate-950/70 flex items-center w-max absolute top-full left-1/2 -translate-x-1/2 text-white/80 child:p-2 child:cursor-pointer hover:child:bg-brand-yellow group-hover:overflow-y-visible translate-y-full group-hover:-translate-y-full transition-all duration-300'>
              <li>
                <SearchNormal1 size={26} />
              </li>
              <li>
                <RiShoppingBag2Line size={26} />
              </li>
              <li>
                <RiHeartLine size={26} />
              </li>
            </ul>
          </div>
          <h3 className='text-brand-gray'>High Quality Vase bottle </h3>
          <p className='text-brand-yellow'>&#x20A6;19,999.99</p>
        </div>
        <div className='space-y-4'>
          <div className='relative group overflow-y-hidden'>
            <Image className='bg-[#f8f8f8]' src={productImg2} alt='Product' />
            <ul className='bg-slate-950/70 flex items-center w-max absolute top-full left-1/2 -translate-x-1/2 text-white/80 child:p-2 child:cursor-pointer hover:child:bg-brand-yellow group-hover:overflow-y-visible translate-y-full group-hover:-translate-y-full transition-all duration-300'>
              <li>
                <SearchNormal1 size={26} />
              </li>
              <li>
                <RiShoppingBag2Line size={26} />
              </li>
              <li>
                <RiHeartLine size={26} />
              </li>
            </ul>
          </div>
          <h3 className='text-brand-gray'>High Quality Vase bottle </h3>
          <p className='text-brand-yellow'>&#x20A6;19,999.99</p>
        </div>
        <div className='space-y-4'>
          <div className='relative group overflow-y-hidden'>
            <Image className='bg-[#f8f8f8]' src={productImg3} alt='Product' />
            <ul className='bg-slate-950/70 flex items-center w-max absolute top-full left-1/2 -translate-x-1/2 text-white/80 child:p-2 child:cursor-pointer hover:child:bg-brand-yellow group-hover:overflow-y-visible translate-y-full group-hover:-translate-y-full transition-all duration-300'>
              <li>
                <SearchNormal1 size={26} />
              </li>
              <li>
                <RiShoppingBag2Line size={26} />
              </li>
              <li>
                <RiHeartLine size={26} />
              </li>
            </ul>
          </div>
          <h3 className='text-brand-gray'>High Quality Vase bottle </h3>
          <p className='text-brand-yellow'>&#x20A6;19,999.99</p>
        </div>
        <div className='space-y-4'>
          <div className='relative group overflow-y-hidden'>
            <Image className='bg-[#f8f8f8]' src={productImg4} alt='Product' />
            <ul className='bg-slate-950/70 flex items-center w-max absolute top-full left-1/2 -translate-x-1/2 text-white/80 child:p-2 child:cursor-pointer hover:child:bg-brand-yellow group-hover:overflow-y-visible translate-y-full group-hover:-translate-y-full transition-all duration-300'>
              <li>
                <SearchNormal1 size={26} />
              </li>
              <li>
                <RiShoppingBag2Line size={26} />
              </li>
              <li>
                <RiHeartLine size={26} />
              </li>
            </ul>
          </div>
          <h3 className='text-brand-gray'>High Quality Vase bottle </h3>
          <p className='text-brand-yellow'>&#x20A6;19,999.99</p>
        </div>
        <div className='space-y-4'>
          <div className='relative group overflow-y-hidden'>
            <Image className='bg-[#f8f8f8]' src={productImg5} alt='Product' />
            <ul className='bg-slate-950/70 flex items-center w-max absolute top-full left-1/2 -translate-x-1/2 text-white/80 child:p-2 child:cursor-pointer hover:child:bg-brand-yellow group-hover:overflow-y-visible translate-y-full group-hover:-translate-y-full transition-all duration-300'>
              <li>
                <SearchNormal1 size={26} />
              </li>
              <li>
                <RiShoppingBag2Line size={26} />
              </li>
              <li>
                <RiHeartLine size={26} />
              </li>
            </ul>
          </div>
          <h3 className='text-brand-gray'>High Quality Vase bottle </h3>
          <p className='text-brand-yellow'>&#x20A6;19,999.99</p>
        </div>
        <div className='space-y-4'>
          <div className='relative group overflow-y-hidden'>
            <Image className='bg-[#f8f8f8]' src={productImg1} alt='Product' />
            <ul className='bg-slate-950/70 flex items-center w-max absolute top-full left-1/2 -translate-x-1/2 text-white/80 child:p-2 child:cursor-pointer hover:child:bg-brand-yellow group-hover:overflow-y-visible translate-y-full group-hover:-translate-y-full transition-all duration-300'>
              <li>
                <SearchNormal1 size={26} />
              </li>
              <li>
                <RiShoppingBag2Line size={26} />
              </li>
              <li>
                <RiHeartLine size={26} />
              </li>
            </ul>
          </div>
          <h3 className='text-brand-gray'>High Quality Vase bottle </h3>
          <p className='text-brand-yellow'>&#x20A6;19,999.99</p>
        </div>
        <div className='space-y-4'>
          <div className='relative group overflow-y-hidden'>
            <Image className='bg-[#f8f8f8]' src={productImg2} alt='Product' />
            <ul className='bg-slate-950/70 flex items-center w-max absolute top-full left-1/2 -translate-x-1/2 text-white/80 child:p-2 child:cursor-pointer hover:child:bg-brand-yellow group-hover:overflow-y-visible translate-y-full group-hover:-translate-y-full transition-all duration-300'>
              <li>
                <SearchNormal1 size={26} />
              </li>
              <li>
                <RiShoppingBag2Line size={26} />
              </li>
              <li>
                <RiHeartLine size={26} />
              </li>
            </ul>
          </div>
          <h3 className='text-brand-gray'>High Quality Vase bottle </h3>
          <p className='text-brand-yellow'>&#x20A6;19,999.99</p>
        </div>
        <div className='space-y-4'>
          <div className='relative group overflow-y-hidden'>
            <Image className='bg-[#f8f8f8]' src={productImg4} alt='Product' />
            <ul className='bg-slate-950/70 flex items-center w-max absolute top-full left-1/2 -translate-x-1/2 text-white/80 child:p-2 child:cursor-pointer hover:child:bg-brand-yellow group-hover:overflow-y-visible translate-y-full group-hover:-translate-y-full transition-all duration-300'>
              <li>
                <SearchNormal1 size={26} />
              </li>
              <li>
                <RiShoppingBag2Line size={26} />
              </li>
              <li>
                <RiHeartLine size={26} />
              </li>
            </ul>
          </div>
          <h3 className='text-brand-gray'>High Quality Vase bottle </h3>
          <p className='text-brand-yellow'>&#x20A6;19,999.99</p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 child:min-h-[18rem] gap-10 child:bg-no-repeat child:bg-center pt-16 child:flex child:justify-center child:flex-col child:gap-6 child:bg-cover child:px-6'>
        <div style={{ backgroundImage: `url('${banner1.src}')` }}>
          <h3 className='text-xl font-thin font-rajdhani'>High Quality</h3>
          <p className='text-brand-yellow text-3xl lg:w-1/2 font-semibold'>
            New Kitchen Furniture
          </p>
          <Link
            href='/products?category=kitchen-furniture'
            className='bg-brand-yellow p-3 text-white w-max px-5 uppercase'>
            Shop Now
          </Link>
        </div>
        <div style={{ backgroundImage: `url('${banner2.src}')` }}>
          <h3 className='text-xl font-thin font-rajdhani'>Best Quality</h3>
          <p className='text-brand-yellow text-3xl lg:w-1/2 font-semibold'>
            Bedroom Furniture
          </p>
          <Link
            href='/products?category=bedroom-furniture'
            className='bg-brand-yellow p-3 text-white w-max px-5 uppercase'>
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
