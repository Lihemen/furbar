import { SearchNormal1 } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiHeartLine, RiShoppingBag2Line } from 'react-icons/ri';

import { numberFormatter } from '@/lib/formatter';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className='space-y-4'>
      <div className='relative group overflow-y-hidden'>
        <Link href={`products/${product.slug}`}>
          <Image
            className='bg-[#f8f8f8] !w-full min-h-[18rem]'
            src={product.image}
            alt={product.name}
            width={100}
            height={100}
          />
        </Link>
        <ul className='bg-slate-950/70 flex items-center w-max absolute top-full left-1/2 -translate-x-1/2 text-white/80 child:p-2 child:cursor-pointer hover:child:bg-brand-yellow group-hover:overflow-y-visible translate-y-full group-hover:-translate-y-full transition-all duration-300'>
          <Link href={`products/${product.slug}`}>
            <SearchNormal1 size={26} />
          </Link>
          <li>
            <RiShoppingBag2Line size={26} />
          </li>
          <li>
            <RiHeartLine size={26} />
          </li>
        </ul>
      </div>
      <h3 className='text-brand-gray'>{product.name} </h3>
      <p className='text-brand-yellow'>
        &#x20A6;{numberFormatter(product.price)}{' '}
      </p>
    </div>
  );
}
