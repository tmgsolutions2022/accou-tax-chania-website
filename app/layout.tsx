import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'AccouTaxChania - Expert Accounting Services',
  description:
    'Reliable, professional, and tailored financial services to help you grow.'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' className='light scroll-smooth'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'
          rel='stylesheet'
        />
      </head>
      <body className='bg-background-light dark:bg-background-dark font-display text-neutral-text dark:text-dark-text'>
        <div
          className='relative w-full'
          style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
