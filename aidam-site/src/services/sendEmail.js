import emailjs from '@emailjs/browser';

export const sendEmail = (e, template, form) => {
  e.preventDefault();

  emailjs.sendForm('service_1iyoqgf', template, form.current, 'zc5yQiZMitv3PsWY_')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};