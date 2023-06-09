import Image from 'next/image';
import React from 'react';

import MapContainer from './MapContainer';
import aidam from '@/assets/icons/aidamTexto.svg';
import wsp from '@/assets/icons/wsp.svg';
import direccion from '@/assets/icons/direccion.svg';
import mail from '@/assets/icons/mail.svg';
import Spinner from '../Spinner';

const Footer = ({ imgAttributions }) => {
  return (
    <div className='flex flex-col mb-7'>
      <div className='md:flex md:flex-row flex flex-col justify-center items-center px-12 pt-12 pb-7'>
        <div className='md:mr-10 md:mb-0 mb-8'>
          <Image src={aidam} alt='aidam' />
        </div>
        <div className='md:px-5 md:w-[800px] w-full h-64 md:mr-10 md:mb-0 mb-8'>
          <MapContainer />
        </div>
        <div className='flex flex-col self-start'>
          <div className='font-libreBaskerville text-lg text-aidamBlue mb-4'>
            CONTACTO
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex'>
              <div className='font-quickSand flex h-8 w-8 bg-aidamBlue rounded-full justify-center mr-1.5'>
                <Image src={wsp} alt='wsp' />
              </div>
              <p className='text-aidamBlue'>+54 9 261-333-3952</p>
            </div>
            <div className='flex'>
              <div className='font-quickSand flex h-8 w-8 bg-aidamBlue rounded-full justify-center mr-1.5'>
                <Image src={mail} alt='email' />
              </div>
              <a
                href='mailto:aidamterapeutico@gmail.com'
                className='text-aidamBlue'
              >
                aidamterapeutico@gmail.com
              </a>
            </div>
            <div className='flex'>
              <div className='font-quickSand flex h-8 w-8 bg-aidamBlue rounded-full justify-center mr-1.5 flex-shrink-0'>
                <Image src={direccion} alt='adress' />
              </div>
              <p className='text-aidamBlue'>Montevideo 225, M5500 Mendoza</p>
            </div>
            <div className='flex'>
              <div className='font-quickSand flex h-8 w-8 bg-aidamBlue rounded-full justify-center mr-1.5 flex-shrink-0'>
                <Image src={direccion} alt='adress' />
              </div>
              <p className='text-aidamBlue'>Necochea 724, M5500 Mendoza</p>
            </div>
          </div>
          <a
            href={
              'https://docs.google.com/forms/d/e/1FAIpQLScax3EpreJjVy4_7tpu470igG1kvj2Nbg2iSyZxRQGPZk_Xyg/viewform'
            }
            className='h-16 w-52 mt-6 flex justify-center items-center text-sm rounded-md border border-white font-quickSand font-semibold text-white bg-aidamBlue hover:bg-white hover:border-aidamBlue hover:text-aidamBlue transition-colors'
          >
            TRABAJÁ CON NOSOTROS
          </a>
        </div>
      </div>
      <div className='md:flex md:w-full md:justify-center font-quickSand text-sm text-center px-4'>
        <p className='md:mr-1 text-aidamBlue'>
          Copyright 2023 | AIDAM | Todos los derechos reservados | Realizado por: <span className='text-[#70d1f4] font-semibold'>DiamondForge</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
