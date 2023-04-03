import React from 'react';
import Head from 'next/head';

import MakeConsult from '@/components/MakeConsult';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const contact = () => {
  return (
    <>
      <Head>
        <title>MODELO AIDAM - Centro Aidam</title>
      </Head>
      <main className='min-h-screen'>
        <Navbar />
        <MakeConsult margin='mt-23' />
        <div className='flex py-[60px] px-8 bg-aidamBlue smMax:flex-col smMax:py-8'>
          <div className='w-1/2 smMax:w-full smMax:mb-5'>
            <h2 className='sm:mr-5 text-center font-libreBaskerville text-3xl text-white'>Trabajá con nosotros</h2>
          </div>
          <div className='w-1/2 smMax:w-full smMax:flex smMax:justify-center'>
            <button className='h-11 ml-5 flex items-center rounded-md self-center px-7 py-3 border border-white font-openSans font-semibold text-ss text-white bg-aidamBlue hover:bg-white hover:border-aidamBlue hover:text-aidamBlue transition-colors'>
              Mandar Curriculum Vitae
            </button>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default contact;
