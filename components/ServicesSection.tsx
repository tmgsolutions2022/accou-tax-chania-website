'use client';

import { useTranslations } from 'next-intl';

const ServicesSection = () => {
  const t = useTranslations('services');

  const services = [
    {
      icon: "calculate",
      titleKey: "taxPreparation.title",
      descKey: "taxPreparation.description",
    },
    {
      icon: "menu_book",
      titleKey: "bookkeeping.title",
      descKey: "bookkeeping.description",
    },
    {
      icon: "payments",
      titleKey: "payroll.title",
      descKey: "payroll.description",
    },
    {
      icon: "trending_up",
      titleKey: "consulting.title",
      descKey: "consulting.description",
    },
  ];

  return (
    <section className="py-16 bg-neutral-background dark:bg-dark-neutral-background" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-neutral-text dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-8">
          {t('title')}
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-1 gap-4 rounded-xl border border-stone-200 dark:border-stone-700 bg-background-light dark:bg-background-dark p-6 flex-col items-center text-center"
            >
              <span className="material-symbols-outlined text-primary text-4xl">
                {service.icon}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-neutral-text dark:text-white text-lg font-bold leading-tight">
                  {t(service.titleKey)}
                </h3>
                <p className="text-stone-600 dark:text-dark-subtext text-sm font-normal leading-normal">
                  {t(service.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
