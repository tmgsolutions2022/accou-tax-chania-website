'use client';

import { FormEvent } from 'react';
import { FadeIn } from './ScrollAnimation';

const ContactSection = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <section
      className='py-24 bg-background-light dark:bg-background-dark'
      id='contact'
    >
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center'>
          {/* Contact Info */}
          <FadeIn className='space-y-10 order-2 lg:order-1'>
            <div>
              <h2 className='text-3xl sm:text-4xl font-extrabold text-neutral-text dark:text-white tracking-tight mb-4'>
                Let's Start a Conversation
              </h2>
              <p className='text-lg text-stone-600 dark:text-dark-subtext'>
                Ready to take control of your finances? Reach out to us for a
                consultation or any inquiries. We are here to help.
              </p>
            </div>

            <div className='space-y-8'>
              <div className='flex items-start gap-5 group'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white'>
                  <span className='material-symbols-outlined text-2xl'>
                    location_on
                  </span>
                </div>
                <div>
                  <h4 className='text-lg font-bold text-neutral-text dark:text-white mb-1'>
                    Visit Us
                  </h4>
                  <p className='text-stone-600 dark:text-dark-subtext'>
                    44 Apokoronou St.,
                    <br />
                    73134 Chania, Greece
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-5 group'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white'>
                  <span className='material-symbols-outlined text-2xl'>
                    call
                  </span>
                </div>
                <div>
                  <h4 className='text-lg font-bold text-neutral-text dark:text-white mb-1'>
                    Call Us
                  </h4>
                  <p className='text-stone-600 dark:text-dark-subtext'>
                    +30 28210 55528
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-5 group'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white'>
                  <span className='material-symbols-outlined text-2xl'>
                    mail
                  </span>
                </div>
                <div>
                  <h4 className='text-lg font-bold text-neutral-text dark:text-white mb-1'>
                    Email Us
                  </h4>
                  <p className='text-stone-600 dark:text-dark-subtext'>
                    contact@accoutaxchania.gr
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn
            delay={0.2}
            className='rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-xl border border-stone-100 dark:border-stone-800 order-1 lg:order-2'
          >
            <h3 className='text-2xl font-bold text-neutral-text dark:text-white mb-6'>
              Send us a Message
            </h3>
            <form className='space-y-5' onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div>
                  <label
                    className='block text-sm font-semibold text-stone-700 dark:text-gray-300 mb-2'
                    htmlFor='name'
                  >
                    Name
                  </label>
                  <input
                    className='w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-stone-700 dark:bg-background-dark dark:text-white transition-all'
                    id='name'
                    name='name'
                    type='text'
                    placeholder='Your Full Name'
                  />
                </div>
                <div>
                  <label
                    className='block text-sm font-semibold text-stone-700 dark:text-gray-300 mb-2'
                    htmlFor='phone'
                  >
                    Phone
                  </label>
                  <input
                    className='w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-stone-700 dark:bg-background-dark dark:text-white transition-all'
                    id='phone'
                    name='phone'
                    type='tel'
                    placeholder='+30 ...'
                  />
                </div>
              </div>
              <div>
                <label
                  className='block text-sm font-semibold text-stone-700 dark:text-gray-300 mb-2'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  className='w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-stone-700 dark:bg-background-dark dark:text-white transition-all'
                  id='email'
                  name='email'
                  type='email'
                  placeholder='name@company.com'
                />
              </div>
              <div>
                <label
                  className='block text-sm font-semibold text-stone-700 dark:text-gray-300 mb-2'
                  htmlFor='message'
                >
                  Message
                </label>
                <textarea
                  className='w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-stone-700 dark:bg-background-dark dark:text-white transition-all min-h-[120px]'
                  id='message'
                  name='message'
                  rows={4}
                  placeholder='How can we help you?'
                ></textarea>
              </div>
              <button
                className='w-full rounded-lg bg-primary py-4 text-center text-sm font-bold text-white shadow-lg transition-all hover:bg-secondary hover:shadow-primary/25 active:scale-95'
                type='submit'
              >
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
