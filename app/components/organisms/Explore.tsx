import React from "react";
import ExploreCard from "../molecules/ExploreCard";
import {AllExplore} from "@/app/types/app";
import {getExplore} from "@/app/utils/api";
import Tilte from "../atoms/Tilte";

const Explore = async () => {
  const explore: AllExplore = await getExplore();
  return (
    <div className="container py-8">
      <Tilte title="Explore nearby" />
      <div className=" mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4    gap-4">
        {explore.map((explore) => {
          return (
            <ExploreCard
              key={explore.img}
              img={explore.img}
              location={explore.location}
              distance={explore.distance}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
