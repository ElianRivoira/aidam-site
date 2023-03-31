import Image from 'next/image';
import React from 'react';

const Item = ({ icon, title, text }) => {
  return (
    <div className={`flex flex-col items-center ${text ? 'max-w-[260px]' : 'max-w-[140px]'}`}>
      <Image
        src={icon}
        alt={title}
        width={80}
      />
      <h3 className='font-libreBaskerville text-lx text-aidamBlue w-fit text-center mt-4'>
        {title}
      </h3>
      {text ? (
        <p className='font-quicksand text-lb mt-4 text-aidamBlue text-center'>{text}</p>
      ) : null}
    </div>
  );
};

export default Item;
