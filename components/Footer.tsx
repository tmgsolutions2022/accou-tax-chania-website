const Footer = () => {
  return (
    <footer className='bg-neutral-background dark:bg-dark-neutral-background border-t border-stone-200 dark:border-stone-800 pt-12 pb-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 mb-8'>
          <div className='flex items-center gap-2'>
            <img
              src='assets/images/logo.png'
              alt='AccouTax Chania'
              className='h-10 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all'
            />
          </div>
          <p className='text-stone-500 dark:text-stone-400 text-sm'>
            Professional Accounting & Tax Services in Chania.
          </p>
        </div>
        <div className='border-t border-stone-200 dark:border-stone-800 pt-8 text-center text-stone-500 dark:text-stone-500 text-sm'>
          <p>
            © {new Date().getFullYear()} AccouTaxChania. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
