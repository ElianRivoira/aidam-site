import Image from 'next/image';
import React, { useState } from 'react';
import Spinner from './Spinner';

const PCard = ({ photo, name, lastname, profession }) => {
  const [showProfession, setShowProfession] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleMouseEnter = () => {
    setShowProfession(true);
  };

  const handleMouseLeave = () => {
    setShowProfession(false);
  };

  return (
    <div className='flex flex-col w-40 h-56 justify-center items-center relative'>
      <div
        className='flex h-3/4 border-aidamBlue shadow-xg rounded-3xl w-full justify-center mb-2'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {loading && <Spinner />}
        <Image
          src={photo}
          className='w-auto h-full'
          alt='foto'
          onLoadingComplete={() => setLoading(false)}
        />
        <div
          style={{
            opacity: showProfession ? 1 : 0,
            transition: 'opacity .3s ease-in-out',
          }}
          className='absolute bottom-[25%] right-0 p-2 bg-aidamBlue text-center text-quickSand text-white rounded-md'
        >
          {profession}
        </div>
      </div>
      <p className='text-quickSand text-ln text-aidamBlue text-center'>
        {name}
      </p>
      <p className='text-quickSand text-ln text-aidamBlue text-center'>
        {lastname}
      </p>
    </div>
  );
};

export default PCard;
