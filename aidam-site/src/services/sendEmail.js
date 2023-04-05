import emailjs from '@emailjs/browser';

export const sendEmail = (e, template) => {
  e.preventDefault();

  const serviceId = 'service_1iyoqgf'; // Id de servicio de emailJS
  const userId = 'zc5yQiZMitv3PsWY_'; // Id de usuario de emailJS

  emailjs.sendForm(serviceId, template, e.target, userId)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};
