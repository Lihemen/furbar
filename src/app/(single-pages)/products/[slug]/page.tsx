'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { AiFillStar, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { IoShuffle } from 'react-icons/io5';

import reviewImg1 from '@/assets/persona/author-1.webp';
import reviewImg2 from '@/assets/persona/author-2.webp';
import reviewImg3 from '@/assets/persona/author-3.webp';
import productImg from '@/assets/product-img/product-details-1.webp';
import { Group, Radio, Tabs, TextInput, Textarea } from '@mantine/core';

export default function SingleProduct() {
  const [color, setColor] = useState('');
  const [qty, setQty] = useState(1);
  return (
    <div className='section-padding'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8  py-20'>
        <div>
          <Image
            src={productImg}
            alt='Product Image'
            className='w-full max-h-[34rem]'
          />
        </div>
        <div className='space-y-6'>
          <div>
            <h3 className='text-3xl !font-thin !font-rajdhani pb-2'>
              High quality vase bottle.
            </h3>
            <p className='text-2xl text-brand-yellow'>
              <span>&#x20A6; 59,999.99</span>{' '}
              <span className='line-through text-gray-300'>
                &#x20A6;79,999.99
              </span>{' '}
            </p>
          </div>
          <p className='flex items-center gap-1 text-xl'>
            <AiFillStar className='text-brand-yellow' />{' '}
            <AiFillStar className='text-brand-yellow' />
            <AiFillStar className='text-brand-yellow' />
            <AiFillStar className='text-brand-yellow' />
            <AiOutlineStar className='text-gray-200' />{' '}
            <span className='text-gray-300 font-thin text-base'>
              (2 Customer Reviews){' '}
            </span>
          </p>

          <Group>
            <p>Color: </p>
            <Radio.Group
              className='flex items-center gap-4'
              value={color}
              onChange={setColor}>
              <Radio
                value='react'
                classNames={{
                  radio:
                    'rounded-none bg-blue-800 checked:bg-blue-800 checked:border-transparent',
                }}
              />
              <Radio
                value='svelte'
                classNames={{
                  radio:
                    'rounded-none bg-brand-yellow checked:bg-brand-yellow checked:border-transparent',
                }}
              />
              <Radio
                value='ng'
                classNames={{
                  radio:
                    'rounded-none bg-brand-teal checked:bg-brand-teal checked:border-transparent',
                }}
              />
              <Radio
                value='vue'
                classNames={{
                  radio:
                    'rounded-none bg-brand-cream checked:bg-brand-cream checked:border-transparent',
                }}
              />
            </Radio.Group>
          </Group>

          <p className='text-black/70 font-light line-clamp-4 leading-8'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
            asperiores voluptas ducimus expedita voluptatem maxime laudantium
            nesciunt accusantium cum nisi, dolores repellat. Facilis commodi
            distinctio sapiente assumenda voluptates quo nihil!
          </p>

          <div className='flex flex-wrap gap-2 place-items-start'>
            <Group className='gap-0 justify-center'>
              <button
                className='py-[11px] w-12 text-white text-center bg-[#494949] rounded-l'
                onClick={() =>
                  setQty((prev) => {
                    if (prev === 1) return 1;
                    return prev - 1;
                  })
                }>
                -
              </button>
              <TextInput
                value={qty}
                onChange={(e) => setQty(e.target.valueAsNumber)}
                readOnly
                size='xs'
                classNames={{
                  input:
                    'bg-[#494949] w-8 !py-5 rounded-none border-none outline-none ring-none text-white text-center',
                }}
              />
              <button
                className='py-[11px] w-12 text-white text-center bg-[#494949] rounded-r'
                onClick={() => setQty((prev) => prev + 1)}>
                +
              </button>
            </Group>
            <button className='py-[11px] px-5 uppercase tracking-wider  text-white text-center bg-[#494949] rounded hover:bg-brand-yellow duration-300'>
              Add To Cart
            </button>

            <button className='py-2 text-2xl text-white text-center bg-[#494949] rounded px-4 hover:bg-brand-yellow duration-300 w-max'>
              <AiOutlineHeart />
            </button>
            <button className='py-2 text-2xl text-white text-center bg-[#494949] rounded px-4 hover:bg-brand-yellow duration-300 w-max'>
              <IoShuffle />
            </button>
          </div>
          <div className='space-y-2 text-sm font-extralight font-rajdhani'>
            <p>
              SKU: <span className='text-black/70'>Ch-256xl</span>
            </p>
            <p>
              Categories: <span className='text-black/70'>Office, Home</span>
            </p>
            <p>
              Tags: <span className='text-black/70'>Furniture</span>
            </p>
            <p className='flex gap-4 items-center'>
              Share:{' '}
              <a
                href='#'
                target='_blank'
                rel='noreferrer noopener'
                className='text-black/70 text-base hover:text-brand-purple'>
                <FaFacebook />{' '}
              </a>{' '}
              <a
                href='#'
                target='_blank'
                rel='noreferrer noopener'
                className='text-black/70 text-base hover:text-brand-purple'>
                <FaWhatsapp />{' '}
              </a>
              <a
                href='#'
                target='_blank'
                rel='noreferrer noopener'
                className='text-black/70 text-base hover:text-brand-purple'>
                <FaTwitter />{' '}
              </a>
              <a
                href='#'
                target='_blank'
                rel='noreferrer noopener'
                className='text-black/70 text-base hover:text-brand-purple'>
                <FaInstagram />{' '}
              </a>
            </p>
          </div>
        </div>
      </div>

      <Tabs
        className='pb-20 child:lg:px-10 font-rajdhani'
        defaultValue='info'
        color='teal'>
        <Tabs.List className='text-center flex items-center justify-center child:text-xl'>
          <Tabs.Tab value='info'>Information</Tabs.Tab>
          <Tabs.Tab value='description'>Description</Tabs.Tab>
          <Tabs.Tab value='reviews'>(03) Reviews </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value='info' className='space-y-6 py-6'>
          <div className='leading-8'>
            <h3 className='text-lg font-semibold'>Information</h3>
            <p className='text-black/70'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna viverra non, semper suscipit, posuere a,
              pede. Donec nec justo eget felis facilisis fermentum. Aliquam
              porttitor mauris sit amet orci.
            </p>
          </div>
          <div className='leading-8'>
            <h3 className='text-lg font-semibold'>Fabric & Care</h3>
            <ul className='list-disc list-inside text-black/70'>
              <li>Faux suede fabric</li>
              <li>Gold tone metal hoop handles.</li>
              <li>RI branding</li>
              <li>Snake print trim interior</li>
              <li>Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm</li>
            </ul>
          </div>
          <div className='leading-8'>
            <h3 className='text-lg font-semibold'>Size</h3>
            <p className='text-black/70'>One Size</p>
          </div>
        </Tabs.Panel>
        <Tabs.Panel value='description' className='py-6'>
          <p className='text-black/70 leading-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
            iste nisi, error doloremque est esse aliquam omnis placeat natus,
            facere, vel cum non quae maxime provident eos quod nihil magnam in
            excepturi beatae fugiat animi totam. Velit error aliquam quis,
            dolore veritatis rem, vero natus vitae dolorum possimus, nulla
            perspiciatis? Rem laboriosam molestias commodi, et impedit ex
            maiores nihil. Temporibus aliquam excepturi similique voluptas est
            odio, dolorem, odit minus recusandae nisi cumque placeat! Quaerat
            nostrum aliquam, at repellat possimus ea sit similique porro
            cupiditate quasi, velit cum officia quia magni molestiae? Ad rerum
            quae officia soluta, inventore qui temporibus!
          </p>
        </Tabs.Panel>
        <Tabs.Panel value='reviews' className='py-6 space-y-6'>
          <div className='flex flex-col gap-6'>
            <div className='flex items-start gap-4'>
              <Image
                src={reviewImg3}
                alt='author 1'
                width={120}
                height={120}
                className='rounded-full'
              />
              <div className='text-sm space-y-4 leading-8'>
                <p>Rosie Silva </p>
                <span>11/20/2023</span>
                <p className='text-black/50'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque veritatis eos deserunt maxime, animi voluptatem harum
                  voluptate ad optio expedita non minima sequi tempora eius. A,
                  iusto qui. Suscipit, facilis.
                </p>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <Image
                src={reviewImg1}
                alt='author 1'
                width={120}
                height={120}
                className='rounded-full'
              />
              <div className='text-sm space-y-4 leading-8'>
                <p>Rosie Silva </p>
                <span>11/20/2023</span>
                <p className='text-black/50'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque veritatis eos deserunt maxime, animi voluptatem harum
                  voluptate ad optio expedita non minima sequi tempora eius. A,
                  iusto qui. Suscipit, facilis.
                </p>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <Image
                src={reviewImg2}
                alt='author 1'
                width={120}
                height={120}
                className='rounded-full'
              />
              <div className='text-sm space-y-4 leading-8'>
                <p>Rosie Silva </p>
                <span>11/20/2023</span>
                <p className='text-black/50'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque veritatis eos deserunt maxime, animi voluptatem harum
                  voluptate ad optio expedita non minima sequi tempora eius. A,
                  iusto qui. Suscipit, facilis.
                </p>
              </div>
            </div>
          </div>
          <form className='space-y-6'>
            <h3 className='text-xl'>Add a Review</h3>

            <Group className='items-center child:w-full grid grid-cols-1 md:grid-cols-2'>
              <TextInput
                required
                placeholder='Firstname *'
                classNames={{
                  input: 'p-6  rounded-none placeholder:italic',
                }}
              />
              <TextInput
                required
                placeholder='Last Name *'
                classNames={{
                  input: 'p-6 rounded-none placeholder:italic',
                }}
              />
            </Group>

            <Group className='gap-2'>
              <p className='font-extralight'>Rating: </p>
              <AiOutlineStar className='text-brand-yellow cursor-pointer' />
              <AiOutlineStar className='text-brand-yellow cursor-pointer' />
              <AiOutlineStar className='text-brand-yellow cursor-pointer' />
              <AiOutlineStar className='text-brand-yellow cursor-pointer' />
              <AiOutlineStar className='text-brand-yellow cursor-pointer' />
            </Group>

            <Textarea
              classNames={{
                input: ' h-64 rounded-none placeholder:italic',
              }}
              placeholder='Write your comment here'
            />

            <input
              type='submit'
              value='Submit Review'
              className='py-2 px-5 uppercase tracking-wider  text-white text-center bg-[#494949] rounded hover:bg-brand-yellow duration-300'
            />
          </form>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
