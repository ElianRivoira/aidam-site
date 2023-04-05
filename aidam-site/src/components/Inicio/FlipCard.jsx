import React from 'react';

import styles from '@/styles/Inicio.module.css';
import Link from 'next/link';

const FlipCard = ({title, imgClass, link}) => {
  return (
    <Link href={link} className={`${styles.cardContainer}`}>
      <div className={`${styles.front} flex justify-center items-center rounded-md`}>
        <h2 className='font-libreBaskerville text-3xl text-center'>{title}</h2>
      </div>
        <div className={`${styles.back} rounded-md ${styles[imgClass]}`}>
      </div>
    </Link>
  );
};

export default FlipCard;
