import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import aidam from '@/assets/icons/aidamTexto.svg';
import useMediaQuery from '@/hooks/useMediaQuery';
import styles from '@/styles/Navbar.module.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // smooth transition to white background pending
  return (
    <nav className={`px-8 ${styles.gradient} h-[93px] flex justify-center`}>
      <div className='max-w-7xl w-full flex justify-between h-full'>
        <div className='flex items-center'>
          <Image src={aidam} alt='aidam' height={70} className='' />
        </div>
        {useMediaQuery(1024) ? (
          <div className={styles.container}>
            <button
              className={`${styles.hamburger} ${open && styles.active}`}
              onClick={() => setOpen(!open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        ) : (
          <div className='flex gap-12 w-2/3 max-w-4xl items-center font-openSans text-lb text-aidamBlue font-medium'>
            <Link href={''} className={`${styles.navbarButton}`}>
              INICIO
            </Link>
            <Link href={''} className={`${styles.navbarButton}`}>
              CONÓCENOS
            </Link>
            <Link href={''} className={`${styles.navbarButton}`}>
              MODELO VITAL
            </Link>
            <Link href={''} className={`${styles.navbarButton}`}>
              SERVICIOS TERAPEUTICOS
            </Link>
            <Link href={''} className={`${styles.navbarButton}`}>
              CONTACTO
            </Link>
          </div>
        )}
        {open ? (
          <div className='absolute inset-0 z-10 bg-white/[.9] flex flex-col' style={{
            transform: `translateY(${open ? '0' : '-100%'})`,
            transition: 'transform 1s ease-in-out',
          }}>
            <div className='h-[93px]'></div>
            <div className='flex flex-col justify-center items-center mt-10 font-openSans text-lb gap-10'>
              <Link href={''} className=''>
                INICIO
              </Link>
              <Link href={''} className=''>
                CONÓCENOS
              </Link>
              <Link href={''} className=''>
                MODELO VITAL
              </Link>
              <Link href={''} className=''>
                SERVICIOS TERAPEUTICOS
              </Link>
              <Link href={''} className=''>
                CONTACTO
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
