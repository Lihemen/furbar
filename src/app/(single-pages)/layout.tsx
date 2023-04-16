'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

import pagebanner from '@/assets/page-banner.webp';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { capitalizeWords } from '@/lib/capitalize_words';

export default function SinglePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const paths = usePathname()
    .split('/')
    .filter((el) => el !== '');

  return (
    <>
      <Navbar />
      <div
        className='h-[clamp(24rem,50vh,600px)] bg-center flex flex-col gap-4 justify-center items-start pt-24 section-padding'
        style={{ backgroundImage: `url('${pagebanner.src}')` }}>
        <h1 className='text-3xl uppercase font-serif text-white'>
          {capitalizeWords(paths[paths.length - 1])}
        </h1>
        <h1 className='text-white uppercase font-thin text-sm font-serif'>
          <span className='text-brand-dark-blue'>Home </span>
          {paths.map((path) => (
            <React.Fragment key={path}>
              &gt; {capitalizeWords(path)}{' '}
            </React.Fragment>
          ))}{' '}
        </h1>
      </div>
      {children}

      <Footer />
    </>
  );
}
