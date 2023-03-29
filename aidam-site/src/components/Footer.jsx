import Image from 'next/image';
import React from 'react';
import MapContainer from './MapContainer';
import aidam from '../assets/icons/aidamTexto.svg';
import wsp from '../assets/icons/wsp.svg';
import direccion from '../assets/icons/direccion.svg';
import mail from '../assets/icons/mail.svg';

const Footer = () => {
  return (
    <div className='flex flex-col'>
      <div className='md:flex md:flex-row flex flex-col justify-center items-center px-12 pt-12 pb-7'>
        <div className='md:mr-10 md:mb-0 mb-8'>
          <Image src={aidam} />
        </div>
        <div className='md:px-5 md:w-[800px] w-full h-64 md:mr-10 md:mb-0 mb-8'>
          <MapContainer />
        </div>
        <div className='flex flex-col self-start'>
          <div className='font-libreBaskerville text-lg text-aidamBlue mb-4'>
            CONTACTO
          </div>
          <div className='flex flex-col'>
            <div className='flex'>
              <div className='font-quickSand flex h-8 w-8 bg-slate-500 rounded-full justify-center mr-1.5 mb-2'>
                <Image src={wsp} />
              </div>
              <p className='text-aidamBlue'>+54 9 2616 22-1750</p>
            </div>
            <div className='flex'>
              <div className='font-quickSand flex h-8 w-8 bg-slate-500 rounded-full justify-center mr-1.5 mb-2'>
                <Image src={mail} />
              </div>
              <p className='text-aidamBlue'>aidam@edu.com.ar</p>
            </div>
            <div className='flex'>
              <div className='font-quickSand flex h-8 w-8 bg-slate-500 rounded-full justify-center mr-1.5 flex-shrink-0 mb-6'>
                <Image src={direccion} />
              </div>
              <p className='text-aidamBlue'>Patricias Mendocinas 1433</p>
            </div>
          </div>
          <button className='h-16 w-52 flex justify-center items-center text-sm rounded-md border border-white font-quickSand font-semibold text-white bg-aidamBlue hover:bg-white hover:border-aidamBlue hover:text-aidamBlue'>
            TRABAJÁ CON NOSOTROS
          </button>
        </div>
      </div>
      <div className='md:flex self-center font-quickSand text-sm text-center'>
        <p className='md:mr-1 text-aidamBlue'>
          Copyright 2023 | AIDAM | Todos los derechos reservados |{' '}
        </p>
        <p className='md:mr-1 text-aidamBlue'>Realizado por:</p>
        <p className='text-[#70d1f4] font-semibold'>DiamondForge</p>
      </div>
    </div>
  );
};

export default Footer;
