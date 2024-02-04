import {live} from "@/app/types/app";
import Image from "next/image";

type liveCard = live;
const LiveCard = ({img, title}: liveCard) => {
  return (
    <div className="shadow-sm   rounded-md grow overflow-hidden  group ">
      <div className="overflow-hidden">
        <div className="relative   h-[300px] w-full rounded-t-md transition-all ease-out duration-300   group-hover:scale-125">
          <Image src={img} alt="hero image" fill className="object-cover" />
        </div>
      </div>
      <h1 className="text-md font-semibold px-2 py-2">{title}</h1>
    </div>
  );
};

export default LiveCard;
