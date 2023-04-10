import React, { useState } from 'react';
import Image from 'next/image';

import signoPregunta from '@/assets/icons/faq.png';
import Question from './Question';
import styles from '../../styles/Modelo-aidam.module.css';
import Spinner from '@/components/Spinner';
import { questions } from '../../utils/questions';

const Faq = ({ customQuestions }) => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

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
              <div>
                {loading && <Spinner />}
                <Image
                  src={signoPregunta}
                  alt='pregunta'
                  className='w-24 h24'
                  onLoadingComplete={() => setLoading(false)}
                />
              </div>
              <h1 className='text-3xl text-white font-libreBaskerville ml-4 w-min md:w-fit'>
                Preguntas Frecuentes
              </h1>
            </div>
            <div className='flex flex-col md:flex-row mt-6 md:px-36 text-white'>
              <div className='md:w-1/2 md:pr-2'>
                {questions?.slice(0, 3).map((q, index) => (
                  <Question
                    handleQuestionClick={handleQuestionClick}
                    q={q}
                    activeQuestion={activeQuestion}
                    key={index}
                  />
                ))}
              </div>
              <div className='md:w-1/2 md:pl-2'>
                {questions?.slice(3).map((q, index) => (
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
