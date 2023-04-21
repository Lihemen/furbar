import React from 'react';

import { Group, TextInput } from '@mantine/core';

export default function AccountDetails() {
  return (
    <div className='flex flex-col gap-6 w-full'>
      <h3 className='text-2xl font-light !font-rajdhani'>Account Details</h3>
      <p className='w-full'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
        similique.
      </p>
      <form className='w-full flex flex-col gap-6'>
        <Group className='items-center child:w-full grid grid-cols-1 md:grid-cols-2'>
          <TextInput
            required
            placeholder='Firstname *'
            autoComplete='given-name'
            classNames={{
              input: 'p-5  rounded-none placeholder:italic',
            }}
          />
          <TextInput
            required
            placeholder='Last Name *'
            autoComplete='family-name'
            classNames={{
              input: 'p-5 rounded-none placeholder:italic',
            }}
          />
        </Group>
        <TextInput
          placeholder='Display Name'
          autoComplete='username'
          classNames={{
            input: 'p-5 rounded-none placeholder:italic',
          }}
        />
        <TextInput
          placeholder='Email Address'
          type='email'
          autoComplete='email'
          classNames={{
            input: 'p-5 rounded-none placeholder:italic',
          }}
        />
      </form>
      <h3 className='text-2xl font-light !font-rajdhani'>Password Change</h3>
      <form className='w-full flex flex-col gap-6'>
        <TextInput
          required
          placeholder='Current password *'
          type='password'
          autoComplete='current-password'
          classNames={{
            input: 'p-5  rounded-none placeholder:italic',
          }}
        />
        <Group className='items-center child:w-full grid grid-cols-1 md:grid-cols-2'>
          <TextInput
            required
            placeholder='New password *'
            type='password'
            autoComplete='new-password'
            classNames={{
              input: 'p-5  rounded-none placeholder:italic',
            }}
          />
          <TextInput
            required
            placeholder='Confirm Password *'
            type='password'
            classNames={{
              input: 'p-5 rounded-none placeholder:italic',
            }}
          />
        </Group>
      </form>

      <button className='bg-brand-yellow rounded text-white flex items-center gap-2 justify-center text-center uppercase p-4 hover:bg-brand-dark-blue active:scale-95 duration-150 ease-in-out w-max'>
        Save changes
      </button>
    </div>
  );
}
