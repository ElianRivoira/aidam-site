import React, { useState } from 'react';
import Image from 'next/image';

import Spinner from '@/components/Spinner';

const Item = ({ icon, title, text }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className={`flex flex-col items-center ${
        text ? 'w-[260px]' : 'w-[140px]'
      }`}
    >
      <div
        className={`flex flex-col items-center ${
          text ? 'max-w-[260px]' : 'max-w-[140px]'
        }`}
      >
        <div>
          {loading && <Spinner />}
            <Image
              src={icon}
              alt={title}
              width={text ? 100 : 80}
              onLoadingComplete={() => setLoading(false)}
            />
        </div>
        <h3 className='font-libreBaskerville text-lx text-aidamBlue w-fit text-center mt-4'>
          {title}
        </h3>
        {text ? (
          <p className='font-quicksand text-lb mt-4 text-aidamBlue text-center'>
            {text}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Item;
