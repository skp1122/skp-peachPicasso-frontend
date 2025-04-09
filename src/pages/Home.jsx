import HeroSection from '../components/molecules/HeroSection';
import WhyChooseUsSection from '../components/organisms/WhyChooseUsSection';
import ServicesSection from '../components/organisms/ServicesSection';
import AboutUsSection from '../components/organisms/AboutUsSection';
import ClientStoriesSection from '../components/organisms/ClientStoriesSection';

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <AboutUsSection />
      <ClientStoriesSection />
    </div>
  );
};

export default Home;