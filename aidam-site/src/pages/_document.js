import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='apple-touch-icon' href='/icon-384x384.png'></link>
        <link rel='icon' href='/aidamLogo4k.svg' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Open+Sans:wght@400;500;600&family=Quicksand&display=swap'
          rel='stylesheet'
        ></link>
        <meta name="title" property="og:title" content="Aidam" />
        <meta property="og:type" content="Article" />
        <meta name="image" property="og:image" content="/aidamTexto.svg" />
        <meta name="description" property="og:description" content="Somos el único centro de día especializado en discapacidad con un programa general de multiestimulación." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
