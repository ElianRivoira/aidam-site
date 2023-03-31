import React, { useState } from 'react';
import Image from 'next/image';

import signoPregunta from '@/assets/icons/faq.png';
import Question from './Question';
import styles from '../../styles/Modelo-aidam.module.css';

const questions = [
  {
    id: 1,
    question: 'Question 1',
    answer:
      'Es un lugar especializado en el tratamiento terapéutico NO farmacológico del adulto mayor con deterioro leve y/o moderado cuyo objetivo central es promover la autonomía e independencia de nuestros asistentes.  Su ser querido encontrará en nuestro Centro un equipo de profesionales entrenado y capacitado que lo ayudará a desarrollar al máximo las capacidades y habilidades que aún permanecen activas, permitiéndole permanecer en su hogar el mayor tiempo posible, evitando y/o retrasando en el tiempo una posible institucionalización geriátrica.',
  },
  {
    id: 2,
    question: 'Question 2',
    answer:
      'Es un lugar especializado en el tratamiento terapéutico NO farmacológico del adulto mayor con deterioro leve y/o moderado cuyo objetivo central es promover la autonomía e independencia de nuestros asistentes.  Su ser querido encontrará en nuestro Centro un equipo de profesionales entrenado y capacitado que lo ayudará a desarrollar al máximo las capacidades y habilidades que aún permanecen activas, permitiéndole permanecer en su hogar el mayor tiempo posible, evitando y/o retrasando en el tiempo una posible institucionalización geriátrica.',
  },
  {
    id: 3,
    question: 'Question 3',
    answer: 'Answer 3',
  },
  {
    id: 4,
    question: 'Question 4',
    answer: 'Answer 4',
  },
  {
    id: 5,
    question: 'Question 5',
    answer: 'Answer 5',
  },
  {
    id: 6,
    question: 'Question 6',
    answer: 'Answer 6',
  },
  {
    id: 7,
    question: 'Question 7',
    answer: 'Answer 7',
  },
  {
    id: 8,
    question: 'Question 8',
    answer: 'Answer 8',
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
            const clas = 'question'+index;
            return (<Question
              handleQuestionClick={handleQuestionClick}
              q={q}
              activeQuestion={activeQuestion}
              custom={true}
              key={index}
              clas={`${styles[clas]}`}
            />
          )})}
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
                {questions.slice(0, 4).map((q, index) => (
                  <Question
                    handleQuestionClick={handleQuestionClick}
                    q={q}
                    activeQuestion={activeQuestion}
                    key={index}
                  />
                ))}
              </div>
              <div className='md:w-1/2 md:pl-2'>
                {questions.slice(4).map((q, index) => (
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
