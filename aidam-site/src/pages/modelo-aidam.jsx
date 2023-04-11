import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import Navbar from '@/components/Navbar';
import styles from '../styles/Modelo-aidam.module.css';
import ninoPreescolar from '../assets/images/nino-edad-preescolar-masculino.jpg';
import Faq from '@/components/Faq';
import MakeConsult from '@/components/MakeConsult';
import Footer from '@/components/Footer';
import useMediaQuery from '@/hooks/useMediaQuery';
import WhatsappButton from '@/components/WhatsappButton';
import aidamLogo from '@/assets/icons/aidamLogo4k.svg';

const modeloAidam = ({ questions }) => {
  return (
    <>
      <Head>
        <title>MODELO AIDAM - Centro Aidam</title>
      </Head>
      <main className='min-h-screen'>
        <Navbar />
        <div
          className={`${styles.divImage} text-center text-white font-libreBaskerville text-4.5xl px-8 py-[18%] mt-23`}
        >
          Modelo Aidam
        </div>
        <div
          className={`${styles.gradient} bg-aidamBlue text-white py-[8%] px-8 flex justify-center`}
        >
          <div className='text-center w-full sm:w-1/2 mx-2'>
            <h1 className='font-libreBaskerville text-4.5xl mb-2'>
              ¿Cómo funciona nuestro modelo aidam?
            </h1>
            <p className='font-quickSand text-lz'>
              Desarrollamos un modelo exclusivo de atención interdisciplinario
              adaptado a cada paciente con seguimiento de profesional
              permanente.
            </p>
          </div>
        </div>
        <div className='my-[3%] relative sm:flex lg:justify-center'>
          {!useMediaQuery(1024) ? (
            <div className='ml-20 2xl:ml-44 flex'>
              <div
                className={`rounded-full border-[30px] mb-3 sm:mb-0 border-aidamBlue h-[450px] w-[450px] overflow-hidden ${
                  useMediaQuery(768) ? 'relative -left-20' : ''
                } flex-shrink-0`}
              >
                <Image
                  src={aidamLogo}
                  alt='imagen circular'
                  width={450}
                  className=''
                />
              </div>
              <div className='px-8 lg:pl-10 w-fit sm:px-0 sm:flex sm:flex-col sm:justify-center'>
                <Faq customQuestions={questions} />
              </div>
            </div>
          ) : (
            <>
              <div
                className={`rounded-full border-[35px] mb-3 sm:mb-0 border-aidamBlue h-[450px] w-[450px] overflow-hidden ${
                  useMediaQuery(768) ? 'relative -left-20' : ''
                } flex-shrink-0`}
              >
                <Image
                  src={aidamLogo}
                  alt='imagen circular'
                  width={450}
                  className=''
                />
              </div>
              <div className='px-8 md:pl-10 w-fit sm:px-0 sm:flex sm:flex-col sm:justify-center'>
                <Faq customQuestions={questions} />
              </div>
            </>
          )}
        </div>
        <MakeConsult />
        <Footer />
        <WhatsappButton />
      </main>
    </>
  );
};

export default modeloAidam;

export async function getStaticProps() {
  const questions = [
    {
      id: 1,
      question: 'Entrevista Inicial',
      answer:
        'Te escuchamos y elaboramos el perfil de ingreso de acuerdo a tus necesidades y deseos.',
    },
    {
      id: 2,
      question: 'Valoración profesional integral',
      answer:
        'Es realizado por cada uno de nuestros profesionales con el fin de elaborar un perfil individual, nos permite conocer en profundidad el estado general de nuestros asistentes en las dimensiones física, funcional, cognitiva y emocional. También su historia de vida, preferencias, deseos y expectativas en esta nueva etapa.',
    },
    {
      id: 3,
      question: 'Programa de atención personal',
      answer:
        'Elaboramos un camino terapéutico adaptado a la realidad de cada concurrente con objetivos concretos en cada área valorada.',
    },
    {
      id: 4,
      question: 'Unidades terapéuticas reducidas',
      answer:
        'Buscamos la mayor efectividad en nuestros abordajes por medio de un delicado proceso de selección y determinación de cada concurrente en su Unidad terapéutica de acuerdo al criterio de nuestros especialistas.',
    },
    {
      id: 5,
      question: 'Seguimiento permanente',
      answer:
        'Procuramos realizar un seguimiento constante de cada concurrente a fin de garantizar su confort y desarrollo pleno de sus capacidades en nuestro centro.',
    },
    {
      id: 6,
      question: 'Informe semestral',
      answer:
        'Cada área de trabajo es evaluada semestralmente mostrando su evolución y promoviendo el fortalecimiento del proceso terapéutico. Esto nos permite modificar, intensificar y/o rediseñar el programa individual.',
    },
    {
      id: 7,
      question: 'Mejora continua',
      answer:
        'Buscamos orientar los esfuerzos en desarrollar herramientas que mejoren continuamente nuestros procesos de atención y garanticen los máximos estándares de calidad.',
    },
  ];
  return {
    props: {
      questions,
    },
  };
}

('Imagen de <a href="https://www.freepik.es/foto-gratis/retrato-nina-juego_12243501.htm#page=2&query=kids&position=3&from_view=search&track=sph">Freepik</a>');
('Imagen de <a href="https://www.freepik.es/foto-gratis/muchacho-bastante-joven-ropa-casual-pared-blanca-nino-edad-preescolar-masculino-caucasico-brillantes-emociones-faciales-bolsa-almuerzo-infancia-expresion-diversion-parece-serio-sonador_14965387.htm?query=kids#from_view=detail_alsolike">Imagen de master1305</a> en Freepik');
('Imagen de <a href="https://www.freepik.es/foto-gratis/mujer-joven-hacer-terapia-habla-ninos_18683189.htm#query=equipo%20terapeutico%20para%20ni%C3%B1os&position=3&from_view=search&track=ais">Freepik</a>');
