import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import MakeConsult from '@/components/MakeConsult';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Centro Aidam</title>
      </Head>
      <main>
        <Navbar />
        
        <Faq />
        <MakeConsult />
        <Footer />
      </main>
    </>
  );
}
