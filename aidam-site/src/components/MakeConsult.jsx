import React, { useRef, useState } from 'react';
import Image from 'next/image';

import consult from '../assets/icons/consult.png';
import styles from '../styles/MakeConsult.module.css';
import { sendEmail } from '@/services/sendEmail';
import Spinner from '@/components/Spinner';

const MakeConsult = ({ margin }) => {
  const form = useRef();
  const [loading, setLoading] = useState(true);

  return (
    <div
      className={`px-8 py-17.5 ${styles.bgimage} sm:flex sm:justify-between ${margin}`}
    >
      <div className='flex items-center mb-5 sm:w-1/2 sm:justify-center sd:mr-4'>
        <div className='mr-3'>
          {loading && <Spinner />}
          <Image
            src={consult}
            alt='consulta'
            height={45}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <h2 className='font-libreBaskerville text-grey3 text-3xl ml-2 sm:w-fit'>
          Realiza tu consulta
        </h2>
      </div>
      <form
        ref={form}
        onSubmit={e => sendEmail(e, 'template_a6c7zmh', form)}
        className='flex flex-col gap-5 font-quickSand sm:w-1/2'
      >
        <input
          type='text'
          name='name'
          className='h-12 border border-grey2 text-grey6 text-lb rounded-md px-4 outline-none focus:border-grey6'
          placeholder='Nombre y Apellido*'
        />
        <input
          type='tel'
          name='phone'
          className='h-12 border border-grey2 text-grey6 text-lb rounded-md px-4 outline-none focus:border-grey6'
          placeholder='Teléfono*'
        />
        <input
          type='email'
          name='email'
          className='h-12 border border-grey2 text-grey6 text-lb rounded-md px-4 outline-none focus:border-grey6'
          placeholder='Email*'
        />
        <textarea
          type='text'
          name='consult'
          className='h-38 border border-grey2 text-grey6 text-lb rounded-md px-4 py-2 outline-none focus:border-grey6 resize-none'
          placeholder='Consulta'
        />
        <button
          type='submit'
          className='h-11 w-28 flex items-center rounded-md self-center px-7 py-3 border border-white font-openSans font-semibold text-lg text-white bg-aidamBlue hover:bg-white hover:border-aidamBlue hover:text-aidamBlue transition-colors'
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default MakeConsult;
