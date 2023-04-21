import React from 'react';

import BreadCrumb from '@/components/breadcrumb';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function SinglePageLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <BreadCrumb />
      {props.modal}
      {props.children}
      <Footer />
    </>
  );
}
