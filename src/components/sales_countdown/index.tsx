'use client';

import Image from 'next/image';
import React from 'react';

import countdownImg from '@/assets/countdown.webp';
import { useCountdown } from '@/lib/use_countdown';

export default function SalesCountdown() {
  const [days, hours, minutes, seconds] = useCountdown(new Date('2023/08/24'));
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 section-padding bg-[#f8f8f8] place-items-center !font-rajdhani'>
      <div className='space-y-8 pt-10'>
        <h2 className='text-4xl font-semibold'>
          Chair Collection <span className='text-brand-yellow'>50%</span> Off
        </h2>
        <p className='line-clamp-4 leading-8 text-brand-gray'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          iste soluta esse. Dolore exercitationem doloremque a pariatur
          consectetur recusandae maiores deserunt molestias accusamus eos ipsam
          tempora, magni eveniet voluptatum facilis qui saepe mollitia
          distinctio ab! Consequuntur veritatis quia laboriosam praesentium
          aspernatur illo, perspiciatis quae, sit dolorem officiis, possimus
          officia error illum? Laborum dicta at libero nihil vitae repellendus
          ad fugiat?
        </p>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-4 tracking-wider'>
          <div className='flex flex-col'>
            <h3 className='font-semibold text-5xl'>{days} :</h3>
            <span className='text-brand-gray text-lg'>DAYS</span>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-semibold text-5xl'>{hours} :</h3>
            <span className='text-brand-gray text-lg'>HOURS</span>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-semibold text-5xl'>{minutes} :</h3>
            <span className='text-brand-gray text-lg'>MINS</span>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-semibold text-5xl'>{seconds}</h3>
            <span className='text-brand-gray text-lg'>SECS</span>
          </div>
        </div>
      </div>
      <div className='relative z-[2] overflow-hidden py-20 h-full'>
        <Image src={countdownImg} alt='Chair' />
        <div className='absolute w-64 h-64 rounded-full bg-[#ffa987] -bottom-16 right-10 -z-[1]'></div>
        <div className='absolute w-[23rem] h-[23rem] rounded-full bg-[#ffb300] top-10 right-16 -z-[1]'></div>
      </div>
    </div>
  );
}
