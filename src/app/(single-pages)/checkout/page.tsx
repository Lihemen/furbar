'use client';

import React, { useState } from 'react';
import { BiCaretDown } from 'react-icons/bi';

import {
  Checkbox,
  Group,
  Radio,
  Select,
  TextInput,
  Textarea,
} from '@mantine/core';

export default function Checkout() {
  const [createAccountOption, setCreateAccountOption] = useState(false);
  const [diffShippingAddress, setDiffShippingAddress] = useState(false);

  return (
    <div className='grid md:grid-cols-3 gap-10 section-padding py-20 w-full '>
      <div className='md:col-span-2 space-y-6'>
        <h3 className='text-2xl relative before:absolute before:-bottom-2 before:w-1/2 before:h-[2px] before:bg-[#494949] !font-rajdhani font-normal w-max '>
          Billing Details
        </h3>

        <form className='w-full flex flex-col gap-6'>
          <Group className='items-center child:w-full grid grid-cols-1 md:grid-cols-2'>
            <TextInput
              required
              placeholder='Firstname *'
              classNames={{
                input: 'p-5  rounded-none placeholder:italic',
              }}
            />
            <TextInput
              required
              placeholder='Last Name *'
              classNames={{
                input: 'p-5 rounded-none placeholder:italic',
              }}
            />
          </Group>
          <TextInput
            placeholder='Company Name'
            classNames={{
              input: 'p-5 rounded-none placeholder:italic',
            }}
          />
          <Select
            required
            data={[
              { value: 'Australia', label: 'Australia' },
              { value: 'Bahrain', label: 'Bahrain' },
              { value: 'Nigeria', label: 'Nigeria' },
              { value: 'United Kingdom', label: 'United Kingdom' },
              {
                value: 'United States of America',
                label: 'United States of America',
              },
            ]}
            rightSectionWidth={30}
            rightSection={<BiCaretDown />}
            allowDeselect
            placeholder='Select a country'
            withAsterisk
            searchable
            clearable
            nothingFound='No options'
            classNames={{
              input: 'p-5 rounded-none placeholder:italic',
            }}
          />
          <p className='text-brand-gray/90'>Street Address *</p>
          <TextInput
            placeholder='House Number and street Name *'
            required
            classNames={{
              input: 'p-5 rounded-none placeholder:italic',
            }}
          />
          <TextInput
            placeholder='Apartment, suite, unit, etc. (optional)'
            classNames={{
              input: 'p-5 rounded-none placeholder:italic',
            }}
          />
          <TextInput
            placeholder='Town / City *'
            required
            classNames={{
              input: 'p-5 rounded-none placeholder:italic',
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
            placeholder='Select a State'
            nothingFound='No options'
            classNames={{
              input: 'py-5 rounded-none placeholder:italic',
            }}
          />
          <TextInput
            placeholder='Postcode / Zip '
            inputMode='numeric'
            type='number'
            autoComplete='postal-code'
            required
            classNames={{
              input: 'p-5 rounded-none placeholder:italic',
            }}
          />
          <Group className='items-center child:w-full grid grid-cols-1 md:grid-cols-2'>
            <TextInput
              required
              type='tel'
              inputMode='tel'
              placeholder='Phone *'
              autoComplete='tel'
              classNames={{
                input: 'p-5  rounded-none placeholder:italic',
              }}
            />
            <TextInput
              required
              type='email'
              inputMode='email'
              placeholder='Email Address *'
              classNames={{
                input: 'p-5 rounded-none placeholder:italic',
              }}
            />
          </Group>

          <Group className='grid grid-cols-1 gap-6'>
            <Checkbox
              label='Create an Account?'
              classNames={{ label: 'text-brand-gray/90 text-base' }}
              checked={createAccountOption}
              onChange={(event) =>
                setCreateAccountOption(event.currentTarget.checked)
              }
            />

            {createAccountOption && (
              <TextInput
                required
                type='password'
                inputMode='text'
                placeholder='Accouunt Password *'
                autoComplete='new-password'
                classNames={{
                  input: 'p-5 rounded-none placeholder:italic',
                }}
              />
            )}
          </Group>
          <Group className='grid grid-cols-1 gap-6'>
            <Checkbox
              label='Ship to Different Address?'
              classNames={{ label: 'text-brand-gray/90 text-base' }}
              checked={diffShippingAddress}
              onChange={(event) =>
                setDiffShippingAddress(event.currentTarget.checked)
              }
            />

            {diffShippingAddress && (
              <>
                <TextInput
                  placeholder='House Number and street Name *'
                  required
                  classNames={{
                    input: 'p-5 rounded-none placeholder:italic',
                  }}
                />
                <TextInput
                  placeholder='Apartment, suite, unit, etc. (optional)'
                  classNames={{
                    input: 'p-5 rounded-none placeholder:italic',
                  }}
                />
                <TextInput
                  placeholder='Town / City *'
                  required
                  classNames={{
                    input: 'p-5 rounded-none placeholder:italic',
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
                  placeholder='Select a State'
                  nothingFound='No options'
                  classNames={{
                    input: 'py-5 rounded-none placeholder:italic',
                  }}
                />
                <TextInput
                  placeholder='Postcode / Zip '
                  inputMode='numeric'
                  type='number'
                  autoComplete='postal-code'
                  required
                  classNames={{
                    input: 'p-5 rounded-none placeholder:italic',
                  }}
                />
              </>
            )}
          </Group>

          <Textarea
            classNames={{
              input: 'bg-brand-gray/10 h-32 placeholder:italic',
              label: 'font-normal text-brand-gray/90 pb-4 text-base',
            }}
            placeholder='Notes about your order, e.g. special notes for delivery'
            label='Order Details'
          />
        </form>
      </div>
      <div className='border border-brand-gray/30 p-8 h-max space-y-4 items-end'>
        <h3 className='text-2xl relative before:absolute before:-bottom-2 before:w-1/2 before:h-[2px] before:bg-[#494949] !font-rajdhani font-normal w-max'>
          Your Order
        </h3>
        <div className='grid grid-cols-2 gap-4 border-b border-brand-gray/50 py-4'>
          <p>Product</p>
          <p>Total</p>
        </div>
        <div className='grid grid-cols-2 gap-4 border-b border-brand-gray/50 py-4 text-brand-gray'>
          <p>Bodysuit With Long Sleeves × 1</p>
          <p>&#x20A6;600,000.00</p>
          <p>Bodysuit With Long Sleeves × 1</p>
          <p>&#x20A6;600,000.00</p>
          <p>Bodysuit With Long Sleeves × 1</p>
          <p>&#x20A6;600,000.00</p>
        </div>
        <div className='grid grid-cols-2 gap-4 border-b border-brand-gray/10 py-4'>
          <p>Subtotal</p>
          <p>&#x20A6;600,000.00</p>
        </div>
        <div className='grid grid-cols-2 gap-4 border-b border-brand-gray/10 py-4'>
          <p>Shipping</p>
          <Radio.Group name='shipping'>
            <Group className='flex flex-col items-start gap-4'>
              <Radio value='flat' label='Flat Rate' checked />
              <Radio value='free' label='Free Shipping' />
              <Radio value='local' label='Local Pickup' />
            </Group>
          </Radio.Group>
        </div>
        <div className='grid grid-cols-2 gap-4 py-4'>
          <p>Total</p>
          <p className='text-lg'>&#x20A6;600,000.00</p>
        </div>
        <Radio.Group name='paymentMethod'>
          <Group className='flex flex-col items-start gap-4'>
            <Radio value='cash_on_delivery' label='Cash on Delivery' checked />
            <Radio value='cheque_payments' label='Cheque' />
            <Radio value='card' label='Card Payment' />
          </Group>
        </Radio.Group>

        <button className='w-full p-4 bg-brand-yellow text-white uppercase'>
          Place Order{' '}
        </button>
      </div>
    </div>
  );
}
