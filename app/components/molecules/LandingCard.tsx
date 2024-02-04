import LandingBtn from "../atoms/LandingBtn";
import LandingImg from "../atoms/LandingImg";

const LandingCard = () => {
  return (
    <div className="h-[400px] sm:h-[500px] md:h-[700px] relative w-full mt-8 overflow-hidden rounded-md">
      <LandingImg />
      <LandingBtn />
    </div>
  );
};

export default LandingCard;
