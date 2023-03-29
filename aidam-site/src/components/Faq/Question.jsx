import React from 'react';
import Image from 'next/image';

import mas from '@/assets/icons/mas.svg';
import menos from '@/assets/icons/menos.svg';
import useMediaQuery from '@/hooks/useMediaQuery';

const Question = ({q, activeQuestion, handleQuestionClick, custom, clas}) => {
  return (
    <div
      key={q.id}
      className={`p-2.5 cursor-pointer ${clas}`}
      onClick={() => handleQuestionClick(q.id)}
    >
      {' '}
      <div className='flex items-center'>
        {activeQuestion === q.id ? (
          <div className={`flex ${custom ? useMediaQuery(640) ? 'p-1.5 w-6 h-6' : 'p-1 w-10 h-10' : 'p-1.5 w-6 h-6'} rounded-full border border-aidamHover bg-aidamHover justify-center mr-4 min-w-0 flex-shrink-0`}>
            <Image src={menos} alt='menos' />
          </div>
        ) : (
          <div className={`flex ${custom ? useMediaQuery(640) ? 'p-1.5 w-6 h-6' : 'p-1 w-10 h-10' : 'p-1.5 w-6 h-6'} bg-aidamBlue rounded-full border hover:border-aidamHover hover:bg-aidamHover justify-center mr-4 min-w-0 flex-shrink-0`}>
            <Image src={mas} alt='mas' />
          </div>
        )}
        <h3 className={`font-normal text-lb ${custom ? 'font-openSans font-medium text-xb' : 'font-libreBaskerville'} hover:text-aidamHover`}>
          {q.question}
        </h3>
      </div>
      <p
        className={`font-quickSand text-lg ${custom ? 'font-normal' : ''}`}
        style={{
          maxHeight: q.id === activeQuestion ? '1000px' : '0',
          transition: `max-height ${
            q.id === activeQuestion ? '0.5s' : '0.2s'
          } ease-in-out`,
          overflow: 'hidden',
        }}
      >
        {q.answer}
      </p>
    </div>
  );
};

export default Question;
