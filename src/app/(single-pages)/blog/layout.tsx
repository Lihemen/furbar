import { SearchNormal1 } from 'iconsax-react';
import Link from 'next/link';
import { BsCalendar2Month } from 'react-icons/bs';

import { shortDateFormatter } from '@/lib/formatter';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 items-start gap-8 section-padding py-24 w-full'>
      <aside className='hidden lg:flex flex-col gap-12 '>
        <form className='flex items-center border border-brand-gray/10 p-8'>
          <input
            type='text'
            placeholder='Search Your Article'
            className='p-3 outline-none focus:ring-brand-yellow ring-1 ring-brand-gray/10 pr-10 font-extralight font-sm tracking-tight w-full'
          />
          <button type='submit'>
            <SearchNormal1
              className='bg-brand-yellow p-3 py-2 ring-1 ring-brand-yellow'
              size={48}
            />
          </button>
        </form>

        <div className='flex flex-col border border-brand-gray/10 p-8 gap-4 text-brand-gray tracking-tight'>
          <h3 className='relative before:absolute before:w-1 before:h-full before:bg-brand-yellow pl-4 before:left-0 uppercase text-xl font-bold !font-rajdhani'>
            Recent Posts
          </h3>
          <div className='border-b py-2 space-y-4 '>
            <h5 className='flex item-center gap-4'>
              <BsCalendar2Month size={18} className='translate-y-[2px]' />{' '}
              {shortDateFormatter(new Date())}{' '}
            </h5>
            <Link
              href='blog/category/this-is-a-blog-post'
              className='line-clamp-2 text-lg font-semibold hover:text-brand-yellow duration-200 !font-rajdhani'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              consectetur voluptatum error placeat beatae labore qui possimus
              nulla mollitia quidem?
            </Link>
          </div>
          <div className='border-b py-2 space-y-4 '>
            <h5 className='flex item-center gap-4'>
              <BsCalendar2Month size={18} className='translate-y-[2px]' />{' '}
              {shortDateFormatter(new Date())}{' '}
            </h5>
            <Link
              href='blog/category/this-is-a-blog-post'
              className='line-clamp-2 text-lg font-semibold hover:text-brand-yellow duration-200 !font-rajdhani'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              consectetur voluptatum error placeat beatae labore qui possimus
              nulla mollitia quidem?
            </Link>
          </div>
          <div className='border-b py-2 space-y-4 '>
            <h5 className='flex item-center gap-4'>
              <BsCalendar2Month size={18} className='translate-y-[2px]' />{' '}
              {shortDateFormatter(new Date())}{' '}
            </h5>
            <Link
              href='blog/category/this-is-a-blog-post'
              className='line-clamp-2 text-lg font-semibold hover:text-brand-yellow duration-200 !font-rajdhani'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              consectetur voluptatum error placeat beatae labore qui possimus
              nulla mollitia quidem?
            </Link>
          </div>
        </div>
        <div className='flex flex-col border border-brand-gray/10 p-8 gap-4 text-brand-gray tracking-tight'>
          <h3 className='relative before:absolute before:w-1 before:h-full before:bg-brand-yellow pl-4 before:left-0 uppercase text-xl font-bold !font-rajdhani'>
            Archives
          </h3>
          <Link
            href='blog/archives/january-2018'
            className='border-b py- line-clamp-2 text-lg font-semibold hover:text-brand-yellow duration-200 !font-rajdhani'>
            January 2018
          </Link>
          <Link
            href='blog/archives/february-2019'
            className='border-b py- line-clamp-2 text-lg font-semibold hover:text-brand-yellow duration-200 !font-rajdhani'>
            February 2019
          </Link>
          <Link
            href='blog/archives/september-2020'
            className='border-b py- line-clamp-2 text-lg font-semibold hover:text-brand-yellow duration-200 !font-rajdhani'>
            September 2020
          </Link>
        </div>
        <div className='flex flex-col border border-brand-gray/10 p-8 gap-4 text-brand-gray tracking-tight'>
          <h3 className='relative before:absolute before:w-1 before:h-full before:bg-brand-yellow pl-4 before:left-0 uppercase text-xl font-bold !font-rajdhani'>
            Subscribe
          </h3>
          <form className='space-y-4'>
            <input
              type='text'
              placeholder='Enter Your Email'
              className='p-3 outline-none focus:ring-brand-yellow ring-1 ring-brand-gray/10 pr-10 font-extralight font-sm tracking-tight placeholder:text-center w-full'
            />
            <input
              type='submit'
              value='Subscribe'
              className='bg-brand-yellow text-white uppercase p-3 w-full'
            />
          </form>
        </div>
        <div className='flex flex-col border border-brand-gray/10 p-8 gap-4 text-brand-gray tracking-tight'>
          <h3 className='relative before:absolute before:w-1 before:h-full before:bg-brand-yellow pl-4 before:left-0 uppercase text-xl font-bold !font-rajdhani'>
            Categories
          </h3>
          <Link
            href='blog/categories?tag=furniture'
            className='border-b py- line-clamp-2 text-lg font-semibold hover:text-brand-yellow duration-200 !font-rajdhani'>
            Furniture
          </Link>
          <Link
            href='blog/categories?tag=ecommerce'
            className='border-b py- line-clamp-2 text-lg font-semibold hover:text-brand-yellow duration-200 !font-rajdhani'>
            eCommerce
          </Link>
          <Link
            href='blog/categories?tag=store-forniture'
            className='border-b py- line-clamp-2 text-lg font-semibold hover:text-brand-yellow duration-200 !font-rajdhani'>
            Store Furniture
          </Link>
          <Link
            href='blog/categories?tag=offers'
            className='border-b py- line-clamp-2 text-lg font-semibold hover:text-brand-yellow duration-200 !font-rajdhani'>
            Offer Products
          </Link>
        </div>
      </aside>
      <div className='col-span-1 lg:col-span-2'>{children}</div>
    </div>
  );
}
