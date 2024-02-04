import {explore} from "@/app/types/app";
import Image from "next/image";

const ExploreCard = ({img, location, distance}: explore) => {
  return (
    <div className="flex gap-4 grow  items-center justify-between p-2   border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <div className="relative h-16 w-16 overflow-hidden rounded-md">
        <Image className="" fill src={img} alt="" />
      </div>
      <div className="flex flex-col justify-between ">
        <h5 className=" font-bold tracking-tight text-gray-900">{location}</h5>
        <p className=" font-normal text-gray-700 dark:text-gray-400">
          {distance}
        </p>
      </div>
    </div>
  );
};

export default ExploreCard;
