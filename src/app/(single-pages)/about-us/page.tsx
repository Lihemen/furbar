'use client';

import Image from 'next/image';
import React from 'react';

import flowerIcon from '@/assets/icon-5.webp';
import image1 from '@/assets/image-1.webp';
import image2 from '@/assets/image-2.webp';
import image3 from '@/assets/image-3.webp';
import image4 from '@/assets/image-4.webp';
import persona from '@/assets/persona/author-1.webp';
import teamMember1 from '@/assets/persona/team-member-1.png';
import quote from '@/assets/quote.webp';
import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';

export default function AboutUs() {
  return (
    <div className='section-padding py-10 lg:py-20 space-y-20'>
      <div>
        <p className='text-center uppercase text-brand-gray text-lg'>
          OUR HISTORY
        </p>
        <h1 className='text-center text-4xl font-normal py-4 uppercase text-brand-dark-blue'>
          Furbar Furniture Shop
        </h1>
        <p className='leading-10 text-brand-gray font-light text-center'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ipsum
          asperiores mollitia veritatis nam sit! Tempore neque libero deserunt
          quidem, explicabo ipsum. Corporis quisquam dignissimos optio
          doloremque reprehenderit consequuntur possimus quam iusto quis enim
          delectus omnis fugiat ducimus nam commodi, repellat nemo saepe ea
          illum. Nostrum in incidunt illo voluptatem rem? Minus doloribus dolore
          incidunt, ad eveniet, optio autem aut dolorem non expedita officiis,
          nihil quasi rem quis consectetur placeat voluptate libero labore. Vel
          debitis quia recusandae dignissimos accusantium amet harum earum,
          possimus pariatur obcaecati molestias rem quos sequi vero
          necessitatibus et reprehenderit aspernatur nulla illum, voluptate
          repellat eius fugit tempore quibusdam.
        </p>
      </div>
      <div className='flex items-center justify-center relative before:absolute before:w-full before:h-[1px] before:top-1/2 before:translate-y-1/2 before:block before:bg-[#fcdd93] before:-z-[1]'>
        <Image src={flowerIcon} alt='Flower' />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-6 gap-8 child:w-full child:h-full py-10'>
        <Image src={image1} alt='Furniture' className='sm:col-span-4' />
        <Image src={image2} alt='Furniture' className='sm:col-span-2' />
        <Image src={image3} alt='Furniture' className='sm:col-span-3' />
        <Image src={image4} alt='Furniture' className='sm:col-span-3' />
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
        <div className='border p-8 text-center space-y-4 text-brand-gray'>
          <h3 className='text-5xl font-normal text-brand-yellow'>
            21<span className='text-xl'>+</span>
          </h3>
          <p>Years of Experience</p>
        </div>
        <div className='border p-8 text-center space-y-4 text-brand-gray'>
          <h3 className='text-5xl font-normal text-brand-yellow'>
            30<span className='text-xl'>K</span>
          </h3>
          <p>Happy Customers</p>
        </div>
        <div className='border p-8 text-center space-y-4 text-brand-gray'>
          <h3 className='text-5xl font-normal text-brand-yellow'>
            15<span className='text-xl'>+</span>
          </h3>
          <p>Awards of Excellence</p>
        </div>
        <div className='border p-8 text-center space-y-4 text-brand-gray'>
          <h3 className='text-5xl font-normal text-brand-yellow'>
            100<span className='text-xl'>%</span>
          </h3>
          <p>Products Guaranteed</p>
        </div>
      </div>
      <div className='bg-[#eaeaea] -section-padding py-6 lg:py-10 '>
        <Carousel
          mx='auto'
          withIndicators
          withControls={false}
          styles={{
            indicator: {
              opacity: 1,
              '&[data-active]': {
                width: rem(50),
                backgroundColor: '#f2a100',
              },
            },
          }}
          className='font-light'
          classNames={{
            indicator:
              'bg-white h-[6px] w-6 transition-all duration-300 ease-in mx-1',
          }}>
          <Carousel.Slide className='text-center flex flex-col justify-center items-center gap-8 section-padding'>
            <Image src={quote} alt='quote' />
            <p className='leading-10 text-brand-gray'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus distinctio possimus repellendus accusamus magni sed quae
              natus itaque. Itaque rem doloribus voluptatem, officia maxime eius
              vitae in, aut distinctio dolor velit architecto assumenda
              obcaecati excepturi similique. Autem odit deserunt, iste labore
              quaerat, delectus consequuntur aliquam illum perspiciatis harum
              culpa!
            </p>
            <Image
              src={persona}
              alt='Testimonial 1'
              className='h-28 w-28 rounded-full aspect-square'
            />
            <h6 className='uppercase font-semibold text-lg'>Justin therouex</h6>
            <p className='uppercase -mt-8'>CUSTOMER</p>
          </Carousel.Slide>
          <Carousel.Slide className='text-center py-10 lg:py-20 flex flex-col justify-center items-center gap-8 section-padding'>
            <Image src={quote} alt='quote' />
            <p className='leading-10 text-brand-gray'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus distinctio possimus repellendus accusamus magni sed quae
              natus itaque. Itaque rem doloribus voluptatem, officia maxime eius
              vitae in, aut distinctio dolor velit architecto assumenda
              obcaecati excepturi similique. Autem odit deserunt, iste labore
              quaerat, delectus consequuntur aliquam illum perspiciatis harum
              culpa!
            </p>
            <Image
              src={persona}
              alt='Testimonial 1'
              className='h-28 w-28 rounded-full aspect-square'
            />
            <h6 className='uppercase font-semibold text-lg'>Justin therouex</h6>
            <p className='uppercase -mt-8'>CUSTOMER</p>
          </Carousel.Slide>
          <Carousel.Slide className='text-center py-10 lg:py-20 flex flex-col justify-center items-center gap-8 section-padding'>
            <Image src={quote} alt='quote' />
            <p className='leading-10 text-brand-gray'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ducimus distinctio possimus repellendus accusamus magni sed quae
              natus itaque. Itaque rem doloribus voluptatem, officia maxime eius
              vitae in, aut distinctio dolor velit architecto assumenda
              obcaecati excepturi similique. Autem odit deserunt, iste labore
              quaerat, delectus consequuntur aliquam illum perspiciatis harum
              culpa!
            </p>
            <Image
              src={persona}
              alt='Testimonial 1'
              className='h-28 w-28 rounded-full aspect-square'
            />
            <h6 className='uppercase font-semibold text-sm'>Justin therouex</h6>
            <p className='uppercase -mt-8 text-sm'>CUSTOMER</p>
          </Carousel.Slide>
          {/* ...other slides */}
        </Carousel>
      </div>
      <div>
        <p className='text-center uppercase text-brand-gray text-lg'>
          OUR TEAM
        </p>
        <h1 className='text-center text-4xl font-normal py-4 uppercase text-brand-dark-blue'>
          MEET OUR TEAM
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-10 pt-8 pb-20'>
          <div className='space-y-4'>
            <Image
              className='min-h-[28rem] object-cover object-center hover:opacity-90'
              src={teamMember1}
              alt='Team Member'
            />
            <h6 className='uppercase font-normal text-xl leading-none'>
              EMMANUEL MACRON
            </h6>
            <p className='uppercase text-base font-light -translate-y-2'>
              TEAM MEMBER
            </p>
          </div>
          <div className='space-y-4'>
            <Image
              className='min-h-[28rem] object-cover object-center hover:opacity-90'
              src={teamMember1}
              alt='Team Member'
            />
            <h6 className='uppercase font-normal text-xl leading-none'>
              EMMANUEL MACRON
            </h6>
            <p className='uppercase text-base font-light -translate-y-2'>
              TEAM MEMBER
            </p>
          </div>
          <div className='space-y-4'>
            <Image
              className='min-h-[28rem] object-cover object-center hover:opacity-90'
              src={teamMember1}
              alt='Team Member'
            />
            <h6 className='uppercase font-normal text-xl leading-none'>
              EMMANUEL MACRON
            </h6>
            <p className='uppercase text-base font-light -translate-y-2'>
              TEAM MEMBER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
