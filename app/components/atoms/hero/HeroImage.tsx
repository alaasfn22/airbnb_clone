import Image from "next/image";
import img from "../../../../public/freddy-g-L6dJu7Bcpww-unsplash.jpg";
const HeroImage = () => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <Image
        src={img}
        fill
        className="h-full w-full object-cover"
        alt="hero image"
      />
    </div>
  );
};

export default HeroImage;
