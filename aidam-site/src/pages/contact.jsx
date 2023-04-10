import React from 'react';
import Head from 'next/head';

import MakeConsult from '@/components/MakeConsult';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappButton from '@/components/WhatsappButton';
import Spinner from '@/components/Spinner';

const contact = () => {
  return (
    <>
      <Head>
        <title>CONTACTO - Centro Aidam</title>
      </Head>
      <main className='min-h-screen'>
        <Navbar />
        <MakeConsult margin='mt-23' />
        <div className='flex py-[60px] px-8 bg-aidamBlue smMax:flex-col smMax:py-8'>
          <div className='w-1/2 smMax:w-full smMax:mb-5'>
            <h2 className='sm:mr-5 text-center font-libreBaskerville text-3xl text-white'>
              Trabajá con nosotros
            </h2>
          </div>
          <div className='w-1/2 smMax:w-full smMax:flex smMax:justify-center'>
            <a
              href={
                'https://docs.google.com/forms/d/e/1FAIpQLScax3EpreJjVy4_7tpu470igG1kvj2Nbg2iSyZxRQGPZk_Xyg/viewform'
              }
              className='h-11 ml-5 w-fit flex items-center rounded-md self-center px-7 py-3 border border-white font-openSans font-semibold text-ss text-white bg-aidamBlue hover:bg-white hover:border-aidamBlue hover:text-aidamBlue transition-colors'
            >
              Mandar Curriculum Vitae
            </a>
          </div>
        </div>
        <Footer />
        <WhatsappButton />
      </main>
    </>
  );
};

export default contact;
