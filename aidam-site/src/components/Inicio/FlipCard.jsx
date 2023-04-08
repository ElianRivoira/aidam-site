import React from 'react';

import styles from '@/styles/Inicio.module.css';
import Link from 'next/link';

const FlipCard = ({ title, imgClass, link }) => {
  return (
    <div className={`${styles.cardContainer}`}>
      <div
        className={`${styles.front} flex justify-center items-center rounded-md`}
      >
        <h2 className='font-libreBaskerville text-3xl text-center'>{title}</h2>
      </div>
      <Link href={link} className={`${styles.back} rounded-md ${styles[imgClass]}`}></Link>
    </div>
  );
};

export default FlipCard;
