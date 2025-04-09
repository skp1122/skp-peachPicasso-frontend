import aboutUsImage from '../../assets/aboutUs.png';

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-[72px] items-center">
      {/* Image Component */}
      <div className="w-full lg:w-[562px] h-[300px] lg:h-[420px] flex-shrink-0">
        <img 
          src={aboutUsImage}
          alt="About Us"
          className="w-full h-full object-cover rounded-[20px]"
        />
      </div>

      {/* Text Component */}
      <div className="flex-1 w-full">
        <p className="font-outfit text-[16px] lg:text-[18px] font-normal text-black leading-relaxed lg:leading-normal tracking-[0.9px] text-center lg:text-left">
          At Peach Picasso, we believe in enhancing your natural beauty through the artistry of makeup. Our team of skilled makeup artists brings years of experience and a passion for creating stunning looks tailored to your unique style.
          <br /><br />
          We understand that every face is a canvas, and every client has their own story to tell. That's why we take the time to understand your preferences, lifestyle, and the look you want to achieve.
          <br /><br />
          Whether you're preparing for your wedding day, a special event, or just want to treat yourself, we're here to make you look and feel your absolute best.
        </p>
      </div>
    </div>
  );
};

export default AboutUs; 