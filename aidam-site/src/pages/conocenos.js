import Image from 'next/image';
import React, { useState } from 'react';
import signoPregunta from '../assets/icons/signoPregunta.svg';
import mas from '../assets/icons/mas.svg';
import menos from '../assets/icons/menos.svg';

const questions = [
  {
    id: 1,
    question: '¿Qué es un centro de día para personas mayores?',
    answer:
      'Es un lugar especializado en el tratamiento terapéutico NO farmacológico del adulto mayor con deterioro leve y/o moderado cuyo objetivo central es promover la autonomía e independencia de nuestros asistentes.  Su ser querido encontrará en nuestro Centro un equipo de profesionales entrenado y capacitado que lo ayudará a desarrollar al máximo las capacidades y habilidades que aún permanecen activas, permitiéndole permanecer en su hogar el mayor tiempo posible, evitando y/o retrasando en el tiempo una posible institucionalización geriátrica.',
  },
  {
    id: 2,
    question: 'Question 2',
    answer: 'Answer 2',
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

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleQuestionClick = (id) => {
     if (id === activeQuestion) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };

  return (
    <div className='bg-[#202266] px-8 py-16'>
      <div className='flex justify-center items-center'>
        <Image src={signoPregunta} className='w-24 h24' />
        <h1 className='text-3xl text-white font-libreBaskerville ml-4 w-min md:w-fit'>
          Preguntas Frecuentes
        </h1>
      </div>
      <div className='flex flex-col md:flex-row mt-6 md:px-36 text-white'>
        <div className='md:w-1/2 md:pr-2'>
          {questions.slice(0, 4).map((q) => (
            <div
              key={q.id}
              className={`p-4 mb-2 cursor-pointer ${
                q.id === activeQuestion ? '' : ''
              }`}
              onClick={() => handleQuestionClick(q.id)}
            >
              {' '}
              <div className='flex items-center mb-2'>
                {activeQuestion === q.id ? (
                  <div className='flex w-6 h-6 rounded-full border border-[#b1b3e7] bg-[#b1b3e7] justify-center mr-2 min-w-0 flex-shrink-0'>
                    <Image src={menos} />
                  </div>
                ) : (
                  <div className='flex w-6 h-6 rounded-full border hover:border-[#b1b3e7] hover:bg-[#b1b3e7] justify-center mr-2 duration-300 min-w-0 flex-shrink-0'>
                    <Image src={mas} />
                  </div>
                )}
                <h3 className='font-semibold text-lg font-quickSand hover:text-[#b1b3e7] duration-300'>
                  {q.question}
                </h3>
              </div>
              <p
                className='font-libreBaskerville text-lg'
                style={{
                  maxHeight: q.id === activeQuestion ? '1000px' : '0',
                  transition: `max-height ${
                    q.id === activeQuestion ? 'auto' : '0.5s'
                  } ease-in`,
                  overflow: 'hidden',
                }}
              >
                {q.answer}
              </p>
            </div>
          ))}
        </div>
        <div className='md:w-1/2 md:pl-2'>
          {questions.slice(4).map((q) => (
            <div
              key={q.id}
              className={`p-4 mb-2 cursor-pointer ${
                q.id === activeQuestion ? '' : ''
              }`}
              onClick={() => handleQuestionClick(q.id)}
            >
              {' '}
              <div className='flex items-center mb-2'>
                {activeQuestion === q.id ? (
                  <div className='flex w-6 h-6 rounded-full border border-[#b1b3e7] bg-[#b1b3e7] justify-center mr-2 min-w-0 flex-shrink-0'>
                    <Image src={menos} />
                  </div>
                ) : (
                  <div className='flex w-6 h-6 rounded-full border hover:border-[#b1b3e7] hover:bg-[#b1b3e7] justify-center mr-2 duration-300 min-w-0 flex-shrink-0'>
                    <Image src={mas} />
                  </div>
                )}
                <h3 className='font-semibold text-lg font-quickSand hover:text-[#b1b3e7] duration-300'>
                  {q.question}
                </h3>
              </div>
              <p
                className='font-libreBaskerville text-lg'
                style={{
                  maxHeight: q.id === activeQuestion ? '1000px' : '0',
                  transition: `max-height ${
                    q.id === activeQuestion ? 'auto' : '0.5s'
                  } ease-out`,
                  overflow: 'hidden',
                }}
              >
                {q.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
