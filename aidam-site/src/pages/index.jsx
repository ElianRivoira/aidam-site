import React, { useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import MakeConsult from '@/components/MakeConsult';
import Navbar from '@/components/Navbar';
import styles from '../styles/Inicio.module.css';
import FlipCard from '@/components/Inicio/FlipCard';
import useMediaQuery from '@/hooks/useMediaQuery';
import butterfly from '@/assets/icons/butterfly-green.png';
import psicoestimulacion from '@/assets/icons/Psicoestimulacion-cognitiva.png';
import estimulacionFisica from '@/assets/icons/Estimulacionfisica-motriz.png';
import terapiaOcupacional from '@/assets/icons/Terapia-ocupacional.png';
import socioAfectivo from '@/assets/icons/Fortalecimiento-socio-afectivo.png';
import estimulacionSensorial from '@/assets/icons/Programas-de-multi-estimulacion-sensorial.png';
import idiomas from '@/assets/icons/Idiomas.png';
import salidasCulturales from '@/assets/icons/Salidas-culturales.png';
import escuelaFamilias from '@/assets/icons/Escuela-de-familias.png';
import Item from '@/components/Item';
import { sendEmail } from '@/services/sendEmail';
import WhatsappButton from '@/components/WhatsappButton';
import Link from 'next/link';

export default function Home() {
  const form = useRef();
  
  return (
    <>
      <Head>
        <title>Centro Aidam</title>
      </Head>
      <main>
        <Navbar />
        <div className='mt-23'>
          <div className={`${styles.divImage} px-17.5 pt-12 pb-17.5`}>
            <div
              className={`max-w-[1480px] w-full flex justify-end ${styles.divInside}`}
            >
              <div className='flex w-full flex-col max-w-sm items-center'>
                <h1 className='font-libreBaskerville text-3xl mb-4 w-fit text-center text-white'>
                  Cambiale el <br /> sentido a tu vida
                </h1>
                <form ref={form} onSubmit={(e) => sendEmail(e, 'template_k7m1jwd', form)} className='bg-aidamBlue/[.8] rounded-[44px] flex flex-col p-8 gap-5 w-full'>
                  <p className='font-libreBaskerville text-3xl text-white text-center'>
                    Contactanos
                  </p>
                  <input
                    type='text'
                    name='name'
                    className='h-[50px] rounded-[100px] px-4 font-libreBaskerville text-lb placeholder-aidamBlue text-aidamBlue outline-none'
                    placeholder='Nombre y Apellido'
                  />
                  <input
                    type='tel'
                    name='phone'
                    className='h-[50px] rounded-[100px] px-4 font-libreBaskerville text-lb placeholder-aidamBlue text-aidamBlue outline-none'
                    placeholder='Teléfono'
                  />
                  <button
                    type='submit'
                    className='h-11 w-full flex items-center justify-center rounded-[100px] px-7 py-3 border border-white font-libreBaskerville font-medium text-ss text-white bg-aidamBlue hover:bg-white hover:border-aidamBlue hover:text-aidamBlue mb-5 transition-colors'
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className='pt-[90px] pb-[60px] px-[30px] flex flex-col items-center'>
            <div className='mx-[2.8%] max-w-4xl'>
              <h2 className='font-libreBaskerville text-3xl text-aidamBlue mt-4 mb-2.5 text-center'>
                ¿Por qué elegir AIDAM?
              </h2>
              <p className='text-center font-quickSand text-lz text-aidamBlue'>
                Somos el único centro de día especializado en discapacidad con
                un programa general de multiestimulación.
              </p>
              <div className='flex justify-center mt-5'>
                <Link
                  href={'/conocenos'}
                  type='submit'
                  className='h-14 w-48 text-center rounded-md px-7 py-3 border border-white font-openSans font-semibold text-lg text-white bg-aidamBlue hover:bg-white hover:border-aidamBlue hover:text-aidamBlue transition-colors'
                >
                  CONOCENOS
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col px-[2%] py-[5%] smMax:pb-16 bg-aidamBlue text-white'>
            <div className='max-w-xl self-center text-center mb-10 px-3'>
              <p className='font-quickSand text-lz'>
                Te invitamos a que recorras nuestros espacios donde buscamos
                prevenir, rehabilitar, estimular y fortalecer las áreas que
                determinan una mejor calidad de vida.
              </p>
            </div>
            <div className='flex smMax:flex-col ml:flex-row ml:justify-center gap-8 items-center w-full px-8'>
              {useMediaQuery(640) ? (
                <>
                  <FlipCard title='Modelo Aidam' imgClass='img1' link='/modelo-aidam' />
                  <FlipCard title='Conocenos' imgClass='img2' link='/conocenos' />
                  <FlipCard title='Servicio terapéutico' imgClass='img3' link='/servicios-terapeuticos' />
                  <FlipCard title='Nuestro Equipo' imgClass='img4' link='/equipo' />
                </>
              ) : null}
              {useMediaQuery(830) ? (
                <div className={`${styles.divMl} w-full flex flex-col gap-8`}>
                  <div className={`flex gap-8 w-full`}>
                    <FlipCard title='Modelo Aidam' imgClass='img1' link='/modelo-aidam' />
                    <FlipCard title='Conocenos' imgClass='img2' link='/conocenos' />
                  </div>
                  <div className={`flex gap-8 w-full`}>
                    <FlipCard title='Servicio terapéutico' imgClass='img3' link='/servicios-terapeuticos' />
                    <FlipCard title='Nuestro Equipo' imgClass='img4' link='/equipo' />
                  </div>
                </div>
              ) : (
                <>
                  <FlipCard title='Modelo Aidam' imgClass='img1' link='/modelo-aidam' />
                  <FlipCard title='Conocenos' imgClass='img2' link='/conocenos' />
                  <FlipCard title='Servicio terapéutico' imgClass='img3' link='/servicios-terapeuticos' />
                  <FlipCard title='Nuestro Equipo' imgClass='img4' link='/equipo' />
                </>
              )}
            </div>
          </div>
          <div className='flex justify-center py-[100px] px-[5%]'>
            <div className='w-full max-w-7xl flex flex-col'>
              <div className='w-full max-w-4xl flex flex-col items-center self-center'>
                <Image src={butterfly} alt='mariposa' className='mb-8' />
                <h3 className='text-center font-libreBaskerville text-3xl text-aidamBlue mb-4'>
                  Beneficios Aidam
                </h3>
                <p className='text-center font-quickSand text-lz'>
                  Nuestros programas terapéuticos están diseñados y adaptados a
                  cada concurrente y su realidad, el objetivo final es potenciar
                  las capacidades remanentes reduciendo los riesgos de
                  deterioro.
                </p>
              </div>
              {useMediaQuery(768) ? (
                <>
                  <div className='flex gap-8 mx-[2%] justify-around my-16'>
                    <Item
                      icon={psicoestimulacion}
                      title='Psicoestimulación cognitiva'
                    />
                    <Item
                      icon={estimulacionFisica}
                      title='Estimulación física-motriz'
                    />
                  </div>
                  <div className='flex gap-8 mx-[2%] justify-around my-16'>
                    <Item
                      icon={terapiaOcupacional}
                      title='Terapia ocupacional y reentrenamiento de las AVD'
                    />
                    <Item
                      icon={socioAfectivo}
                      title='Fortalecimiento socio afectivo'
                    />
                  </div>
                  <div className='flex gap-8 mx-[2%] justify-around my-16'>
                    <Item
                      icon={estimulacionSensorial}
                      title='Programas de multi estimulación sensorial'
                    />
                    <Item icon={idiomas} title='Idiomas' />
                  </div>
                  <div className='flex gap-8 mx-[2%] justify-around mb-8'>
                    <Item icon={salidasCulturales} title='Salidas culturales' />
                    <Item icon={escuelaFamilias} title='Escuela de familias' />
                  </div>
                </>
              ) : (
                <>
                  <div className='mx-[2%] flex justify-around my-16'>
                    <Item
                      icon={psicoestimulacion}
                      title='Psicoestimulación cognitiva'
                    />
                    <Item
                      icon={estimulacionFisica}
                      title='Estimulación física-motriz'
                    />
                    <Item
                      icon={terapiaOcupacional}
                      title='Terapia ocupacional y reentrenamiento de las AVD'
                    />
                    <Item
                      icon={socioAfectivo}
                      title='Fortalecimiento socio afectivo'
                    />
                  </div>
                  <div className='mx-[2%] flex justify-around mb-8'>
                    <Item
                      icon={estimulacionSensorial}
                      title='Programas de multi estimulación sensorial'
                    />
                    <Item icon={idiomas} title='Idiomas' />
                    <Item icon={salidasCulturales} title='Salidas culturales' />
                    <Item icon={escuelaFamilias} title='Escuela de familias' />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <Faq />
        <MakeConsult />
        <Footer />
        <WhatsappButton />
      </main>
    </>
  );
}

('Imagen de <a href="https://www.freepik.es/foto-gratis/familia-disfrutando-tiempo-juntos_7871767.htm#query=grupo%20de%20personas%20sordas&position=4&from_view=search&track=ais">Freepik</a>');
('Imagen de <a href="https://www.freepik.es/foto-gratis/nina-sindrome-down-pintando-colores_7088497.htm#query=asistente%20social%20con%20ni%C3%B1os&position=1&from_view=search&track=ais">Freepik</a>');
('Imagen de <a href="https://www.freepik.es/foto-gratis/personas-mayores-escuela-clase_37446842.htm#query=personas%20reunidas%20en%20ambiente%20de%20trabajo&position=4&from_view=search&track=ais">Freepik</a>');
('Imagen de <a href="https://www.freepik.es/foto-gratis/companeros-trabajo-que-trabajan-oficina-ambiente-relajado_12751724.htm#query=personas%20reunidas%20en%20ambiente%20de%20trabajo&position=8&from_view=search&track=ais">Imagen de gpointstudio</a> en Freepik');
('Imagen de <a href="https://www.freepik.es/foto-gratis/retrato-nina-juego_12243501.htm#page=2&query=kids&position=3&from_view=search&track=sph">Freepik</a>');
('Imagen de <a href="https://www.freepik.es/foto-gratis/mujer-joven-hacer-terapia-habla-ninos_18683189.htm#query=equipo%20terapeutico%20para%20ni%C3%B1os&position=3&from_view=search&track=ais">Freepik</a>');
