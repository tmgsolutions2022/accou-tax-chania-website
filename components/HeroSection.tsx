import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from './ScrollAnimation';

const HeroSection = () => {
  return (
    <section
      id='home'
      className='relative overflow-hidden bg-background-dark py-24 sm:py-32'
    >
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-background-dark/40 z-10' />
        <div
          className='h-full w-full bg-cover bg-center bg-no-repeat opacity-90'
          style={{
            backgroundImage: 'url("/assets/images/hero-bg.png")'
          }}
        />
      </div>

      <div className='container relative z-20 mx-auto px-4'>
        <div className='mx-auto max-w-3xl text-center'>
          <FadeIn>
            <div className='mb-6 inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary backdrop-blur-sm border border-primary/20'>
              Trusted Annual Accounting & Tax Services
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className='mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl'>
              Precision Accounting. <br className='hidden sm:block' />
              <span className='text-primary'>Strategic Growth.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className='mb-10 text-lg leading-8 text-gray-300 sm:text-xl'>
              Empowering Chania's businesses with expert financial guidance, tax
              planning, and personalized consulting. We simplify finance so you
              can focus on what matters most.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
              <Link
                href='#contact'
                className='group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-full bg-primary px-8 text-base font-bold text-white shadow-lg transition-all hover:bg-secondary hover:shadow-primary/30 sm:w-auto'
              >
                <div className='absolute inset-0 w-0 bg-white/20 transition-all duration-[250ms] ease-out group-hover:w-full opacity-0 group-hover:opacity-100' />
                <span className='relative'>Book a Consultation</span>
              </Link>
              <Link
                href='#services'
                className='flex h-12 w-full items-center justify-center rounded-full border border-gray-600 bg-transparent px-8 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/5 sm:w-auto'
              >
                Explore Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
