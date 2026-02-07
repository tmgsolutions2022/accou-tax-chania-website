'use client';

import { useTranslations } from 'next-intl';

const TestimonialsSection = () => {
  const t = useTranslations('testimonials');

  const testimonials = [
    {
      quoteKey: 'testimonial1.quote',
      authorKey: 'testimonial1.author',
    },
    {
      quoteKey: 'testimonial2.quote',
      authorKey: 'testimonial2.author',
    },
    {
      quoteKey: 'testimonial3.quote',
      authorKey: 'testimonial3.author',
    },
  ];

  return (
    <section className="py-16 bg-neutral-background dark:bg-dark-neutral-background" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-neutral-text dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-8">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-stone-200 dark:border-stone-700"
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-4">
                format_quote
              </span>
              <p className="text-stone-600 dark:text-dark-subtext mb-4 italic">
                &ldquo;{t(testimonial.quoteKey)}&rdquo;
              </p>
              <p className="font-bold text-neutral-text dark:text-white">{t(testimonial.authorKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
