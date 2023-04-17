import { SearchNormal1 } from 'iconsax-react';
import Image from 'next/image';
import React from 'react';
import { RiHeartLine, RiShoppingBag2Line } from 'react-icons/ri';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className='space-y-4 group'>
      <div className='relative overflow-y-hidden'>
        <Image
          className='bg-[#f8f8f8] !w-full min-h-[18rem]'
          src={product.image}
          width={100}
          height={100}
          alt={product.name}
        />
        <ul className='bg-slate-950/70 flex flex-col items-center w-max absolute top-full right-0 text-white/80 child:p-2 child:cursor-pointer hover:child:bg-brand-yellow group-hover:overflow-y-visible translate-y-full group-hover:-translate-y-full transition-all duration-300'>
          <button>
            <SearchNormal1 size={26} />
          </button>
          <button>
            <RiShoppingBag2Line size={26} />
          </button>
        </ul>
      </div>
      <div className='flex items-start justify-between '>
        <div className='space-y-2'>
          <h3 className='text-brand-gray'>{product.name} </h3>
          <p className='text-brand-yellow'>&#x20A6;{product.price} </p>
        </div>
        <button className='cursor-pointer group-hover:bg-slate-950/70 group-hover:text-white/80 duration-300 hover:bg-brand-yellow p-2'>
          <RiHeartLine size={26} />
        </button>
      </div>
    </div>
  );
}
