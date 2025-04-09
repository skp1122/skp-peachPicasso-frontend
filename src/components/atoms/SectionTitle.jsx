const SectionTitle = ({ text }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-[580px] h-[40px] flex items-center justify-center">
        <h2 className="text-[#000] text-center font-playfair text-[30px] font-semibold leading-normal tracking-[1.5px]">
          {text}
        </h2>
      </div>
    </div>
  );
};

export default SectionTitle; 