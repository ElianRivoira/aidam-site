import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='apple-touch-icon' href='/icon-384x384.png'></link>
        <link rel='icon' href='/icon-384x384.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Open+Sans&family=Quicksand&display=swap'
          rel='stylesheet'
        ></link>
        <meta name='theme-color' content='#fff' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
