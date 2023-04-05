import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import MakeConsult from '@/components/MakeConsult';
import styles from '../styles/Equipo.module.css';
import PCard from '@/components/PCard';
import { profesionales } from '@/utils/profesionales';

const equipo = () => {
  const getCols = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768 ? 7 : 2;
    }
    return 2;
  };

  const cols = getCols();

  return (
    <>
      <Head>
        <title>NUESTRO EQUIPO - Centro Aidam</title>
      </Head>
      <main className='min-h-screen'>
        <Navbar />
        <div
          className={`${styles.divImage} text-center text-white font-libreBaskerville text-4.5xl px-8 py-[16%] mt-23`}
        >
          Nuestro equipo
        </div>
        <div className='flex flex-wrap justify-center items-center md:gap-20 gap-3 md:px-[14%] mt-16 mb-16'>
          {profesionales
            ? profesionales.map((profesional) => (
                <div
                  key={profesional.name}
                  className={`w-${100 / cols} md:mr-0`}
                >
                  <PCard
                    name={profesional.name}
                    lastname={profesional.lastname}
                    profession={profesional.profession}
                    photo={profesional.photo}
                  />
                </div>
              ))
            : ''}
        </div>
        <Faq />
        <MakeConsult />
        <Footer />
      </main>
    </>
  );
};

export default equipo;
