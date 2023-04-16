'use client';

import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

interface CreateAccountSchema {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const schema = yup.object({
  firstname: yup
    .string()
    .required('Please enter first name')
    .min(2, 'Firstname must be at least 2 characters'),
  lastname: yup
    .string()
    .required('Please enter last name')
    .min(2, 'Lastname must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Please provide a valid email address'),
  password: yup.string().required('Password is required'),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateAccountSchema>({ resolver: yupResolver(schema) });

  const submitForm = (data: CreateAccountSchema) => {
    console.log(data);
    reset();
  };

  return (
    <div className=' left-1/2 section-padding py-20 flex items-center justify-center w-full'>
      <form
        className='font-light flex flex-col gap-6 lg:w-3/5 w-11/12 '
        onSubmit={handleSubmit(submitForm)}>
        <h2 className='text-4xl'>Create an account</h2>

        <div>
          <input
            type='text'
            placeholder='Enter your First Name'
            autoComplete='given-name'
            {...register('firstname')}
            className='p-3 outline-none border border-brand-gray/30 w-full'
          />
          <span className='text-red-400 text-xs'>
            {errors.firstname?.message}{' '}
          </span>
        </div>
        <div>
          <input
            type='text'
            placeholder='Enter your Last Name'
            autoComplete='family-name'
            {...register('lastname')}
            className='p-3 outline-none border border-brand-gray/30 w-full'
          />
          <span className='text-red-400 text-xs'>
            {errors.lastname?.message}{' '}
          </span>
        </div>
        <div>
          <input
            type='email'
            placeholder='Enter your email'
            autoComplete='email'
            {...register('email')}
            className='p-3 outline-none border border-brand-gray/30 w-full'
          />
          <span className='text-red-400 text-xs'>{errors.email?.message} </span>
        </div>

        <div>
          <input
            type='password'
            placeholder='Password'
            autoComplete='new-password'
            {...register('password')}
            className='p-3 outline-none border border-brand-gray/30 w-full'
          />
          <span className='text-red-400 text-xs'>
            {errors.password?.message}{' '}
          </span>
        </div>

        <input
          type='submit'
          value='Create Account'
          className='text-white bg-brand-yellow uppercase rounded p-3 cursor-pointer w-max px-8'
        />

        <Link
          href='auth/login'
          className='hover:underline hover:text-brand-yellow duration-150 ease-in'>
          Already have an Account? Sign In{' '}
        </Link>
      </form>
    </div>
  );
}
