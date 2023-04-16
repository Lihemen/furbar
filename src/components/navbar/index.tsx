'use client';

import { ProfileCircle, SearchNormal1 } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { RiShoppingBag2Line } from 'react-icons/ri';

import cart1 from '@/assets/cart-1.webp';
import logo from '@/assets/logo.webp';
import { Drawer, Menu } from '@mantine/core';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  function stickNavbar() {
    let windowHeight = window.scrollY;
    setScrolled(windowHeight > 80 ? true : false);
  }

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);
  return (
    <header>
      <nav
        className={`section-padding py-4 w-full flex items-center justify-between transition-[top] ease-linear  ${
          scrolled
            ? 'bg-white top-0 fixed left-0 z-10 shadow-md'
            : 'absolute top-8'
        } `}>
        <Image src={logo} alt='Funbar' />
        <ul className='items-center uppercase gap-10 text-sm font-semibold tracking-wider hidden lg:flex'>
          <Link href='/'>Home</Link>
          <Link href='/about-us'>About</Link>
          <Link href='/products'>Shop</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/contact-us'>Contact</Link>
        </ul>
        <ul className='gap-8 items-center hidden lg:flex'>
          <Menu
            position='bottom-end'
            transitionProps={{ transition: 'pop-top-left', duration: 150 }}>
            <Menu.Target>
              <button>
                <SearchNormal1 size={22} />
              </button>
            </Menu.Target>
            <Menu.Dropdown className='bg-white p-4'>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Enter your search term...'
                  className='w-full outline-none rounded-md ring-brand-gray ring-1 py-3 px-4 pr-16 focus:ring-2 focus:ring-brand-yellow duration-200 transition'
                />
                <SearchNormal1
                  className='absolute top-1/2 -translate-y-1/2 right-4'
                  size={18}
                />
              </div>
            </Menu.Dropdown>
          </Menu>
          <Menu
            position='bottom-end'
            transitionProps={{ transition: 'pop-top-left', duration: 150 }}>
            <Menu.Target>
              <button>
                <ProfileCircle size={22} />
              </button>
            </Menu.Target>
            <Menu.Dropdown className='bg-white px-2'>
              <Menu.Item>
                <Link href='/my-account'>My Account</Link>
              </Menu.Item>
              <Menu.Item>
                <Link href='/checkout'>Checkout</Link>
              </Menu.Item>
              <Menu.Item>
                <Link href='/auth/login'>Sign In</Link>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Menu
            position='bottom-end'
            transitionProps={{ transition: 'pop-top-left', duration: 150 }}>
            <Menu.Target>
              <button className='relative'>
                <RiShoppingBag2Line size={24} />
                <span className='rounded-full h-5 w-5 text-center flex items-center justify-center text-sm bg-brand-yellow text-white absolute -top-3 -right-3'>
                  3
                </span>
              </button>
            </Menu.Target>
            <Menu.Dropdown className='bg-white px-2 pb-20 '>
              <div className='overflow-scroll max-h-[30rem]'>
                <Menu.Item className=''>
                  <Link
                    href='/products/123'
                    className='border-b-2 py-4 border-brand-gray/10 grid grid-cols-3 gap-4 relative'>
                    <span className='bg-brand-yellow h-6 w-6 rounded-full flex items-center justify-center text-white absolute left-0 top-3'>
                      x1
                    </span>
                    <Image
                      src={cart1}
                      alt='Product Image'
                      className='bg-gray-100 border border-gray-400 col-span-1 inline-flex'
                    />
                    <div className='flex flex-col col-span-2 gap-2'>
                      <h6 className='font-bold'>High Quality Vase Bottle</h6>
                      <p className='text-brand-yellow font-bold'>
                        &#x20A6;19,999.99
                      </p>
                      <span className='text-gray-400 font-light'>
                        Color: Blue
                      </span>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item className=''>
                  <Link
                    href='/products/123'
                    className='border-b-2 py-4 border-brand-gray/10 grid grid-cols-3 gap-4 relative'>
                    <span className='bg-brand-yellow h-6 w-6 rounded-full flex items-center justify-center text-white absolute left-0 top-3'>
                      x1
                    </span>
                    <Image
                      src={cart1}
                      alt='Product Image'
                      className='bg-gray-100 border border-gray-400 col-span-1 inline-flex'
                    />
                    <div className='flex flex-col col-span-2 gap-2'>
                      <h6 className='font-bold'>High Quality Vase Bottle</h6>
                      <p className='text-brand-yellow font-bold'>
                        &#x20A6;19,999.99
                      </p>
                      <span className='text-gray-400 font-light'>
                        Color: Blue
                      </span>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item className=''>
                  <Link
                    href='/products/123'
                    className='border-b-2 py-4 border-brand-gray/10 grid grid-cols-3 gap-4 relative'>
                    <span className='bg-brand-yellow h-6 w-6 rounded-full flex items-center justify-center text-white absolute left-0 top-3'>
                      x1
                    </span>
                    <Image
                      src={cart1}
                      alt='Product Image'
                      className='bg-gray-100 border border-gray-400 col-span-1 inline-flex'
                    />
                    <div className='flex flex-col col-span-2 gap-2'>
                      <h6 className='font-bold'>High Quality Vase Bottle</h6>
                      <p className='text-brand-yellow font-bold'>
                        &#x20A6;19,999.99
                      </p>
                      <span className='text-gray-400 font-light'>
                        Color: Blue
                      </span>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item className=''>
                  <Link
                    href='/products/123'
                    className='border-b-2 py-4 border-brand-gray/10 grid grid-cols-3 gap-4 relative'>
                    <span className='bg-brand-yellow h-6 w-6 rounded-full flex items-center justify-center text-white absolute left-0 top-3'>
                      x1
                    </span>
                    <Image
                      src={cart1}
                      alt='Product Image'
                      className='bg-gray-100 border border-gray-400 col-span-1 inline-flex'
                    />
                    <div className='flex flex-col col-span-2 gap-2'>
                      <h6 className='font-bold'>High Quality Vase Bottle</h6>
                      <p className='text-brand-yellow font-bold'>
                        &#x20A6;19,999.99
                      </p>
                      <span className='text-gray-400 font-light'>
                        Color: Blue
                      </span>
                    </div>
                  </Link>
                </Menu.Item>
                <Menu.Item className=''>
                  <Link
                    href='/products/123'
                    className='border-b-2 py-4 border-brand-gray/10 grid grid-cols-3 gap-4 relative'>
                    <span className='bg-brand-yellow h-6 w-6 rounded-full flex items-center justify-center text-white absolute left-0 top-3'>
                      x1
                    </span>
                    <Image
                      src={cart1}
                      alt='Product Image'
                      className='bg-gray-100 border border-gray-400 col-span-1 inline-flex'
                    />
                    <div className='flex flex-col col-span-2 gap-2'>
                      <h6 className='font-bold'>High Quality Vase Bottle</h6>
                      <p className='text-brand-yellow font-bold'>
                        &#x20A6;19,999.99
                      </p>
                      <span className='text-gray-400 font-light'>
                        Color: Blue
                      </span>
                    </div>
                  </Link>
                </Menu.Item>
              </div>

              <button className='p-4 bg-[#494949] text-white hover:bg-brand-yellow absolute bottom-3 w-[calc(100%-theme(space.4))] duration-300 ease-out'>
                Checkout
              </button>
            </Menu.Dropdown>
          </Menu>
        </ul>

        <button
          onClick={() => setShowMobileNav((s) => !s)}
          className='font-bold font-2xl lg:hidden'>
          <CiMenuFries size={32} />{' '}
        </button>
        <Drawer
          onClose={() => setShowMobileNav(false)}
          opened={showMobileNav}
          position='right'
          overlayProps={{ opacity: 0.5, blur: 4 }}
          size='xs'>
          <ul className='items-start uppercase text-sm font-semibold tracking-wider flex flex-col hover:child:bg-brand-yellow/20 child:p-4 child:flex w-full child:w-full border-b'>
            <Link onClick={() => setShowMobileNav(false)} href='/'>
              Home
            </Link>
            <Link onClick={() => setShowMobileNav(false)} href='/about-us'>
              About
            </Link>
            <Link onClick={() => setShowMobileNav(false)} href='/products'>
              Shop
            </Link>
            <Link onClick={() => setShowMobileNav(false)} href='/blog'>
              Blog
            </Link>
            <Link onClick={() => setShowMobileNav(false)} href='/cart'>
              My Cart
            </Link>
            <Link onClick={() => setShowMobileNav(false)} href='/contact-us'>
              Contact
            </Link>
          </ul>
          <div className='grid grid-cols-2 gap-2 child:p-4 child:border child:border-brand-gray/50 pt-10 text-center uppercase hover:child:bg-brand-yellow/20 '>
            <Link onClick={() => setShowMobileNav(false)} href='/auth/login'>
              Sign In
            </Link>
            <Link
              onClick={() => setShowMobileNav(false)}
              href='/auth/create-account'>
              Sign Up
            </Link>
          </div>
        </Drawer>
      </nav>
    </header>
  );
}
