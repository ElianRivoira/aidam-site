import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import styles from '../styles/WhatsappButton.module.css';

const WhatsappButton = () => {
  const whatsappNumber = '1234567890';
  const url = `https://wa.me/${whatsappNumber}`;
  
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`${styles.whatsappButton}`}>
      <FaWhatsapp className={`${styles.whatsappIcon}`} />
    </a>
  );
};


export default WhatsappButton