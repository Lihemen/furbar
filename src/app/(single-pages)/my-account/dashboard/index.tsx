import Link from 'next/link';
import React from 'react';

export default function Dashboard() {
  return (
    <div className='flex flex-col gap-6'>
      <h3 className='text-2xl font-light !font-rajdhani'>Dashboard</h3>
      <p>
        Hello Hemense Lan! (if not Hemense Lan{' '}
        <Link
          replace
          href='/auth/login'
          className='hover:text-brand-yellow duration-150 ease-linear'>
          Logout
        </Link>{' '}
        )
      </p>
      <p className='leading-8'>
        From your account dashboard. you can easily check & view your recent
        orders, manage your shipping and billing addresses and edit your
        password and account details.
      </p>
    </div>
  );
}
