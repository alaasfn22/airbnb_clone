import Hero from "../molecules/Hero";
import Explore from "../organisms/Explore";
import Landing from "../organisms/Landing";
import LiveSection from "../organisms/LiveSection";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Explore />
      <LiveSection />
      <Landing />
    </main>
  );
};

export default HomePage;
