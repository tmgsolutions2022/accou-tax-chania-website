import { FadeIn, StaggerContainer, StaggerItem } from './ScrollAnimation';

const ServicesSection = () => {
  const services = [
    {
      icon: 'calculate',
      title: 'Tax Strategy & Compliance',
      description:
        'Maximize returns and ensure full compliance with expert tax filing for individuals and corporate entities.'
    },
    {
      icon: 'menu_book',
      title: 'Precision Bookkeeping',
      description:
        'Maintain impeccable financial records with our accurate, timely, and transparent bookkeeping services.'
    },
    {
      icon: 'payments',
      title: 'Seamless Payroll',
      description:
        'Streamline payroll processing to ensure accuracy, timeliness, and full regulatory compliance.'
    },
    {
      icon: 'trending_up',
      title: 'Business Advisory',
      description:
        'Unlock growth potential with strategic financial consulting tailored to your business goals.'
    }
  ];

  return (
    <section
      className='py-24 bg-neutral-background dark:bg-dark-neutral-background'
      id='services'
    >
      <div className='container mx-auto px-4'>
        <FadeIn>
          <div className='text-center max-w-2xl mx-auto mb-16'>
            <h2 className='text-3xl sm:text-4xl font-extrabold text-neutral-text dark:text-white tracking-tight mb-4'>
              Comprehensive Financial Solutions
            </h2>
            <p className='text-lg text-stone-600 dark:text-dark-subtext'>
              We provide a full suite of services designed to secure your
              financial future and drive business performance.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service, index) => (
            <StaggerItem
              key={index}
              className='group relative flex flex-col items-center text-center p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-stone-200 dark:border-stone-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30'
            >
              <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white'>
                <span className='material-symbols-outlined text-3xl'>
                  {service.icon}
                </span>
              </div>
              <h3 className='mb-3 text-xl font-bold text-neutral-text dark:text-white'>
                {service.title}
              </h3>
              <p className='text-stone-600 dark:text-dark-subtext leading-relaxed'>
                {service.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesSection;
