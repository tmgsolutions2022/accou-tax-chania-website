import Link from 'next/link';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-white/10 bg-background-light/80 backdrop-blur-md dark:bg-background-dark/80 supports-[backdrop-filter]:bg-background-light/60'>
      <div className='container mx-auto flex h-20 items-center justify-between px-4'>
        <Link
          href='#'
          className='flex items-center gap-2 transition-opacity hover:opacity-90'
        >
          <img
            src='assets/images/logo.png'
            alt='AccouTax Chania'
            className='h-12 w-auto object-contain'
            height={48}
            width={120}
          />
        </Link>
        <nav className='hidden items-center gap-8 md:flex'>
          <Link
            href='#services'
            className='text-sm font-semibold text-neutral-text transition-colors hover:text-primary dark:text-dark-text dark:hover:text-primary'
          >
            Services
          </Link>
          <Link
            href='#about'
            className='text-sm font-semibold text-neutral-text transition-colors hover:text-primary dark:text-dark-text dark:hover:text-primary'
          >
            Team
          </Link>
          <Link
            href='#testimonials'
            className='text-sm font-semibold text-neutral-text transition-colors hover:text-primary dark:text-dark-text dark:hover:text-primary'
          >
            Testimonials
          </Link>
          <Link
            href='#contact'
            className='rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-opacity-90 hover:shadow-primary/25 active:scale-95'
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
