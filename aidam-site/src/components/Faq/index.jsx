import React, { useState } from 'react';
import Image from 'next/image';

import signoPregunta from '@/assets/icons/faq.png';
import Question from './Question';
import styles from '../../styles/Modelo-aidam.module.css';

const questions = [
  {
    id: 1,
    question: '¿Qué es un centro de día para personas mayores?',
    answer:
      'Es un lugar especializado en el tratamiento terapéutico NO farmacológico de personas de 18 a 60 años con deterioro leve y/o moderado cuyo objetivo central es promover la autonomía e independencia de nuestros asistentes.  Su ser querido encontrará en nuestro Centro un equipo de profesionales entrenado y capacitado que lo ayudará a desarrollar al máximo las capacidades y habilidades.',
  },
  {
    id: 2,
    question: '¿A quién está dirigido?',
    answer:
      'Nuestra propuesta tiene probada efectividad en: - Personas con dependencia leve y/o moderada tanto física como cognitiva. - Presenten deterioro emocional. - Mayores que sientan soledad y deseen interactuar con otros en un marco de alegría y cuidados. Luego de una entrevista inicial determinamos junto con el candidato y su familia el mejor programa terapéutico adaptado siempre a sus necesidades y deseos.',
  },
  {
    id: 3,
    question: '¿A partir de qué edad puedo asistir?',
    answer: 'La propuesta del Centro de día está orientada a personas con discapacidad, con deterioro tanto leve como moderado. Los procesos de deterioro físico como cognitivo suelen comenzar. Nuestra propuesta se adapta a las necesidades de cada asistente independientemente de su edad.',
  },
  {
    id: 4,
    question: '¿Qué se hace en un centro de día',
    answer: 'Desde el paradigma de la adultez saludable con enfoque multidisciplinar e integral se abordan 6 ejes generales para mejorar la calidad de vida de nuestros pacientes: prevención y promoción de la salud, estimulación y rehabilitación cognitiva, estimulación y rehabilitación físico-funcional, estimulación Psico-Socio-Emocional, actividades lúdico-recreativas y fortalecimiento familiar.',
  },
  {
    id: 5,
    question: '¿Qué ventajas tiene asistir a un Centro de día?',
    answer: 'Los beneficios de asistir a un centro de día son múltiples, se podrían sintetizar en los siguientes aspectos: valoración gerontológica permanente, terapias preventivas personalizadas, terapias rehabilitadoras personalizadas, fortalecimiento de las capacidades sociales y entrenamiento de las habilidades remanentes.',
  },
  {
    id: 6,
    question: '¿Cómo es el ingreso a un centro de día?',
    answer: 'El proceso se inicia con un primer contacto entre el potencial asistente y el equipo interdisciplinario a los fines de conocer en detalle sus necesidades. Una vez que se acuerda el modelo terapéutico más adecuado se procede a realizar la Valoración Integral (VI) para determinar el Programa de Atención Integral (PAI) personalizado.',
  },
];

const Faq = ({ customQuestions }) => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleQuestionClick = id => {
    if (id === activeQuestion) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };

  return (
    <>
      {customQuestions ? (
        <>
          {customQuestions.map((q, index) => {
            const clas = 'question' + index;
            return (
              <Question
                handleQuestionClick={handleQuestionClick}
                q={q}
                activeQuestion={activeQuestion}
                custom={true}
                key={index}
                clas={`${styles[clas]}`}
              />
            );
          })}
        </>
      ) : (
        <>
          <div className='bg-[#202266] px-8 py-16'>
            <div className='flex justify-center items-center'>
              <Image src={signoPregunta} alt='pregunta' className='w-24 h24' />
              <h1 className='text-3xl text-white font-libreBaskerville ml-4 w-min md:w-fit'>
                Preguntas Frecuentes
              </h1>
            </div>
            <div className='flex flex-col md:flex-row mt-6 md:px-36 text-white'>
              <div className='md:w-1/2 md:pr-2'>
                {questions.slice(0, 3).map((q, index) => (
                  <Question
                    handleQuestionClick={handleQuestionClick}
                    q={q}
                    activeQuestion={activeQuestion}
                    key={index}
                  />
                ))}
              </div>
              <div className='md:w-1/2 md:pl-2'>
                {questions.slice(3).map((q, index) => (
                  <Question
                    handleQuestionClick={handleQuestionClick}
                    q={q}
                    activeQuestion={activeQuestion}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Faq;
