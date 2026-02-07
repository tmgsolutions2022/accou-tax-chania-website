'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const t = useTranslations('header');

  return (
    <header className='sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm shadow-sm'>
      <div className='container mx-auto flex items-center p-4 justify-between'>
        <Link href='#' className='flex items-center gap-2'>
          <img
            src='/assets/images/logo.png'
            alt='AccouTax Chania logo with a geometric shape'
            className='h-10'
            height={40}
          />
        </Link>
        <nav className='hidden md:flex items-center space-x-6'>
          <Link
            href='#services'
            className='text-sm font-bold text-neutral-text dark:text-dark-text hover:text-primary dark:hover:text-primary'
          >
            {t('services')}
          </Link>
          <Link
            href='#about'
            className='text-sm font-bold text-neutral-text dark:text-dark-text hover:text-primary dark:hover:text-primary'
          >
            {t('about')}
          </Link>
          <Link
            href='#testimonials'
            className='text-sm font-bold text-neutral-text dark:text-dark-text hover:text-primary dark:hover:text-primary'
          >
            {t('testimonials')}
          </Link>
          <Link
            href='#contact'
            className='text-sm font-bold text-neutral-text dark:text-dark-text hover:text-primary dark:hover:text-primary'
          >
            {t('contact')}
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;
