import SectionTitle from '../atoms/SectionTitle';

const Section = ({ 
  id,           // for navigation linking
  title,        // text for SectionTitle
  children,     // content like WhyChooseUs cards
  className     // additional styling if needed
}) => {
  return (
    <section 
      id={id} 
      className={`
        bg-white 
        shadow-[0px_1px_12px_rgba(0,0,0,0.08)]
        ${className || ''}
      `}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="pt-[50px]">
          <SectionTitle text={title} />
        </div>
        <div className="py-[50px]">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section; 