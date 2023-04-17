'use client';

import { SearchNormal1 } from 'iconsax-react';
import React from 'react';
import { BiCaretDown } from 'react-icons/bi';

import productImg from '@/assets/product-img/product-details-1.webp';
import productImg2 from '@/assets/product-img/product-details-2.webp';
import ProductCard from '@/components/product_card_alt';
import { Checkbox, Select } from '@mantine/core';

export default function Products() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 items-start gap-8 section-padding py-24 w-full'>
      <aside className='hidden lg:flex flex-col gap-12 '>
        <form className='flex items-center border border-brand-gray/10 p-8'>
          <input
            type='text'
            placeholder='Search for a Product'
            className='p-3 outline-none focus:border-brand-yellow border border-brand-gray/10 pr-10 font-extralight font-sm tracking-tight w-full'
          />
          <button type='submit'>
            <SearchNormal1
              className='bg-brand-yellow p-3 py-2 border border-brand-yellow'
              size={48}
            />
          </button>
        </form>

        {/* Cateogry */}
        <div className='flex flex-col border border-brand-gray/10 p-8 gap-6 text-brand-gray tracking-tight'>
          <h3 className='relative before:absolute before:w-1 before:h-full before:bg-brand-yellow pl-4 before:left-0 uppercase text-xl font-bold !font-rajdhani'>
            Filter By Cateogry
          </h3>
          <div className='max-h-[40rem] overflow-scroll space-y-6 text-black/60'>
            <Checkbox label='Office Chair' />
            <Checkbox label='Office Chair' />
            <Checkbox label='Office Chair' />
            <Checkbox label='Office Chair' />
            <Checkbox label='Office Chair' />
            <Checkbox label='Office Chair' />
          </div>
        </div>

        {/* Refine By */}
        <div className='flex flex-col border border-brand-gray/10 p-8 gap-6 text-brand-gray tracking-tight'>
          <h3 className='relative before:absolute before:w-1 before:h-full before:bg-brand-yellow pl-4 before:left-0 uppercase text-xl font-bold !font-rajdhani'>
            Refine By
          </h3>
          <div className='max-h-[40rem] overflow-scroll space-y-6 text-black/60'>
            <Checkbox label='On Sale' />
            <Checkbox label='New' />
            <Checkbox label='In stock' />
            <Checkbox label='Top Selling' />
          </div>
        </div>

        {/* Size */}
        <div className='flex flex-col border border-brand-gray/10 p-8 gap-6 text-brand-gray tracking-tight'>
          <h3 className='relative before:absolute before:w-1 before:h-full before:bg-brand-yellow pl-4 before:left-0 uppercase text-xl font-bold !font-rajdhani'>
            Size
          </h3>
          <div className='max-h-[40rem] overflow-scroll space-y-6 text-black/60'>
            <Checkbox label='S' />
            <Checkbox label='M' />
            <Checkbox label='L' />
            <Checkbox label='XL' />
          </div>
        </div>

        <div className='flex flex-col border border-brand-gray/10 p-8 gap-6 text-brand-gray tracking-tight'>
          <h3 className='relative before:absolute before:w-1 before:h-full before:bg-brand-yellow pl-4 before:left-0 uppercase text-xl font-bold !font-rajdhani'>
            Filter by Color
          </h3>
          <div className='max-h-[40rem] overflow-scroll space-y-6 text-black/60 capitalize'>
            <Checkbox
              value='blue'
              label='blue'
              classNames={{ input: 'bg-blue-800 checked:bg-blue-800' }}
            />
            <Checkbox
              value='green'
              label='green'
              classNames={{ input: 'bg-green-800 checked:bg-green-800' }}
            />
            <Checkbox
              value='red'
              label='red'
              classNames={{ input: 'bg-red-800 checked:bg-red-800' }}
            />
            <Checkbox
              value='teal'
              label='teal'
              classNames={{ input: 'bg-brand-teal checked:bg-brand-teal' }}
            />
            <Checkbox
              value='purple'
              label='purple'
              classNames={{ input: 'bg-purple-800 checked:bg-purple-800' }}
            />
          </div>
        </div>
        <div className='flex flex-col border border-brand-gray/10 p-8 gap-6 text-brand-gray tracking-tight'>
          <h3 className='relative before:absolute before:w-1 before:h-full before:bg-brand-yellow pl-4 before:left-0 uppercase text-xl font-bold !font-rajdhani'>
            Tags
          </h3>

          <div className='flex flex-wrap gap-4 child:text-sm child:p-2 child:px-3 child:rounded-xl child:bg-gray-100 hover:child:bg-brand-yellow hover:child:text-white'>
            <button>Clothing</button>
            <button>For Men</button>
            <button>For Women</button>
            <button>Furniture</button>
            <button>Accessories</button>
          </div>
        </div>
      </aside>
      <div className='col-span-1 lg:col-span-2 space-y-6'>
        <div className='flex items-center justify-between flex-wrap-reverse gap-4'>
          <p className='uppercase text-lg font-rajdhani font-extralight space-x-2'>
            <span className='text-brand-yellow'>12</span>
            <span>products found of</span>
            <span className='text-brand-yellow'>44</span>
          </p>

          <Select
            data={[
              { value: 'price', label: 'Price', selected: true },
              { value: 'rating', label: 'Rating' },
              { value: 'featured', label: 'Featured' },
            ]}
            label='Sort by:'
            classNames={{
              root: 'flex items-center gap-4',
              label: 'text-lg font-extralight',
              input:
                'w-28 capitalize border-none font-rajdahni text-base font-thin',
            }}
            rightSectionWidth={20}
            rightSection={<BiCaretDown />}
          />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8'>
          <ProductCard
            product={{
              category: '',
              price: 3999.99,
              id: '2344',
              image: productImg.src,
              name: 'Product Name',
              slug: '123',
              variants: [{}],
            }}
          />
          <ProductCard
            product={{
              category: '',
              price: 3999.99,
              id: '2344',
              image: productImg2.src,
              name: 'Product Name',
              slug: '123',
              variants: [{}],
            }}
          />
          <ProductCard
            product={{
              category: '',
              price: 3999.99,
              id: '2344',
              image: productImg.src,
              name: 'Product Name',
              slug: '123',
              variants: [{}],
            }}
          />
          <ProductCard
            product={{
              category: '',
              price: 3999.99,
              id: '2344',
              image: productImg.src,
              name: 'Product Name',
              slug: '123',
              variants: [{}],
            }}
          />
          <ProductCard
            product={{
              category: '',
              price: 3999.99,
              id: '2344',
              image: productImg2.src,
              name: 'Product Name',
              slug: '123',
              variants: [{}],
            }}
          />
          <ProductCard
            product={{
              category: '',
              price: 3999.99,
              id: '2344',
              image: productImg.src,
              name: 'Product Name',
              slug: '123',
              variants: [{}],
            }}
          />
          <ProductCard
            product={{
              category: '',
              price: 3999.99,
              id: '2344',
              image: productImg.src,
              name: 'Product Name',
              slug: '123',
              variants: [{}],
            }}
          />
          <ProductCard
            product={{
              category: '',
              price: 3999.99,
              id: '2344',
              image: productImg2.src,
              name: 'Product Name',
              slug: '123',
              variants: [{}],
            }}
          />
          <ProductCard
            product={{
              category: '',
              price: 3999.99,
              id: '2344',
              image: productImg.src,
              name: 'Product Name',
              slug: '123',
              variants: [{}],
            }}
          />
          <ProductCard
            product={{
              category: '',
              price: 3999.99,
              id: '2344',
              image: productImg.src,
              name: 'Product Name',
              slug: '123',
              variants: [{}],
            }}
          />
          <ProductCard
            product={{
              category: '',
              price: 3999.99,
              id: '2344',
              image: productImg2.src,
              name: 'Product Name',
              slug: '123',
              variants: [{}],
            }}
          />
          <ProductCard
            product={{
              category: '',
              price: 3999.99,
              id: '2344',
              image: productImg.src,
              name: 'Product Name',
              slug: '123',
              variants: [{}],
            }}
          />
        </div>
      </div>
    </div>
  );
}
