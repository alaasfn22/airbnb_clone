import {getLive} from "@/app/utils/api";
import Tilte from "../atoms/Tilte";
import LiveCard from "../molecules/LiveCard";
import {AllLive} from "@/app/types/app";

const LiveSection = async () => {
  const live: AllLive = await getLive();

  return (
    <div className="container py-8">
      <Tilte title="Live anywhere" />
      <div className="  mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4    gap-4 ">
        {live.map((live) => {
          return <LiveCard key={live.img} img={live.img} title={live.title} />;
        })}
      </div>
    </div>
  );
};

export default LiveSection;
