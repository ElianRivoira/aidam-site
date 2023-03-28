import Image from 'next/image';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import consult from '../assets/icons/consult.png';
import styles from '../styles/MakeConsult.module.css';

const MakeConsult = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1iyoqgf', 'template_winip2j', form.current, 'zc5yQiZMitv3PsWY_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className={`px-8 py-17.5 ${styles.bgimage} sm:flex sm:justify-between`}>
      <div className='flex items-center mb-5 sm:w-1/2 sm:justify-center sd:mr-4'>
        <Image src={consult} alt='consulta' height={45} />
        <h2 className='font-libreBaskerville text-grey3 text-3xl ml-2 sm:w-fit'>
          Realiza tu consulta
        </h2>
      </div>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5 font-quickSand sm:w-1/2'>
        <input type='text' name='name' className='h-12 border border-grey2 text-grey6 text-lb rounded-md px-4 outline-none focus:border-grey6' placeholder='Nombre y Apellido*' />
        <input type='tel' name='phone' className='h-12 border border-grey2 text-grey6 text-lb rounded-md px-4 outline-none focus:border-grey6' placeholder='Teléfono*'/>
        <input type='email' name='email' className='h-12 border border-grey2 text-grey6 text-lb rounded-md px-4 outline-none focus:border-grey6' placeholder='Email*'/>
        <textarea type='text' name='consult' className='h-38 border border-grey2 text-grey6 text-lb rounded-md px-4 py-2 outline-none focus:border-grey6 resize-none' placeholder='Consulta'/>
        <button type='submit' className='h-11 w-28 flex items-center rounded-md self-center px-7 py-3 border border-white font-openSans font-semibold text-lg text-white bg-aidamBlue hover:bg-white hover:border-aidamBlue hover:text-aidamBlue'>Enviar</button>
      </form>
    </div>
  );
};

export default MakeConsult;
