import { FadeIn, StaggerContainer, StaggerItem } from './ScrollAnimation';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        'AccouTaxChania transformed our financial processes. Their attention to detail and proactive advice have been invaluable to our growth.',
      author: 'Sarah L.',
      role: 'CEO, Innovate Co.'
    },
    {
      quote:
        'As a small business owner, I can finally focus on my work knowing my bookkeeping and taxes are in expert hands. Highly recommended!',
      author: 'Mike R.',
      role: 'Owner, The Corner Cafe'
    },
    {
      quote:
        'The team is professional, responsive, and incredibly knowledgeable. They made payroll a breeze for our company.',
      author: 'Emily C.',
      role: 'HR Manager, Tech Solutions'
    }
  ];

  return (
    <section
      className='py-24 bg-neutral-background dark:bg-dark-neutral-background relative overflow-hidden'
      id='testimonials'
    >
      {/* Decorative background element */}
      <div className='absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl'></div>

      <div className='container mx-auto px-4 relative z-10'>
        <FadeIn>
          <div className='text-center max-w-2xl mx-auto mb-16'>
            <h2 className='text-3xl sm:text-4xl font-extrabold text-neutral-text dark:text-white tracking-tight mb-4'>
              Trusted by Chania's Best
            </h2>
            <p className='text-lg text-stone-600 dark:text-dark-subtext'>
              Don't just take our word for it. Here is what our partners have to
              say.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <StaggerItem
              key={index}
              className='flex flex-col justify-between rounded-2xl bg-white dark:bg-background-dark p-8 shadow-sm border border-stone-100 dark:border-stone-800 transition-shadow hover:shadow-lg'
            >
              <div>
                <span className='material-symbols-outlined text-primary/40 text-5xl mb-6'>
                  format_quote
                </span>
                <p className='text-stone-700 dark:text-gray-300 text-lg leading-relaxed mb-6 italic'>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
              <div className='mt-auto border-t border-stone-100 dark:border-stone-800 pt-6'>
                <p className='font-bold text-neutral-text dark:text-white'>
                  {testimonial.author}
                </p>
                <p className='text-sm text-primary font-medium'>
                  {testimonial.role}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TestimonialsSection;
