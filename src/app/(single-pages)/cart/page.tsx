'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiCaretDown } from 'react-icons/bi';
import { BsTrash3 } from 'react-icons/bs';

import product1 from '@/assets/cart-1.webp';
import { numberFormatter } from '@/lib/formatter';
import { Group, Radio, Select, TextInput } from '@mantine/core';

export default function Cart() {
  const [qty, setQty] = useState(1);
  return (
    <div className='section-padding py-20'>
      <Head>
        <title>My cart | Furbar Furnitures </title>
      </Head>

      <div className='overflow-auto w-full'>
        <table className='w-full overflow-auto mb-20 place-items-center table-auto'>
          <thead>
            <tr className='bg-gray-200 child:py-3 child:font-normal child:!font-rajdhani'>
              <th>Image</th>
              <th>Product Information</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='child:mx-auto border-collapse border child:border child:px-4 child:p-3 text-brand-gray/80 font-light'>
              <td className='flex items-center justify-center h-full border-none'>
                <Image src={product1} alt='Cart Image' />
              </td>
              <td>
                <div className='flex flex-col gap-2 items-start'>
                  <Link
                    href='products/pendant-chandelier-light'
                    className='hover:text-brand-yellow duration-150 whitespace-nowrap'>
                    Pendant Chandelier Light
                  </Link>
                  <p> &#x20A6; 40,000</p>
                  <p>Size: S</p>
                  <p>Color: White</p>
                </div>
              </td>
              <td>
                <Group className='gap-0 justify-center'>
                  <button
                    className='py-2 w-12 text-white text-center bg-[#494949]'
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
                        'bg-[#494949] w-12 !py-5 rounded-none border-none outline-none ring-none text-white text-center',
                    }}
                  />
                  <button
                    className='py-2 w-12 text-white text-center bg-[#494949]'
                    onClick={() => setQty((prev) => prev + 1)}>
                    +
                  </button>
                </Group>
              </td>
              <td className='text-center whitespace-nowrap'>
                {' '}
                &#x20A6; {numberFormatter(40000 * qty)}
              </td>
              <td className='text-center'>
                <button>
                  <BsTrash3 />
                </button>
              </td>
            </tr>
            <tr className='child:mx-auto border-collapse border child:border child:px-4 child:p-3 text-brand-gray/80 font-light'>
              <td className='flex items-center justify-center h-full border-none'>
                <Image src={product1} alt='Cart Image' />
              </td>
              <td>
                <div className='flex flex-col gap-2 items-start'>
                  <Link
                    href='products/pendant-chandelier-light'
                    className='hover:text-brand-yellow duration-150'>
                    Pendant Chandelier Light
                  </Link>
                  <p> &#x20A6; 40,000</p>
                  <p>Size: S</p>
                  <p>Color: White</p>
                </div>
              </td>
              <td>
                <Group className='gap-0 justify-center'>
                  <button
                    className='py-2 w-12 text-white text-center bg-[#494949]'
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
                        'bg-[#494949] w-12 !py-5 rounded-none border-none outline-none ring-none text-white text-center',
                    }}
                  />
                  <button
                    className='py-2 w-12 text-white text-center bg-[#494949]'
                    onClick={() => setQty((prev) => prev + 1)}>
                    +
                  </button>
                </Group>
              </td>
              <td className='text-center whitespace-nowrap'>
                {' '}
                &#x20A6; {numberFormatter(40000 * qty)}
              </td>
              <td className='text-center'>
                <button>
                  <BsTrash3 />
                </button>
              </td>
            </tr>
            <tr className='child:mx-auto border-collapse border child:border child:px-4 child:p-3 text-brand-gray/80 font-light'>
              <td className='flex items-center justify-center h-full border-none'>
                <Image src={product1} alt='Cart Image' />
              </td>
              <td>
                <div className='flex flex-col gap-2 items-start'>
                  <Link
                    href='products/pendant-chandelier-light'
                    className='hover:text-brand-yellow duration-150 whitespace-nowrap'>
                    Pendant Chandelier Light
                  </Link>
                  <p> &#x20A6; 40,000</p>
                  <p>Size: S</p>
                  <p>Color: White</p>
                </div>
              </td>
              <td>
                <Group className='gap-0 justify-center'>
                  <button
                    className='py-2 w-12 text-white text-center bg-[#494949]'
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
                        'bg-[#494949] w-12 !py-5 rounded-none border-none outline-none ring-none text-white text-center',
                    }}
                  />
                  <button
                    className='py-2 w-12 text-white text-center bg-[#494949]'
                    onClick={() => setQty((prev) => prev + 1)}>
                    +
                  </button>
                </Group>
              </td>
              <td className='text-center'>
                {' '}
                &#x20A6; {numberFormatter(40000 * qty)}
              </td>
              <td className='text-center'>
                <button>
                  <BsTrash3 />
                </button>
              </td>
            </tr>
            <tr className='border child:py-2'>
              <td className='p-4 border col-span-5'>
                <Link
                  href='products'
                  className='bg-[#494949] p-4 text-white uppercase rounded whitespace-nowrap'>
                  Continue Shopping
                </Link>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td className='border px-2'>
                <button
                  type='button'
                  className='border-[#494949] border p-4 text-[#494949] uppercase rounded mx-auto flex'>
                  Clear Cart
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Order Overview */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6  '>
        <div className='space-y-6'>
          <h3 className='text-2xl '>Calculate Shipping</h3>
          <p className='text-brand-gray'>Estimate your shipping fee*</p>
          <Select
            data={[
              { value: 'Nigeria', label: 'Nigeria' },
              { value: 'Ghana', label: 'Ghana' },
              {
                value: 'United States of America',
                label: 'United States of America',
              },
            ]}
            rightSectionWidth={30}
            rightSection={<BiCaretDown />}
            allowDeselect
            placeholder='Select a country'
            searchable
            clearable
            nothingFound='No options'
            classNames={{
              input: 'py-5 rounded-none placeholder:italic',
            }}
          />
          <Select
            data={[
              { value: 'Lagos', label: 'Lagos' },
              { value: 'FCT', label: 'FCT' },
              { value: 'Abia', label: 'Abia' },
              { value: 'Oyo', label: 'Oyo' },
              { value: 'Rivers', label: 'Rivers' },
            ]}
            rightSectionWidth={30}
            rightSection={<BiCaretDown />}
            allowDeselect
            placeholder='Select a city'
            searchable
            clearable
            nothingFound='No options'
            classNames={{
              input: 'py-5 rounded-none placeholder:italic',
            }}
          />
          <TextInput
            placeholder='Postcode/zip'
            classNames={{
              input: 'py-5 rounded-none placeholder:italic',
            }}
          />
          <button
            type='button'
            className='bg-[#494949] p-4 text-white uppercase rounded'>
            Update Totals{' '}
          </button>
        </div>
        <div className='space-y-6'>
          <h3 className='text-2xl '>Coupon Code</h3>
          <p className='text-brand-gray'>
            Enter your coupon code if you have one
          </p>

          <TextInput
            placeholder='Enter your coupon code'
            classNames={{
              input: 'py-5 rounded-none placeholder:italic',
            }}
          />
          <button
            type='button'
            className='bg-[#494949] p-4 text-white uppercase rounded'>
            apply coupon{' '}
          </button>
        </div>
        <div className='space-y-6'>
          <h3 className='text-2xl '>Cart Totals</h3>

          <div className='bg-brand-gray/10 p-6 text-sm'>
            <div className='grid grid-cols-2 gap-4 border-b border-brand-gray/50 py-4'>
              <p>Subtotal</p>
              <p>&#x20A6;600,000.00</p>
            </div>
            <div className='grid grid-cols-2 gap-4 border-b border-brand-gray/50 py-4'>
              <p>Shipping</p>
              <Radio.Group name='shipping'>
                <Group className='flex flex-col items-start gap-1'>
                  <Radio value='flat' label='Flat Rate' checked />
                  <Radio value='free' label='Free Shipping' />
                  <Radio value='local' label='Local Pickup' />
                </Group>
              </Radio.Group>
            </div>
            <div className='grid grid-cols-2 gap-4 py-4'>
              <p>Subtotal</p>
              <p>&#x20A6;600,000.00</p>
            </div>
          </div>

          <Link
            href='checkout'
            className='bg-[#494949] p-4 text-white uppercase rounded block w-max'>
            Proceed to Checkout{' '}
          </Link>
        </div>
      </div>
    </div>
  );
}
