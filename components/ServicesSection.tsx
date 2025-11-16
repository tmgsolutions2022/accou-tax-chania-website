const ServicesSection = () => {
  const services = [
    {
      icon: "calculate",
      title: "Tax Preparation",
      description:
        "Maximize your returns with our expert tax filing services for individuals and businesses.",
    },
    {
      icon: "menu_book",
      title: "Bookkeeping",
      description:
        "Accurate and timely bookkeeping to keep your finances in order and provide clear insights.",
    },
    {
      icon: "payments",
      title: "Payroll Services",
      description:
        "Streamline your payroll process, ensuring compliance, accuracy, and timeliness.",
    },
    {
      icon: "trending_up",
      title: "Financial Consulting",
      description:
        "Strategic advice to help you make informed financial decisions and achieve your goals.",
    },
  ];

  return (
    <section className="py-16 bg-neutral-background dark:bg-dark-neutral-background" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-neutral-text dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-8">
          Our Services
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
                  {service.title}
                </h3>
                <p className="text-stone-600 dark:text-dark-subtext text-sm font-normal leading-normal">
                  {service.description}
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
