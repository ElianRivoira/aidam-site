import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import aidam from '@/assets/icons/aidamTexto.svg';
import useMediaQuery from '@/hooks/useMediaQuery';
import styles from '@/styles/Navbar.module.css';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState('');
  const router = useRouter();

  useEffect(() => {
    setPath(router.asPath);
  }, [])

  // smooth transition to white background pending
  return (
    <nav className={`pl-8 ${styles.gradient} h-[93px] flex justify-center fixed z-10 top-0 w-full`}>
      <div className='max-w-[1480px] w-full flex h-full justify-between'>
        <div className='flex mdMax:!w-[70%] lgMax:w-2/3 w-1/3 xd:w-1/2'>
          <div className='flex items-center relative lg:!w-[197px]'>
            <Image src={aidam} alt='aidam' height={70} className='' />
          </div>
          <div className='flex flex-col'>
            <div className={`${styles.triangleBottom}`}></div>
            <div className={`${styles.triangleTop}`}></div>
          </div>
          <div className='xb:w-[20%] xc:w-[40%] xd:w-[50%] w-0 bg-aidamBlue'></div>
          {useMediaQuery(1100) ? (
            <div className='mdMax:w-1/3 w-1/2 bg-aidamBlue'></div>
          ) : null}
        </div>
        {useMediaQuery(1100) ? (
          <>
            <div className={`${styles.container}`}>
              <button
                className={`${styles.hamburger} ${open && styles.active}`}
                onClick={() => setOpen(!open)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </>
        ) : (
          <div className='flex justify-around !w-full !max-w-4xl items-center font-openSans text-lb text-white font-medium bg-aidamBlue'>
            <Link href={'/'} className={`${styles.navbarButton} transition-colors ${path === '/' ? styles.activeSite : null}`}>
              INICIO
            </Link>
            <Link href={'/conocenos'} className={`${styles.navbarButton} transition-colors ${path === '/conocenos' ? styles.activeSite : null}`}>
              CONOCENOS
            </Link>
            <Link href={''} className={`${styles.navbarButton} transition-colors`}>
              NUESTRO EQUIPO
            </Link>
            <Link href={'/modelo-aidam'} className={`${styles.navbarButton} transition-colors ${path === '/modelo-aidam' ? styles.activeSite : null}`}>
              MODELO AIDAM
            </Link>
            <Link href={'/servicios-terapeuticos'} className={`${styles.navbarButton} transition-colors ${path === '/servicios-terapeuticos' ? styles.activeSite : null}`}>
              SERVICIOS TERAPEUTICOS
            </Link>
            <Link href={'/contact'} className={`${styles.navbarButton} transition-colors ${path === '/contact' ? styles.activeSite : null}`}>
              CONTACTO
            </Link>
          </div>
        )}
        {open ? (
          <div
            className='fixed inset-0 z-40 bg-white/[.95] flex flex-col'
            style={{
              transform: `translateY(${open ? '0' : '-100%'})`,
              transition: 'transform 1s ease-in-out',
            }}
          >
            <div className='h-[93px]'></div>
            <div className='flex flex-col justify-center items-center mt-10 font-openSans font-medium text-lb gap-10'>
              <Link href={'/'} className=''>
                INICIO
              </Link>
              <Link href={'/conocenos'} className=''>
                CONÓCENOS
              </Link>
              <Link href={''} className=''>
                NUESTRO EQUIPO
              </Link>
              <Link href={'/modelo-aidam'} className=''>
                MODELO AIDAM
              </Link>
              <Link href={''} className=''>
                SERVICIOS TERAPÉUTICOS
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
