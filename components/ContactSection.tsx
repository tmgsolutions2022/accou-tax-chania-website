'use client';

import { FormEvent } from 'react';
import { useTranslations } from 'next-intl';

const ContactSection = () => {
  const t = useTranslations('contact');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <section
      className='py-16 bg-background-light dark:bg-background-dark'
      id='contact'
    >
      <div className='container mx-auto px-4'>
        <h2 className='text-center text-neutral-text dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-8'>
          {t('title')}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          <div>
            <h3 className='text-neutral-text dark:text-white text-xl font-bold mb-4'>
              {t('form.title')}
            </h3>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div>
                <label
                  className='block text-sm font-medium text-stone-700 dark:text-dark-subtext mb-1'
                  htmlFor='name'
                >
                  {t('form.name')}
                </label>
                <input
                  className='flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-primary dark:text-white'
                  id='name'
                  name='name'
                  type='text'
                />
              </div>
              <div>
                <label
                  className='block text-sm font-medium text-stone-700 dark:text-dark-subtext mb-1'
                  htmlFor='email'
                >
                  {t('form.email')}
                </label>
                <input
                  className='flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-primary dark:text-white'
                  id='email'
                  name='email'
                  type='email'
                />
              </div>
              <div>
                <label
                  className='block text-sm font-medium text-stone-700 dark:text-dark-subtext mb-1'
                  htmlFor='phone'
                >
                  {t('form.phone')}
                </label>
                <input
                  className='flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-primary dark:text-white'
                  id='phone'
                  name='phone'
                  type='tel'
                />
              </div>
              <div>
                <label
                  className='block text-sm font-medium text-stone-700 dark:text-dark-subtext mb-1'
                  htmlFor='message'
                >
                  {t('form.message')}
                </label>
                <textarea
                  className='flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-primary dark:text-white'
                  id='message'
                  name='message'
                  rows={4}
                ></textarea>
              </div>
              <button
                className='w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary'
                type='submit'
              >
                {t('form.submit')}
              </button>
            </form>
          </div>
          <div className='space-y-6'>
            <h3 className='text-neutral-text dark:text-white text-xl font-bold mb-4'>
              {t('info.title')}
            </h3>
            <div className='flex items-start gap-4'>
              <span className='material-symbols-outlined text-primary text-2xl mt-1'>
                location_on
              </span>
              <div>
                <h4 className='font-bold text-neutral-text dark:text-white'>
                  {t('info.address.label')}
                </h4>
                <p className='text-stone-600 dark:text-dark-subtext'>
                  {t('info.address.value')}
                </p>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <span className='material-symbols-outlined text-primary text-2xl mt-1'>
                call
              </span>
              <div>
                <h4 className='font-bold text-neutral-text dark:text-white'>
                  {t('info.phone.label')}
                </h4>
                <p className='text-stone-600 dark:text-dark-subtext'>
                  {t('info.phone.value')}
                </p>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <span className='material-symbols-outlined text-primary text-2xl mt-1'>
                mail
              </span>
              <div>
                <h4 className='font-bold text-neutral-text dark:text-white'>
                  {t('info.email.label')}
                </h4>
                <p className='text-stone-600 dark:text-dark-subtext'>
                  {t('info.email.value')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
