'use client';

import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

interface LoginSchema {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().email('Please provide a valid email address'),
  password: yup.string().required('Password is required'),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchema>({ resolver: yupResolver(schema) });

  const submitForm = (data: LoginSchema) => {
    console.log(data);
    reset();
  };

  return (
    <div className=' left-1/2 section-padding py-20 flex items-center justify-center w-full'>
      <form
        className='font-light flex flex-col gap-6 lg:w-3/5 w-11/12 '
        onSubmit={handleSubmit(submitForm)}>
        <h2 className='text-4xl'>Login to your account</h2>

        <div>
          <input
            type='email'
            placeholder='Enter your email'
            {...register('email')}
            className='p-3 outline-none border border-brand-gray/30 w-full'
          />
          <span className='text-red-400 text-xs'>{errors.email?.message} </span>
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
            {...register('password')}
            className='p-3 outline-none border border-brand-gray/30 w-full'
          />
          <span className='text-red-400 text-xs'>
            {errors.password?.message}{' '}
          </span>
        </div>

        <label htmlFor='remember'>
          <input
            type='checkbox'
            name='remember'
            id='remember'
            className='mr-4'
          />
          Remember Me
        </label>

        <input
          type='submit'
          value='Login'
          className='text-white bg-brand-yellow uppercase rounded p-3 cursor-pointer w-max px-8'
        />

        <Link
          href='auth/forgot-password'
          className='hover:underline hover:text-brand-yellow duration-150 ease-in'>
          Lost your Password?{' '}
        </Link>
        <Link
          href='auth/create-account'
          className='hover:underline hover:text-brand-yellow duration-150 ease-in'>
          No Account? Create One{' '}
        </Link>
      </form>
    </div>
  );
}
