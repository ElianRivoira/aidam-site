import Spinner from '@/components/Spinner';
import '@/styles/globals.css'
import { Router } from 'next/router';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleStart = () => {
    setIsLoading(true);
  };

  const handleComplete = () => {
    setIsLoading(false);
  };

  Router.events.on('routeChangeStart', handleStart);
  Router.events.on('routeChangeComplete', handleComplete);
  Router.events.on('routeChangeError', handleComplete);

  return (
    <>
      {isLoading ? (
        <div className='w-full min-h-screen flex justify-center items-center'>
          <Spinner />
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  ) 
}
