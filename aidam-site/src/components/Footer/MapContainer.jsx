import React from 'react';

function MapContainer() {
  return (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13400.893468068189!2d-68.8428454!3d-32.8922621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1b1ed7cb4265929%3A0x82e161ea55ed6c63!2sA.I.D.A.M.%20ATENCION%20INTEGRAL%20AL%20DISCAPACITADO%20AUDITIVO%20MENDOZA!5e0!3m2!1ses!2sar!4v1680102520099!5m2!1ses!2sar'
      width='100%'
      height='100%'
      style={{ border: 0 }}
      allowFullScreen=''
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    />
  );
}

export default MapContainer;
