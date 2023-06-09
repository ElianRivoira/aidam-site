import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import MakeConsult from '@/components/MakeConsult';
import Navbar from '@/components/Navbar';
import styles from '@/styles/Servicios-terapeuticos.module.css';
import ImgComponent from '@/components/Servicios-terapeuticos/ImgComponent';
import dropRight from '../assets/icons/dropRight.svg';
import useMediaQuery from '@/hooks/useMediaQuery';
import enfermeria from '@/assets/icons/enfermeria.png';
import escuela from '@/assets/icons/escuela.png';
import supervisionMedica from '@/assets/icons/supervision-medica.png';
import supervisionNutricional from '@/assets/icons/supervision-nutricional.png';
import WhatsappButton from '@/components/WhatsappButton';

const serviciosTerapeuticos = () => {
  return (
    <>
      <Head>
        <title>SERVICIOS TERAPEUTICOS - Centro Aidam</title>
      </Head>
      <main className='min-h-screen'>
        <Navbar />
        <div className={`mt-23 px-8 pt-[14%] pb-[28%] ${styles.bgImage}`}>
          <h1 className='font-libreBaskerville text-4.5xl text-center text-white'>
            Servicios Terapéuticos
          </h1>
        </div>
        <div className={`px-8 pt-12 flex justify-center `}>
          <div className='max-w-3xl mb-10'>
            <h2 className='font-libreBaskerville text-3xl text-center mt-2 text-aidamBlue'>
              Nuestros Servicios
            </h2>
            <p className='font-quickSand text-lz text-center mt-2 text-aidamBlue'>
              Trabajamos en el desarrollo de alternativas de abordaje que cubran
              todo el proceso de crecimiento. Nuestro método Aidam busca la
              integración terapéutica con objetivos preventivos y
              rehabilitadores que fortalezcan las capacidades conservadas.
            </p>
          </div>
        </div>
        <ImgComponent
          img='centroDeDia'
          title=''
          posY={useMediaQuery(450) ? 0 : 800}
        />
        <div className='px-8 py-20 sm:py-[100px] flex flex-col items-center'>
          <div className='max-w-7xl flex flex-col items-center'>
            <div className='mb-10'>
              <h1 className='text-center font-libreBaskerville text-3xl text-aidamBlue'>
                Elaboramos una propuesta integral para cada necesidad:
              </h1>
            </div>
            <div className='flex smMax:flex-col smMax:gap-4 w-full'>
              <div className='flex flex-col gap-4 w-1/2'>
                <div className='flex'>
                  <Image src={dropRight} alt='item' className='mr-3' />{' '}
                  <span className='text-grey8 font-quickSand text-lb'>
                    Abordaje a la atención temprana.
                  </span>
                </div>
                <div className='flex'>
                  <Image src={dropRight} alt='item' className='mr-3' />{' '}
                  <span className='text-grey8 font-quickSand text-lb'>
                    Apoyo a la inclusión.
                  </span>
                </div>
                <div className='flex'>
                  <Image src={dropRight} alt='item' className='mr-3' />{' '}
                  <span className='text-grey8 font-quickSand text-lb'>
                    Rehabilitación y terapias.
                  </span>
                </div>
              </div>
              <div className='flex flex-col gap-4 w-1/2'>
                <div className='flex'>
                  <Image src={dropRight} alt='item' className='mr-3' />{' '}
                  <span className='text-grey8 font-quickSand text-lb'>
                    Centro de día.
                  </span>
                </div>
                <div className='flex'>
                  <Image src={dropRight} alt='item' className='mr-3' />{' '}
                  <span className='text-grey8 font-quickSand text-lb'>
                    Acompañamiento al proceso de inclusión en educación común.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ImgComponent
          img='unidadDeMemoria'
          title=''
          posY={useMediaQuery(450) ? 0 : 2000}
        /> */}
        {/* <div className='px-8 py-[5%] bg-aidamBlue flex justify-center'>
          <div className='max-w-4xl w-full'>
            <p className='text-center text-white mb-10 font-quickSand text-lz'>
              Propuesta innovadora diseñada por nuestro Centro para todas
              aquellas personas que deseen un servicio exclusivo, individual y
              con altos estándares de calidad.
            </p>
            <div className='flex smMax:flex-col smMax:gap-12'>
              <div className='w-1/2 smMax:w-full rounded-[20px] p-5 bg-white sm:mr-6'>
                <h2 className='text-aidamBlue font-libreBaskerville text-3xl mb-3 text-center'>
                  Nuestro trabajo
                </h2>
                <ul className='list-disc pl-10'>
                  <li className='text-aidamBlue font-quickSand text-ln my-4'>
                    Valoración inicial.
                  </li>
                  <li className='text-aidamBlue font-quickSand text-ln my-4'>
                    Talleres de Memoria por niveles.
                  </li>
                  <li className='text-aidamBlue font-quickSand text-ln my-4'>
                    Estimulación cognitiva.
                  </li>
                  <li className='text-aidamBlue font-quickSand text-ln my-4'>
                    Rehabilitación.
                  </li>
                  <li className='text-aidamBlue font-quickSand text-ln my-4'>
                    Neuropsicología.
                  </li>
                  <li className='text-aidamBlue font-quickSand text-ln my-4'>
                    Terapia Ocupacional.
                  </li>
                  <li className='text-aidamBlue font-quickSand text-ln my-4'>
                    Reentrenamiento de las AVD.
                  </li>
                  <li className='text-aidamBlue font-quickSand text-ln my-4'>
                    Fisioterapia y psicomotricidad.
                  </li>
                  <li className='text-aidamBlue font-quickSand text-ln my-4'>
                    Gimnasia.
                  </li>
                  <li className='text-aidamBlue font-quickSand text-ln my-4'>
                    Apoyo familiar.
                  </li>
                </ul>
              </div>
              <div className='w-1/2 smMax:w-full rounded-[20px] p-5 bg-white sm:ml-6'>
                <h2 className='text-aidamBlue font-libreBaskerville text-3xl mb-3 text-center'>
                  Dirigido a:
                </h2>
                <ul className='list-disc pl-10'>
                  <li className='text-aidamBlue font-quickSand text-ln my-4'>
                    La prevención del deterioro cognitivo mediante actividades
                    de entrenamiento cerebral.
                  </li>
                  <li className='text-aidamBlue font-quickSand text-ln my-4'>
                    Personas independientes en sus actividades diarias que
                    comienzan con olvidos esporádicos.
                  </li>
                  <li className='text-aidamBlue font-quickSand text-ln my-4'>
                    Personas que presentan una patología diagnosticada por
                    neurólogo, geriatra, etc.
                  </li>
                  <li className='text-aidamBlue font-quickSand text-ln my-4'>
                    Trabajando sobre la conservación de funciones que promuevan
                    mantener la autonomía e independencia del adulto mayor.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        <ImgComponent
          img='servicios'
          title=''
          posY={useMediaQuery(450) ? 400 : 0}
        />
        <div className='px-8 py-[5%] bg-aidamBlue flex justify-center'>
          <div className='max-w-4xl w-full flex flex-col items-center'>
            {/* <p className='text-center text-aidamBlue mb-10 font-quickSand text-lz'>
              Aquellas familias que optaron por una institución para su ser
              querido también pueden contar con los servicios de
              multiestimulación Aidam.
            </p> */}
            <div className='w-1/2 smMax:w-full rounded-[20px] p-5 bg-white'>
              <h2 className='text-aidamBlue font-libreBaskerville text-3xl mb-3 text-center'>
                Servicios
              </h2>
              <ul className='list-disc pl-10 text-aidamBlue'>
                <li className='font-quickSand text-ln my-4'>
                  Valoración inicial.
                </li>
                <li className='font-quickSand text-ln my-4'>
                  Estimulación cognitiva.
                </li>
                <li className='font-quickSand text-ln my-4'>
                  Neuropsicología.
                </li>
                <li className='font-quickSand text-ln my-4'>
                  Terapia Ocupacional con integración sensorial.
                </li>
                <li className='font-quickSand text-ln my-4'>
                  Psicomotricidad.
                </li>
                <li className='font-quickSand text-ln my-4'>Gimnasia.</li>
                <li className='font-quickSand text-ln my-4'>Fonoaudiología.</li>
                <li className='font-quickSand text-ln my-4'>
                  Terapia del lenguaje.
                </li>
                <li className='font-quickSand text-ln my-4'>Psicopedagogía.</li>
                <li className='font-quickSand text-ln my-4'>
                  Pedagogía terapéutica.
                </li>
                <li className='font-quickSand text-ln my-4'>Talleres.</li>
                <li className='font-quickSand text-ln my-4'>Psiquiatría.</li>
                <li className='font-quickSand text-ln my-4'>Fisiatría.</li>
                <li className='font-quickSand text-ln my-4'>Pediatría.</li>
                <li className='font-quickSand text-ln my-4'>Kinesiología.</li>
                <li className='font-quickSand text-ln my-4'>Terapia visual.</li>
              </ul>
            </div>
          </div>
        </div>
        <ImgComponent
          img='aidamHome'
          title='Aidam home'
          posY={useMediaQuery(450) ? 1000 : 1600}
        />
        <div className='px-8 py-[5%] bg-white flex justify-center'>
          <div className='max-w-4xl w-full flex flex-col items-center'>
            <p className='text-center text-aidamBlue mb-10 font-quickSand text-xb'>
              Nos proponemos llevar a su domicilio lo mejor de nuestro servicio
              terapéutico para lograr un trabajo interdisciplinario brindando
              sugerencias, estrategias y adaptaciones.
            </p>
            {/* <div className='w-1/2 smMax:w-full rounded-[20px] p-5 bg-aidamBlue'>
              <h2 className='text-white font-libreBaskerville text-3xl mb-3 text-center'>
                Nuestro trabajo
              </h2>
              <ul className='text-white list-disc pl-10'>
                <li className='font-quickSand text-ln my-4'>
                  Valoración.
                </li>
                <li className='font-quickSand text-ln my-4'>
                  Estimulación cognitiva.
                </li>
                <li className='font-quickSand text-ln my-4'>
                  Terapia Ocupacional y entrenamiento de las AVD.
                </li>
                <li className='font-quickSand text-ln my-4'>
                  Adaptación del hogar.
                </li>
                <li className='font-quickSand text-ln my-4'>
                  Estimulación física y gimnasia.
                </li>
                <li className='font-quickSand text-ln my-4'>
                  Talleres de expresión.
                </li>
                <li className='font-quickSand text-ln my-4'>
                  Programa terapéutico individual.
                </li>
                <li className='font-quickSand text-ln my-4'>
                  Informes periódicos de evolución.
                </li>
                <li className='font-quickSand text-ln my-4'>
                  Asesoramiento familiar permanente.
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        {/* <ImgComponent
          img='otrosServicios'
          title='Otros servicios'
          posyY={1000}
        />
        <div className='px-8 py-[5%] flex justify-center'>
          <div className='flex smMax:flex-col max-w-7xl w-full'>
            {useMediaQuery(640) ? (
              <>
                <div className='flex justify-center mb-8'>
                  <div className='w-1/2 flex flex-col items-center'>
                    <Image
                      src={supervisionMedica}
                      alt='supervisionMedica'
                      width={100}
                    />
                    <p className='font-quickSand text-ln text-aidamBlue text-center'>
                      Supervision <br /> Medica
                    </p>
                  </div>
                  <div className='w-1/2 flex flex-col items-center'>
                    <Image
                      src={supervisionNutricional}
                      alt='supervisionNutricional'
                      width={100}
                    />
                    <p className='font-quickSand text-ln text-aidamBlue text-center'>
                      Supervision <br /> Nutricional
                    </p>
                  </div>
                </div>
                <div className='flex justify-center mb-8'>
                  <div className='w-1/2 flex flex-col items-center'>
                    <Image src={enfermeria} alt='enfermeria' width={100} />
                    <p className='font-quickSand text-ln text-aidamBlue text-center'>
                      Enfermería
                    </p>
                  </div>
                  <div className='w-1/2 flex flex-col items-center'>
                    <Image src={escuela} alt='escuela' width={100} />
                    <p className='font-quickSand text-ln text-aidamBlue text-center'>
                      Escuela de familias
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='w-1/4 flex flex-col items-center'>
                  <Image
                    src={supervisionMedica}
                    alt='supervisionMedica'
                    width={100}
                  />
                  <p className='font-quickSand text-ln text-aidamBlue text-center'>
                    Supervision <br /> Medica
                  </p>
                </div>
                <div className='w-1/4 flex flex-col items-center'>
                  <Image
                    src={supervisionNutricional}
                    alt='supervisionNutricional'
                    width={100}
                  />
                  <p className='font-quickSand text-ln text-aidamBlue text-center'>
                    Supervision <br /> Nutricional
                  </p>
                </div>
                <div className='w-1/4 flex flex-col items-center'>
                  <Image src={enfermeria} alt='enfermeria' width={100} />
                  <p className='font-quickSand text-ln text-aidamBlue text-center'>
                    Enfermería
                  </p>
                </div>
                <div className='w-1/4 flex flex-col items-center'>
                  <Image src={escuela} alt='escuela' width={100} />
                  <p className='font-quickSand text-ln text-aidamBlue text-center'>
                    Escuela de familias
                  </p>
                </div>
              </>
            )}
          </div>
        </div> */}
        <MakeConsult />
        <Footer />
        <WhatsappButton />
      </main>
    </>
  );
};

export default serviciosTerapeuticos;

('<a href="https://www.freepik.com/free-photo/closeup-support-hands_2825706.htm">Image by rawpixel.com</a> on Freepik');
('<a href="https://www.freepik.com/free-photo/unfocused-people-walking_952915.htm">Image by mrsiraphol</a> on Freepik');
('Imagen de <a href="https://www.freepik.es/foto-gratis/primer-plano-mujer-joven-dibujo-casa-cerca-ventana_14600809.htm#query=mano%20escribiendo%20vista%20lateralmente&position=45&from_view=search&track=ais">Freepik</a>');
('Imagen de <a href="https://www.freepik.es/foto-gratis/trabajo-equipo-personas-negocios_12162794.htm#query=personas%20hablando&position=31&from_view=search&track=ais">Freepik</a>');
