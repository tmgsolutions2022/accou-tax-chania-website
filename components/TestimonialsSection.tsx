const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "AccouTaxChania transformed our financial processes. Their attention to detail and proactive advice have been invaluable to our growth.",
      author: "- Sarah L., CEO of Innovate Co.",
    },
    {
      quote:
        "As a small business owner, I can finally focus on my work knowing my bookkeeping and taxes are in expert hands. Highly recommended!",
      author: "- Mike R., Owner of The Corner Cafe",
    },
    {
      quote:
        "The team is professional, responsive, and incredibly knowledgeable. They made payroll a breeze for our company.",
      author: "- Emily C., HR Manager at Tech Solutions",
    },
  ];

  return (
    <section className="py-16 bg-neutral-background dark:bg-dark-neutral-background" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-neutral-text dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-8">
          What Our Clients Say
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
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="font-bold text-neutral-text dark:text-white">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
