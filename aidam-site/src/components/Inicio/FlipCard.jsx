import React from 'react';

import styles from '@/styles/Inicio.module.css';

const FlipCard = ({title, img}) => {
  return (
    <div className={`${styles.cardContainer}`}>
      <div className={`${styles.front} flex justify-center items-center rounded-md`}>
        <h2 className='font-libreBaskerville text-3xl text-center'>{title}</h2>
      </div>
        <div className={`${styles.back} rounded-md`}>
      </div>
    </div>
  );
};

export default FlipCard;
