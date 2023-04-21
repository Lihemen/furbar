import React from 'react';

import { shortDateFormatter } from '@/lib/formatter';

export default function Orders() {
  return (
    <div className='flex flex-col gap-6 w-full'>
      <h3 className='text-2xl font-light !font-rajdhani'>My Orders</h3>
      <p className='w-full'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
        similique.
      </p>
      <div className='overflow-auto w-full whitespace-nowrap'>
        <table className='table-auto w-full table-striped'>
          <thead>
            <tr className='bg-brand-gray/10 child:font-rajdhani child:font-normal child:p-3 child:border child:border-brand-gray/30'>
              <th>S/N</th>
              <th>Order ID</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>View Receipt</th>
            </tr>
          </thead>
          <tbody>
            <tr className='child:font-rajdhani child:font-normal child:p-3 child:border child:border-brand-gray/30 text-center'>
              <td>1</td>
              <td className='text-left'>
                FUR-
                {Math.ceil(Math.random() * 9999)}-
                {Math.ceil(Math.random() * 9999)}{' '}
              </td>
              <td>{shortDateFormatter(new Date())} </td>
              <td className='text-red-400'>
                <span className='text-red-500 bg-red-50 text-sm rounded p-2'>
                  Cancelled
                </span>
              </td>
              <td> &#x20A6; 199,999.99 </td>
              <td>Nil</td>
            </tr>
            <tr className='child:font-rajdhani child:font-normal child:p-3 child:border child:border-brand-gray/30 text-center'>
              <td>1</td>
              <td className='text-left'>
                FUR-
                {Math.ceil(Math.random() * 9999)}-
                {Math.ceil(Math.random() * 9999)}{' '}
              </td>
              <td>{shortDateFormatter(new Date())} </td>
              <td>
                <span className='text-yellow-500 bg-yellow-50 text-sm rounded p-2'>
                  Pending
                </span>
              </td>
              <td> &#x20A6; 199,999.99 </td>
              <td>Nil</td>
            </tr>
            <tr className='child:font-rajdhani child:font-normal child:p-3 child:border child:border-brand-gray/30 text-center'>
              <td>1</td>
              <td className='text-left'>
                FUR-
                {Math.ceil(Math.random() * 9999)}-
                {Math.ceil(Math.random() * 9999)}{' '}
              </td>
              <td>{shortDateFormatter(new Date())} </td>
              <td>
                <span className='text-green-500 bg-green-50 text-sm rounded p-2'>
                  Completed
                </span>
              </td>
              <td> &#x20A6; 199,999.99 </td>
              <td>
                <button className='hover:underline underline-offset-4'>
                  View
                </button>
              </td>
            </tr>
            <tr className='child:font-rajdhani child:font-normal child:p-3 child:border child:border-brand-gray/30 text-center'>
              <td>1</td>
              <td className='text-left'>
                FUR-
                {Math.ceil(Math.random() * 9999)}-
                {Math.ceil(Math.random() * 9999)}{' '}
              </td>
              <td>{shortDateFormatter(new Date())} </td>
              <td>
                <span className='text-green-500 bg-green-50 text-sm rounded p-2'>
                  Completed
                </span>
              </td>
              <td> &#x20A6; 199,999.99 </td>
              <td>
                <button className='hover:underline underline-offset-4'>
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
