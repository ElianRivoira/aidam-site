import React from 'react';
import Image from 'next/image';

import dropRightWhite from '@/assets/icons/dropRight-white.svg';
import useMediaQuery from '@/hooks/useMediaQuery';

const Question = ({q, activeQuestion, handleQuestionClick, custom, clas}) => {
  return (
    <div
      key={q.id}
      className={`p-2.5 ${clas}`}
      // onClick={() => handleQuestionClick(q.id)}
    >
      {' '}
      <div className='flex items-center'>
        <div className={`flex ${custom ? useMediaQuery(640) ? 'p-1.5 w-6 h-6' : 'p-1 w-10 h-10' : 'p-1.5 w-6 h-6'} bg-aidamBlue rounded-full border justify-center mr-4 min-w-0 flex-shrink-0`}>
          <Image src={dropRightWhite} alt='dropRight' />
        </div>
        {/* {activeQuestion === q.id ? (
          <div className={`flex ${custom ? useMediaQuery(640) ? 'p-1.5 w-6 h-6' : 'p-1 w-10 h-10' : 'p-1.5 w-6 h-6'} rounded-full border border-aidamHover bg-aidamHover justify-center mr-4 min-w-0 flex-shrink-0`}>
            <Image src={menos} alt='menos' />
          </div>
        ) : (
          <div className={`flex ${custom ? useMediaQuery(640) ? 'p-1.5 w-6 h-6' : 'p-1 w-10 h-10' : 'p-1.5 w-6 h-6'} bg-aidamBlue rounded-full border hover:border-aidamHover hover:bg-aidamHover justify-center mr-4 min-w-0 flex-shrink-0 transition-colors`}>
            <Image src={mas} alt='mas' />
          </div>
        )} */}
        <h3 className={`font-normal text-lb ${custom ? useMediaQuery(883) ? 'font-openSans font-medium text-ln' : 'font-openSans font-medium text-xb' : 'font-libreBaskerville'}`}>
          {q.question}
        </h3>
      </div>
      <p
        className={`font-quickSand text-lg ${custom ? 'font-normal bg-aidamBlue text-white rounded-md px-3' : null} ${q.id === activeQuestion ? 'py-5' : null}`}
        style={{
          maxHeight: q.id === activeQuestion ? '1000px' : '0',
          transition: `all ${
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
