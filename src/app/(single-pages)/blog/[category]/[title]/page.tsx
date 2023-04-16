import { CalendarCircle, ProfileCircle } from 'iconsax-react';
import Image from 'next/image';
import React from 'react';

import blogImg1 from '@/assets/blog/blog-01.webp';
import blogDetails1 from '@/assets/blog/blog-dec-img1.webp';
import blogDetails2 from '@/assets/blog/blog-dec-img2.webp';
import { shortDateFormatter } from '@/lib/formatter';

export default function SingleBlogPost() {
  return (
    <div className='flex flex-col gap-6'>
      <Image
        src={blogImg1}
        alt='This is a blog post'
        className='w-full min-h-[40vh]'
      />
      <p className='flex items-center gap-4 text-sm font-light'>
        <span className='flex items-center gap-2'>
          <ProfileCircle /> BY:ADMIN{' '}
        </span>
        <span className='flex items-center gap-2'>
          <CalendarCircle /> {shortDateFormatter(new Date())}{' '}
        </span>
      </p>
      <h2 className='text-4xl text-[#494949] font-bold !font-rajdhani hover:text-brand-yellow duration-300 ease-out'>
        Unique products that will impress your home
      </h2>
      <p className='font-light text-brand-gray leading-8'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui voluptates
        blanditiis iste, autem pariatur veritatis nisi, hic natus rerum ut
        eligendi at necessitatibus atque in magnam sint aspernatur vero?
        Voluptas dolorum numquam eaque ratione nostrum aliquam quam quaerat
        cumque nulla expedita nam mollitia saepe, nisi error, dolor repudiandae
        unde fugiat, vero commodi? Molestiae facere ea quisquam accusamus magni
        voluptas aspernatur?
      </p>
      <blockquote
        className='text-lg text-brand-gray/70 relative before:absolute before:w-1 before:h-full before:bg-brand-yellow pl-8 before:left-0 space-y-4 '
        cite='https://twitter.com'>
        <em>
          Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit
        </em>
        <p className='relative before:absolute before:w-8 before:h-1 before:bg-brand-yellow pl-12 before:left-0 before:top-1/2 before:-translate-y-1/2 '>
          Elmer Schmidt
        </p>
      </blockquote>
      <p className='font-light text-brand-gray leading-8'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui voluptates
        blanditiis iste, autem pariatur veritatis nisi, hic natus rerum ut
        eligendi at necessitatibus atque in magnam sint aspernatur vero?
        Voluptas dolorum numquam eaque ratione nostrum aliquam quam quaerat
        cumque nulla expedita nam mollitia saepe, nisi error, dolor repudiandae
        unde fugiat, vero commodi? Molestiae facere ea quisquam accusamus magni
        voluptas aspernatur?
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 child:h-full'>
        <Image src={blogDetails1} alt='lorem ipsum' className='lg:col-span-2' />
        <Image src={blogDetails2} alt='lorem ipsum' />
      </div>
      <p className='font-light text-brand-gray leading-8'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui voluptates
        blanditiis iste, autem pariatur veritatis nisi, hic natus rerum ut
        eligendi at necessitatibus atque in magnam sint aspernatur vero?
        Voluptas dolorum numquam eaque ratione nostrum aliquam quam quaerat
        cumque nulla expedita nam mollitia saepe.
      </p>
    </div>
  );
}
