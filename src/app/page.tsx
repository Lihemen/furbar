import Image from 'next/image';

import brand1 from '@/assets/brands/brand-1.webp';
import brand2 from '@/assets/brands/brand-2.webp';
import brand3 from '@/assets/brands/brand-3.webp';
import brand4 from '@/assets/brands/brand-4.webp';
import brand5 from '@/assets/brands/brand-5.webp';
import banner from '@/assets/page-banner.webp';
import paymentIcon from '@/assets/payment-icon.webp';
import shippingIcon from '@/assets/shipping-icon.webp';
import supportIcon from '@/assets/support-icon.webp';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import NewArrivals from '@/components/new_arrivals';
import SalesCountdown from '@/components/sales_countdown';

export const metadata = {
  title: 'Welcome to Furbar Furniture House',
  description: 'Home of bespoke furniture and fittings',
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className='section-padding py-10 pb-24 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-thin'>
        <div className='border border-brand-yellow rounded flex flex-col text-center items-center justify-center p-8 gap-8'>
          <Image src={shippingIcon} alt='shipping' />
          <h3 className='text-2xl '>Free Shipping</h3>
          <p className='text-brand-gray'>
            Get 10% cash back, free shipping, free returns, and more at 1000+
            top retailers!
          </p>
        </div>
        <div className='border border-brand-yellow rounded flex flex-col text-center items-center justify-center p-8 gap-8'>
          <Image src={paymentIcon} alt='payment' />
          <h3 className='text-2xl '>Safe Payment</h3>
          <p className='text-brand-gray'>
            Get 10% cash back, free shipping, free returns, and more at 1000+
            top retailers!
          </p>
        </div>
        <div className='border border-brand-yellow rounded flex flex-col text-center items-center justify-center p-8 gap-8'>
          <Image src={supportIcon} alt='support' />
          <h3 className='text-2xl '>Online Support</h3>
          <p className='text-brand-gray'>
            Get 10% cash back, free shipping, free returns, and more at 1000+
            top retailers!
          </p>
        </div>
      </div>
      <NewArrivals />
      <SalesCountdown />
      <div className='section-padding py-48 '>
        <div
          className='min-h-[18rem] bg-cover bg-center flex flex-col justify-center px-12 gap-2'
          style={{ backgroundImage: `url('${banner.src}')` }}>
          <h4 className='font-thin text-xl'>Furniture eCommerce</h4>
          <p className='font-semibold text-4xl'>
            Minimalist <br /> Store
          </p>
        </div>
      </div>
      <div className='section-padding pb-32'>
        <div className='flex flex-wrap items-center justify-center child:p-8 child:border child:border-brand-gray/50 child:border-collapse'>
          <div>
            <Image src={brand1} alt='Brand 1' />
          </div>
          <div>
            <Image src={brand2} alt='Brand 2' />
          </div>
          <div>
            <Image src={brand3} alt='Brand 3' />
          </div>
          <div>
            <Image src={brand4} alt='Brand 4' />
          </div>
          <div>
            <Image src={brand5} alt='Brand 5' />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
