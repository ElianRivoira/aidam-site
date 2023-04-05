import emailjs from '@emailjs/browser';
import Router from 'next/router';

export const sendEmail = (e, template) => {
  e.preventDefault();

  const serviceId = 'service_fo8col8'; // Id de servicio de emailJS
  const userId = '7QAKyICD2Ig9av3lM'; // Id de usuario de emailJS

  emailjs.sendForm(serviceId, template, e.target, userId).then(
    result => {
      console.log(result.text);

      Router.reload(window.location.pathname);
    },
    error => {
      console.log(error.text);
    }
  );
};
