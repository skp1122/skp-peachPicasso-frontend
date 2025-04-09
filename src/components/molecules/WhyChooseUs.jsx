import FeatureCard from '../atoms/FeatureCard';
import experiencedStylist from '../../assets/icons/experiencedStylist.svg';
import personalisedService from '../../assets/icons/personalisedService.svg';
import yearsOfExperienceBadge from '../../assets/icons/yearsOfExperienceBadge.svg';

const WhyChooseUs = () => {
  const features = [
    {
      icon: experiencedStylist,
      title: 'Experienced Stylists',
      description: 'Our team of professional makeup artists brings years of expertise to every client',
      variant: 'light',
    },
    {
      icon: personalisedService,
      title: 'Personalised Service',
      description: 'Customized makeup solutions tailored to your unique style and preferences',
      variant: 'dark',
    },
    {
      icon: yearsOfExperienceBadge,
      title: 'Years of Excellence',
      description: 'Proven track record of delivering exceptional beauty services',
      variant: 'light',
    }
  ];

  return (
    <div className="w-full">
      {/* Desktop View */}
      <div className="hidden lg:flex justify-center gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={feature.variant === 'light' ? 'mt-[50px]' : 'mt-[84px]'}
          >
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variant={feature.variant}
            />
          </div>
        ))}
      </div>

      {/* Mobile View - Horizontal Scroll */}
      <div className="lg:hidden relative w-full overflow-hidden">
        <div className="flex gap-4 px-4 py-4 snap-x snap-mandatory overflow-x-auto no-scrollbar">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex-none snap-start w-[85vw] max-w-[320px]"
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                variant={feature.variant}
              />
            </div>
          ))}
        </div>
        <style>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default WhyChooseUs;
