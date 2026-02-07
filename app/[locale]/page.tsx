import HeroSection from '../../components/HeroSection';
import ServicesSection from '../../components/ServicesSection';
import TeamSection from '../../components/TeamSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import ContactSection from '../../components/ContactSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;
