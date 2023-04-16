import { CalendarCircle, ProfileCircle } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import blogImg1 from '@/assets/blog/blog-01.webp';
import blogImg2 from '@/assets/blog/blog-03.webp';
import blogImg3 from '@/assets/blog/blog-04.webp';
import blogImg4 from '@/assets/blog/blog-06.webp';
import { shortDateFormatter } from '@/lib/formatter';

export default function Blog() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-4'>
      <div className='flex flex-col gap-6'>
        <Link href='blog/category/this-is-a-blog-post'>
          <Image src={blogImg1} alt='Blog Title 1' />
        </Link>
        <p className='flex items-center gap-4 text-sm font-light'>
          <span className='flex items-center gap-2'>
            <ProfileCircle /> BY:ADMIN{' '}
          </span>
          <span className='flex items-center gap-2'>
            <CalendarCircle /> {shortDateFormatter(new Date())}{' '}
          </span>
        </p>
        <Link
          href='blog/category/this-is-a-blog-post'
          className='text-2xl font-bold !font-rajdhani hover:text-brand-yellow duration-300 ease-out'>
          Unique products that will impress your home
        </Link>
        <Link
          href='blog/category/this-is-a-blog-post'
          className='bg-[#494949] p-3 uppercase text-white hover:bg-brand-yellow w-max rounded-md duration-300'>
          read more
        </Link>
      </div>
      <div className='flex flex-col gap-6'>
        <Link href='blog/category/this-is-a-blog-post'>
          <Image src={blogImg2} alt='Blog Title 1' />
        </Link>
        <p className='flex items-center gap-4 text-sm font-light'>
          <span className='flex items-center gap-2'>
            <ProfileCircle /> BY:ADMIN{' '}
          </span>
          <span className='flex items-center gap-2'>
            <CalendarCircle /> {shortDateFormatter(new Date())}{' '}
          </span>
        </p>
        <Link
          href='blog/category/this-is-a-blog-post'
          className='text-2xl font-bold !font-rajdhani hover:text-brand-yellow duration-300 ease-out'>
          Unique products that will impress your home
        </Link>
        <Link
          href='blog/category/this-is-a-blog-post'
          className='bg-[#494949] p-3 uppercase text-white hover:bg-brand-yellow w-max rounded-md duration-300'>
          read more
        </Link>
      </div>
      <div className='flex flex-col gap-6'>
        <Link href='blog/category/this-is-a-blog-post'>
          <Image src={blogImg3} alt='Blog Title 1' />
        </Link>
        <p className='flex items-center gap-4 text-sm font-light'>
          <span className='flex items-center gap-2'>
            <ProfileCircle /> BY:ADMIN{' '}
          </span>
          <span className='flex items-center gap-2'>
            <CalendarCircle /> {shortDateFormatter(new Date())}{' '}
          </span>
        </p>
        <Link
          href='blog/category/this-is-a-blog-post'
          className='text-2xl font-bold !font-rajdhani hover:text-brand-yellow duration-300 ease-out'>
          Unique products that will impress your home
        </Link>
        <Link
          href='blog/category/this-is-a-blog-post'
          className='bg-[#494949] p-3 uppercase text-white hover:bg-brand-yellow w-max rounded-md duration-300'>
          read more
        </Link>
      </div>
      <div className='flex flex-col gap-6'>
        <Link href='blog/category/this-is-a-blog-post'>
          <Image src={blogImg1} alt='Blog Title 1' />
        </Link>
        <p className='flex items-center gap-4 text-sm font-light'>
          <span className='flex items-center gap-2'>
            <ProfileCircle /> BY:ADMIN{' '}
          </span>
          <span className='flex items-center gap-2'>
            <CalendarCircle /> {shortDateFormatter(new Date())}{' '}
          </span>
        </p>
        <Link
          href='blog/category/this-is-a-blog-post'
          className='text-2xl font-bold !font-rajdhani hover:text-brand-yellow duration-300 ease-out'>
          Unique products that will impress your home
        </Link>
        <Link
          href='blog/category/this-is-a-blog-post'
          className='bg-[#494949] p-3 uppercase text-white hover:bg-brand-yellow w-max rounded-md duration-300'>
          read more
        </Link>
      </div>
      <div className='flex flex-col gap-6'>
        <Link href='blog/category/this-is-a-blog-post'>
          <Image src={blogImg1} alt='Blog Title 1' />
        </Link>
        <p className='flex items-center gap-4 text-sm font-light'>
          <span className='flex items-center gap-2'>
            <ProfileCircle /> BY:ADMIN{' '}
          </span>
          <span className='flex items-center gap-2'>
            <CalendarCircle /> {shortDateFormatter(new Date())}{' '}
          </span>
        </p>
        <Link
          href='blog/category/this-is-a-blog-post'
          className='text-2xl font-bold !font-rajdhani hover:text-brand-yellow duration-300 ease-out'>
          Unique products that will impress your home
        </Link>
        <Link
          href='blog/category/this-is-a-blog-post'
          className='bg-[#494949] p-3 uppercase text-white hover:bg-brand-yellow w-max rounded-md duration-300'>
          read more
        </Link>
      </div>
      <div className='flex flex-col gap-6'>
        <Link href='blog/category/this-is-a-blog-post'>
          <Image src={blogImg4} alt='Blog Title 1' />
        </Link>
        <p className='flex items-center gap-4 text-sm font-light'>
          <span className='flex items-center gap-2'>
            <ProfileCircle /> BY:ADMIN{' '}
          </span>
          <span className='flex items-center gap-2'>
            <CalendarCircle /> {shortDateFormatter(new Date())}{' '}
          </span>
        </p>
        <Link
          href='blog/category/this-is-a-blog-post'
          className='text-2xl font-bold !font-rajdhani hover:text-brand-yellow duration-300 ease-out'>
          Unique products that will impress your home
        </Link>
        <Link
          href='blog/category/this-is-a-blog-post'
          className='bg-[#494949] p-3 uppercase text-white hover:bg-brand-yellow w-max rounded-md duration-300'>
          read more
        </Link>
      </div>
    </div>
  );
}
