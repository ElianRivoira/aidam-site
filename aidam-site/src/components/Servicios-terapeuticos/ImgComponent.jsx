import React, { useEffect, useState } from 'react';

import styles from '@/styles/Servicios-terapeuticos.module.css';

const ImgComponent = ({img, title, posY}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles[img]}`}
      style={{ backgroundPositionY: (-(scrollY / 6) + posY) }}
    >
      <div
        className={`${styles.content} py-[10%] px-8 flex items-center justify-center`}
      >
        <h2 className='font-libreBaskerville text-3xl text-white'>
          {title}
        </h2>
      </div>
    </div>
  );
};

export default ImgComponent;
