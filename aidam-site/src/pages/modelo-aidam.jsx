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

const modeloAidam = () => {
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
              Desarrollamos un modelo exclusivo de atención global que garantiza
              a cada concurrente un programa individual adaptado a sus
              necesidades y requerimientos, seguimiento profesional permanente y
              la máxima contención para que pueda potenciar su proyecto de vida.
            </p>
          </div>
        </div>
        <div className='my-[3%] relative sm:flex lg:justify-center'>
          {!useMediaQuery(1024) ? (
            <div className='ml-20 2xl:ml-44 flex'>
              <div
                className={`rounded-full border-[35px] mb-3 sm:mb-0 border-aidamBlue h-[450px] w-[450px] overflow-hidden ${
                  useMediaQuery(768) ? 'relative -left-20' : ''
                } flex-shrink-0`}
              >
                <Image
                  src={ninoPreescolar}
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
                  src={ninoPreescolar}
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
        <Faq />
        <MakeConsult />
        <Footer />
        <WhatsappButton />
      </main>
    </>
  );
};

export default modeloAidam;

const questions = [
  {
    id: 1,
    question: 'Entrevista Inicial',
    answer:
      'Es un lugar especializado en el tratamiento terapéutico NO farmacológico del adulto mayor con deterioro leve y/o moderado cuyo objetivo central es promover la autonomía e independencia de nuestros asistentes.  Su ser querido encontrará en nuestro Centro un equipo de profesionales entrenado y capacitado que lo ayudará a desarrollar al máximo las capacidades y habilidades que aún permanecen activas, permitiéndole permanecer en su hogar el mayor tiempo posible, evitando y/o retrasando en el tiempo una posible institucionalización geriátrica.',
  },
  {
    id: 2,
    question: 'Valoración profesional integral',
    answer:
      'Es un lugar especializado en el tratamiento terapéutico NO farmacológico del adulto mayor con deterioro leve y/o moderado cuyo objetivo central es promover la autonomía e independencia de nuestros asistentes.  Su ser querido encontrará en nuestro Centro un equipo de profesionales entrenado y capacitado que lo ayudará a desarrollar al máximo las capacidades y habilidades que aún permanecen activas, permitiéndole permanecer en su hogar el mayor tiempo posible, evitando y/o retrasando en el tiempo una posible institucionalización geriátrica.',
  },
  {
    id: 3,
    question: 'Programa de atención personal',
    answer: 'Answer 3',
  },
  {
    id: 4,
    question: 'Unidades terapéuticas reducidas',
    answer: 'Answer 4',
  },
  {
    id: 5,
    question: 'Seguimiento permanente',
    answer: 'Answer 5',
  },
  {
    id: 6,
    question: 'Informe semestral',
    answer: 'Answer 6',
  },
  {
    id: 7,
    question: 'Mejora continua',
    answer: 'Answer 7',
  },
];

('Imagen de <a href="https://www.freepik.es/foto-gratis/medico-enfermeras-equipos-especiales_14602797.htm#query=medicos&from_query=medics&position=18&from_view=search&track=sph">Freepik</a>');
('Imagen de <a href="https://www.freepik.es/foto-gratis/retrato-nina-juego_12243501.htm#page=2&query=kids&position=3&from_view=search&track=sph">Freepik</a>');
('Imagen de <a href="https://www.freepik.es/foto-gratis/muchacho-bastante-joven-ropa-casual-pared-blanca-nino-edad-preescolar-masculino-caucasico-brillantes-emociones-faciales-bolsa-almuerzo-infancia-expresion-diversion-parece-serio-sonador_14965387.htm?query=kids#from_view=detail_alsolike">Imagen de master1305</a> en Freepik');
('Imagen de <a href="https://www.freepik.es/foto-gratis/mujer-joven-hacer-terapia-habla-ninos_18683189.htm#query=equipo%20terapeutico%20para%20ni%C3%B1os&position=3&from_view=search&track=ais">Freepik</a>');
