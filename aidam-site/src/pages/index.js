import Footer from '@/components/Footer';
import MakeConsult from '@/components/MakeConsult';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>AIDAM - Inicio</title>
      </Head>
      <main>
        <Navbar />
        <MakeConsult />
        <Footer />
      </main>
    </>
  );
}
