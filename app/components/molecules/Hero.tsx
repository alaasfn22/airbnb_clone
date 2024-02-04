import Btn from "../atoms/hero/Btn";
import HeroImage from "../atoms/hero/HeroImage";

const Hero = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
      <HeroImage />
      <div className="absolute top-1/2  w-full flex justify-center text-center">
        <Btn />
      </div>
    </div>
  );
};

export default Hero;
