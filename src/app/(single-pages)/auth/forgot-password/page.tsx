'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

interface LoginSchema {
  email: string;
}

const schema = yup.object({
  email: yup.string().email('Please provide a valid email address'),
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
        <h2 className='text-4xl'>Reset your Password</h2>

        <div>
          <input
            type='email'
            placeholder='Enter your email'
            {...register('email')}
            className='p-3 outline-none ring-1 ring-brand-gray/30 w-full'
          />
          <span className='text-red-400 text-xs'>{errors.email?.message} </span>
        </div>

        <input
          type='submit'
          value='Reset Password'
          className='text-white bg-brand-yellow uppercase rounded p-3 cursor-pointer w-full px-8'
        />
      </form>
    </div>
  );
}
