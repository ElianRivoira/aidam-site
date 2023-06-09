import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import Navbar from '@/components/Navbar';
import styles from '../styles/Conocenos.module.css';
import Faq from '@/components/Faq';
import MakeConsult from '@/components/MakeConsult';
import Footer from '@/components/Footer';
import useMediaQuery from '@/hooks/useMediaQuery';
import Item from '@/components/Item';

import mariposa from '../assets/icons/mariposa.png';
import vision from '../assets/icons/Vision.svg';
import mision from '../assets/icons/Mision.svg';
import valores from '../assets/icons/Valores.svg';
import imagenTutor from '../assets/images/tutor.jpg';
import trabajoEquipo from '../assets/images/trabajoconjunto.jpg';
import unidadesTP from '@/assets/icons/UnidadesTp.svg';
import metodoAidam from '@/assets/icons/ModeloAidam.svg';
import cerebrin from '@/assets/icons/cerebrin.svg';
import equipo from '@/assets/icons/Equipo.svg';
import atencionintegral from '@/assets/icons/atencionintegral.svg';
import centroadaptado from '@/assets/icons/centroadaptado.svg';
import WhatsappButton from '@/components/WhatsappButton';
import Link from 'next/link';
import Spinner from '@/components/Spinner';

const conocenos = () => {
  return (
    <>
      <Head>
        <title>CONOCENOS - Centro Aidam</title>
      </Head>
      <main className='min-h-screen'>
        <Navbar />
        <div
          className={`${styles.divImage} text-center text-white font-libreBaskerville text-4.5xl px-8 py-[16%] mt-23`}
        >
          ¿Quiénes somos?
        </div>
        <div className='flex flex-col bg-aidamBlue justify-center items-center px-8 pt-[10%] pb-[17%]'>
          <Image
            src={mariposa}
            alt='mariposa'
            className='w-12 h-9 mb-4'
            fallback={<Spinner />}
          />

          <p className='text-white font-quickSand text-center text-lz'>
            Somos un centro especializado en discapacidad
            <br />
            con un programa de multiestimulación.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center px-8 mb-20'>
          <div className='md:max-w-[1248px] md:max-h-[596px]'>
            <div className='flex justify-center mb-12 mt-24'>
              <h1 className='text-aidamBlue font-libreBaskerville text-[26px]'>
                Nuestra filosofía
              </h1>
            </div>
            <div className='md:flex md:flex-row md:justify-center md:items-start flex flex-col items-center max-w-[936px] text-aidamBlue gap-8 md:gap-0'>
              <div className='flex flex-col items-center md:w-1/3 px-8'>
                <Image
                  src={vision}
                  alt='vision'
                  className='w-16 h-16 mb-2'
                  fallback={<Spinner />}
                />
                <div className='font-libreBaskerville text-[26px] mb-2'>
                  Visión
                </div>
                <div className='text-center font-quickSand text-[18px]'>
                  Buscamos ser un agente social de cambio e innovación en el
                  abordaje integral de la persona con discapacidad. Nuestra meta
                  es liderar el proceso de cambio desde una atención centrada en
                  la discapacidad hacia la atención centrada en la persona.
                </div>
              </div>
              <div className='flex flex-col items-center md:w-1/3 px-8'>
                <Image
                  src={mision}
                  alt='mision'
                  className='w-16 h-16 mb-2'
                  fallback={<Spinner />}
                />
                <div className='font-libreBaskerville text-[26px] mb-2'>
                  Misión
                </div>
                <div className='text-center font-quickSand text-[18px]'>
                  Acompañar a cada uno de nuestros concurrentes y sus familias
                  en un camino de estimulación global, buscando en todo momento
                  fortalecer sus capacidades, redes vinculares y relación con su
                  entorno.
                </div>
              </div>
              <div className='flex flex-col items-center md:w-1/3 px-8'>
                <Image
                  src={valores}
                  alt='valores'
                  className='w-16 h-16 mb-2'
                  fallback={<Spinner />}
                />
                <div className='font-libreBaskerville text-[26px] mb-2'>
                  Valores
                </div>
                <div className='font-quickSand text-[18px]'>
                  <li>Personalización.</li>
                  <li>Profesionalismo.</li>
                  <li>Compromiso.</li>
                  <li>Empatía.</li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='md:flex md:flex-row flex flex-col items-center w-full gap-6 md:gap-0'>
          <div className='md:w-1/2'>
            <Image
              src={imagenTutor}
              className='w-[961px]'
              alt='tutor'
              fallback={<Spinner />}
            />
          </div>
          <div className='md:w-1/2 flex flex-col justify-center items-center gap-4 mb-8 md:mb-0'>
            <h1 className='font-libreBaskerville text-[30px] text-aidamBlue'>
              ¿Qué hacemos?
            </h1>
            <p className='text-center md:px-8 font-quickSand text-ln text-aidamBlue'>
              Desarrollamos un programa terapéutico individual que previene,
              interviene y fortalece el proceso garantizando una mejora
              sustancial en la calidad de vida del paciente.
            </p>
            <Link
              href={'/modelo-aidam'}
              className='h-16 w-52 flex justify-center items-center text-base rounded-md border border-white font-quickSand font-semibold text-white bg-aidamBlue hover:bg-white hover:border-aidamBlue hover:text-aidamBlue transition-colors'
            >
              Modelo Aidam
            </Link>
          </div>
        </div>
        <div className='md:flex md:flex-row flex flex-col-reverse items-center w-full bg-aidamBlue'>
          <div className='md:w-1/2 flex flex-col justify-center items-center gap-4 md:mb-0'>
            <h1 className='font-libreBaskerville text-[30px] text-white mt-4'>
              ¿Cómo lo hacemos?
            </h1>
            <p className='text-center px-8 font-quickSand text-ln text-white mb-6 md:mb-0'>
              Cada actividad es pensada y desarrollada teniendo en cuenta la
              historia de vida, los gustos, deseos y necesidades de nuestros
              concurrentes. Las familias son un sostén imprescindible en nuestro
              servicio y para ellas hemos desarrollado múltiples instancias de
              participación, formación y fortalecimiento vincular que potencian
              los efectos terapéuticos.
            </p>
          </div>

          <div className='md:w-1/2'>
            <Image
              src={trabajoEquipo}
              alt='teamWork'
              className='w-[961px]'
              fallback={<Spinner />}
            />
          </div>
        </div>
        <div className='flex justify-center py-[100px] px-[5%]'>
          <div className='w-full max-w-7xl'>
            {useMediaQuery(768) ? (
              <>
                <div className='flex gap-8 mx-[2%] justify-around my-16'>
                  <Item
                    icon={unidadesTP}
                    title='Unidades Terapéuticas diferenciadas'
                    text='Grupos reducidos y determinados por capacidades.'
                  />
                  <Item
                    icon={metodoAidam}
                    title='Método Aidam'
                    text='Innovador y exclusivo método de abordaje que incluye 4 áreas de trabajo: Neurocognitiva, Fisicomotriz, Funcional (AVD) y Socioafectiva con múltiples programas y actividades diseñadas para cada concurrente de manera personalizada.'
                  />
                </div>
                <div className='flex gap-8 mx-[2%] justify-around my-16'>
                  <Item
                    icon={cerebrin}
                    title='Terapias y actividades con sentido'
                    text='Programas desarrollados a medida teniendo en cuenta su historia de vida, gustos y deseos de los concurrentes.'
                  />
                  <Item
                    icon={equipo}
                    title='Equipo profesional'
                    text='Nuestros profesionales son seleccionados, formados y motivados para garantizar no solo la excelencia del servicio.'
                  />
                </div>
                <div className='flex gap-8 mx-[2%] justify-around my-16'>
                  <Item
                    icon={atencionintegral}
                    title='Atención integral centrada en la persona'
                    text='Garantizamos la calidad en cada detalle de nuestros procesos terapéuticos centrándonos en las capacidades.'
                  />
                  <Item
                    icon={centroadaptado}
                    title='Centro adaptado'
                    text='Un lugar con amplias salas, ambientes agradables y climatizados, baños adaptados, sin barrera arquitectónicas ni sujeciones y con todos los recursos necesario.'
                  />
                </div>
              </>
            ) : (
              <>
                <div className='mx-[2%] flex justify-around my-16'>
                  <Item
                    icon={unidadesTP}
                    title='Unidades Terapéuticas diferenciadas'
                    text='Grupos reducidos y determinados por capacidades.'
                  />
                  <Item
                    icon={metodoAidam}
                    title='Método Aidam'
                    text='Innovador y exclusivo método de abordaje que incluye 4 áreas de trabajo: Neurocognitiva, Fisicomotriz, Funcional (AVD) y Socioafectiva con múltiples programas y actividades diseñadas para cada concurrente de manera personalizada.'
                  />
                  <Item
                    icon={cerebrin}
                    title='Terapias y actividades con sentido'
                    text='Programas desarrollados a medida teniendo en cuenta su historia de vida, gustos y deseos de los concurrentes.'
                  />
                </div>
                <div className='mx-[2%] flex justify-around mb-8'>
                  <Item
                    icon={equipo}
                    title='Equipo profesional'
                    text='Nuestros profesionales son seleccionados, formados y motivados para garantizar no solo la excelencia del servicio.'
                  />
                  <Item
                    icon={atencionintegral}
                    title='Atención integral centrada en la persona'
                    text='Garantizamos la calidad en cada detalle de nuestros procesos terapéuticos centrándonos en las capacidades.'
                  />
                  <Item
                    icon={centroadaptado}
                    title='Centro adaptado'
                    text='Un lugar con amplias salas, ambientes agradables y climatizados, baños adaptados, sin barrera arquitectónicas ni sujeciones y con todos los recursos necesario.'
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <MakeConsult />
        <Footer />
        <WhatsappButton />
      </main>
    </>
  );
};

export default conocenos;
