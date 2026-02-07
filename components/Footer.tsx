'use client';

import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-neutral-background dark:bg-dark-neutral-background border-t border-stone-200 dark:border-stone-700">
      <div className="container mx-auto py-6 px-4 text-center text-stone-600 dark:text-dark-subtext text-sm">
        <p>{t('copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
