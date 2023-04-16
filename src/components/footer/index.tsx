import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

import call from '@/assets/icon-call.webp';
import logo from '@/assets/logo.webp';
import bitcoin from '@/assets/payment/bitcoin.webp';
import mastercard from '@/assets/payment/mastercard.webp';
import visa from '@/assets/payment/visa-logo.webp';

export default function Footer() {
  return (
    <footer>
      <div className='section-padding bg-brand-purple py-12 flex items-center justify-center gap-12 flex-wrap !font-rajdhani'>
        <Image src={logo} alt='Funbar' />

        <div className='flex items-start gap-8'>
          <Image src={call} alt='Customer Service' />
          <div className='flex-col gap-3 text-xl'>
            <p>Call Us:</p>
            <a href='tel:+2347011056442'>0701 105 6443</a>
          </div>
        </div>
        <div className='flex items-center gap-4 child:w-16'>
          <Image src={bitcoin} alt='Bitcoin' />
          <Image src={visa} alt='visa' />
          <Image src={mastercard} alt='mastercard' />
        </div>
        <div className='flex items-center gap-4'>
          <p className='text-xl'>Subscribe Now:</p>
          <form className='flex items-center'>
            <input
              type='email'
              placeholder='Your Mail'
              className='outline-none ring-1 ring-brand-gray/30 focus:ring-brand-yellow py-2 px-3'
            />
            <button type='submit' className='bg-brand-yellow p-3 px-4'>
              <FiSend />{' '}
            </button>
          </form>
        </div>
      </div>
      <div className='section-padding bg-brand-cream py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-8 font-rubik'>
        {/* Customer Service */}
        <ul className='flex flex-col text-brand-gray gap-2'>
          <h3 className='text-brand-dark-blue font-semibold text-xl mb-3'>
            Customer Service
          </h3>
          <Link
            href='/terms-and-condtions#payment_methods'
            className='hover:text-brand-yellow duration-150'>
            Payment Methods
          </Link>
          <Link
            href='/terms-and-conditions#return_policy'
            className='hover:text-brand-yellow duration-150'>
            Money-back guaranteed
          </Link>
          <Link
            href='/terms-and-conditions#shipping_details'
            className='hover:text-brand-yellow duration-150'>
            Returns Shipping
          </Link>
          <Link
            href='/terms-and-conditions'
            className='hover:text-brand-yellow duration-150'>
            Terms and Conditions
          </Link>
          <Link
            href='/privacy-policy'
            className='hover:text-brand-yellow duration-150'>
            Privacy Policy
          </Link>
        </ul>
        {/* Information Links */}
        <ul className='flex flex-col text-brand-gray gap-2'>
          <h3 className='text-brand-dark-blue font-semibold text-xl mb-3'>
            Information
          </h3>
          <Link
            href='/about-us'
            className='hover:text-brand-yellow duration-150'>
            About Furniture
          </Link>
          <Link
            href='/terms-and-conditions#return_policy'
            className='hover:text-brand-yellow duration-150'>
            How to Shop
          </Link>
          <Link
            href='/company/faqs'
            className='hover:text-brand-yellow duration-150'>
            FAQ
          </Link>
          <Link
            href='/contact-us'
            className='hover:text-brand-yellow duration-150'>
            Contact Us
          </Link>
          <Link
            href='/auth/login'
            className='hover:text-brand-yellow duration-150'>
            Login
          </Link>
        </ul>
        {/* My Account */}
        <ul className='flex flex-col text-brand-gray gap-2'>
          <h3 className='text-brand-dark-blue font-semibold text-xl mb-3'>
            My Account
          </h3>
          <Link
            href='/auth/login'
            className='hover:text-brand-yellow duration-150'>
            Sign in
          </Link>
          <Link href='/cart' className='hover:text-brand-yellow duration-150'>
            View Cart
          </Link>
          <Link
            href='/wishlist'
            className='hover:text-brand-yellow duration-150'>
            Wishlist
          </Link>
          <Link
            href='/my-orders'
            className='hover:text-brand-yellow duration-150'>
            Track My Order
          </Link>
          <Link
            href='/contact-us'
            className='hover:text-brand-yellow duration-150'>
            Help
          </Link>
        </ul>
        {/* Our Stores */}
        <ul className='flex flex-col text-brand-gray gap-2'>
          <h3 className='text-brand-dark-blue font-semibold text-xl mb-3'>
            Our Outlets
          </h3>
          <Link
            href='/terms-and-condtions#payment_methods'
            className='hover:text-brand-yellow duration-150'>
            Abuja - (Wuse)
          </Link>
          <Link
            href='/terms-and-conditions#return_policy'
            className='hover:text-brand-yellow duration-150'>
            Abuja - (Jabi)
          </Link>
          <Link
            href='/terms-and-conditions#shipping_details'
            className='hover:text-brand-yellow duration-150'>
            Lagos
          </Link>
          <Link
            href='/terms-and-conditions'
            className='hover:text-brand-yellow duration-150'>
            Enugu
          </Link>
          <Link
            href='/privacy-policy'
            className='hover:text-brand-yellow duration-150'>
            Port Harcourt
          </Link>
        </ul>
        {/* About Us */}
        <ul className='flex flex-col text-brand-gray gap-2'>
          <h3 className='text-brand-dark-blue font-semibold text-xl mb-3'>
            About Us
          </h3>
          <p className='line-clamp-3'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            molestiae quas inventore aperiam corrupti exercitationem. At, fugit
            illo quis tempore quibusdam provident consequuntur! Qui adipisci
            molestiae labore eum nemo obcaecati.
          </p>
          <ul className='flex gap-6 items-center pt-4 text-2xl'>
            <a href='' target='_blank' rel='noreferrer noopener'>
              <FaWhatsapp />{' '}
            </a>
            <a href='' target='_blank' rel='noreferrer noopener'>
              <FaTwitter />{' '}
            </a>
            <a href='' target='_blank' rel='noreferrer noopener'>
              <FaFacebook />{' '}
            </a>
            <a href='' target='_blank' rel='noreferrer noopener'>
              <FaYoutube />{' '}
            </a>
          </ul>
        </ul>
      </div>
      <p className='text-center py-6 bg-white'>
        &copy; {new Date().getFullYear()} Furbar | Developed with &hearts; by{' '}
        <a href='https://hemense.net' target='_blank' rel='noreferrer noopener'>
          Hemense Lan
        </a>
      </p>
    </footer>
  );
}
