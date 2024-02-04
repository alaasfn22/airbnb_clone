import Tilte from "../atoms/Tilte";
import LandingCard from "../molecules/LandingCard";

const Landing = () => {
  return (
    <div className="container py-8">
      <Tilte title="Explore nearby" />
      <LandingCard />
    </div>
  );
};

export default Landing;
