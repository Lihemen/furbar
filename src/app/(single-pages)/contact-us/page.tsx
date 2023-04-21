'use client';

import Image from 'next/image';
import React from 'react';
import { BsTelephoneForward } from 'react-icons/bs';
import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { RiMapPin2Line } from 'react-icons/ri';

import contact from '@/assets/contact-info.webp';
import { Group, TextInput, Textarea } from '@mantine/core';

export default function ContactUs() {
  return (
    <div className='section-padding py-20 text-brand-gray font-light'>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='bg-[#fff9ed] pt-10 px-10 md:flex flex-col gap-6 hidden'>
          <h3 className='relative before:absolute before:w-1 before:h-full before:bg-brand-yellow pl-4 before:left-0 uppercase text-2xl font-bold !font-rajdhani'>
            Contact Info
          </h3>
          <p className=' line-clamp-2'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>

          <ul className='p-6 space-y-6'>
            <li>
              <a
                href='tel:+2347011056442'
                className='flex gap-2 items-start hover:text-brand-yellow duration-100 hover:underline hover:underline-offset-4'>
                <BsTelephoneForward size={24} />
                07011056442
              </a>
            </li>
            <li>
              <a
                href='mailto:lihemen@gmail.com'
                className='flex gap-2 items-start hover:text-brand-yellow duration-100 hover:underline hover:underline-offset-4'>
                <IoMailOutline size={24} />
                lihemen@gmail.com
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex gap-2 items-start hover:text-brand-yellow duration-100 hover:underline hover:underline-offset-4'>
                <RiMapPin2Line size={24} />
                823 Ralph Shodeinde Street
              </a>
            </li>
          </ul>

          <ul className='flex gap-6 items-center text-base child:bg-black/10 child:rounded-full child:p-2 hover:child:text-brand-yellow duration-150 child:transition-all child:ease-out'>
            <a href='' target='_blank' rel='noreferrer noopener'>
              <FaWhatsapp />{' '}
            </a>
            <a href='' target='_blank' rel='noreferrer noopener'>
              <FaTwitter />{' '}
            </a>
            <a href='' target='_blank' rel='noreferrer noopener'>
              <FaFacebook />{' '}
            </a>
            <a href='' target='_blank' rel='noreferrer noopener'>
              <FaYoutube />{' '}
            </a>
          </ul>

          <Image
            src={contact}
            alt='Furniture'
            className='w-full justify-self-center'
          />
        </div>
        <div className='md:col-span-2 p-4 py-10 md:p-10 bg-brand-gray/10'>
          <form className='w-full flex flex-col gap-8'>
            <Group className='items-center child:w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
              <TextInput
                required
                placeholder='Firstname *'
                classNames={{
                  input:
                    'p-5 py-6  rounded-none placeholder:italic bg-transparent',
                }}
              />
              <TextInput
                required
                placeholder='Last Name *'
                classNames={{
                  input:
                    'p-5 py-6 rounded-none placeholder:italic bg-transparent',
                }}
              />
            </Group>
            <TextInput
              placeholder='Company Name'
              classNames={{
                input:
                  'p-5 py-6 rounded-none placeholder:italic bg-transparent',
              }}
            />

            <Textarea
              classNames={{
                input:
                  'bg-transparent h-40 placeholder:italic px-5 font-base placeholder:font-base',
                label: 'font-normal text-brand-gray/90 pb-4 text-base',
              }}
              placeholder='Write your comments here*'
              required
            />
            <button
              type='submit'
              className='bg-[#494949] p-4 text-white uppercase rounded whitespace-nowrap active:scale-95 hover:bg-brand-yellow duration-150 ease-in font-bold'>
              submit review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
