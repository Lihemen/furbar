'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import {
  AiOutlineCreditCard,
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import { IoIosLogOut } from 'react-icons/io';
import { RiMapPin2Line } from 'react-icons/ri';

import { Tabs } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import AccountDetails from './account-details';
import Address from './address';
import Dashboard from './dashboard';
import Orders from './orders';
import PaymentMethods from './payment-methods';

export default function MyAccount() {
  const lg = useMediaQuery('(min-width: 1024px)');
  const router = useRouter();

  return (
    <Tabs
      defaultValue='dashboard'
      orientation={lg ? 'vertical' : 'horizontal'}
      className='section-padding py-20 lg'
      styles={{
        tab: {
          padding: '1rem',
          '&[data-active]': {
            border: 'none',
            backgroundColor: '#f2a100',
            color: 'white',
          },
          '&:hover': {
            border: 'none',
          },
        },
      }}>
      <Tabs.List className='lg:child:w-[18rem] bg-brand-gray/10 border-none child:text-base child:child:flex child:child:gap-4 child:child:items-center h-max'>
        <Tabs.Tab value='dashboard'>
          <AiOutlineDashboard /> <span>Dashboard</span>
        </Tabs.Tab>
        <Tabs.Tab value='orders'>
          <AiOutlineShoppingCart /> Orders
        </Tabs.Tab>
        <Tabs.Tab value='payment-methods'>
          <AiOutlineCreditCard /> Payment Methods
        </Tabs.Tab>
        <Tabs.Tab value='address'>
          <RiMapPin2Line /> Address
        </Tabs.Tab>
        <Tabs.Tab value='account-details'>
          <AiOutlineUser /> Account Details
        </Tabs.Tab>
        <Tabs.Tab
          value='logout'
          onClick={() =>
            router.replace('/auth/login', { forceOptimisticNavigation: true })
          }>
          <IoIosLogOut /> Logout
        </Tabs.Tab>
      </Tabs.List>
      <div className='py-10 lg:pl-8 lg:py-0 text-brand-gray w-full '>
        <Tabs.Panel value='dashboard'>
          <Dashboard />
        </Tabs.Panel>
        <Tabs.Panel value='orders'>
          <Orders />
        </Tabs.Panel>
        <Tabs.Panel value='payment-methods'>
          <PaymentMethods />
        </Tabs.Panel>
        <Tabs.Panel value='address'>
          <Address />
        </Tabs.Panel>
        <Tabs.Panel value='account-details'>
          <AccountDetails />
        </Tabs.Panel>
      </div>
    </Tabs>
  );
}
