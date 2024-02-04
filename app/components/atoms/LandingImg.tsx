import Image from "next/image";

const LandingImg = () => {
  return (
    <div className="relative w-full h-full rounded-md overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1609688669309-fc15db557633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="hero image"
        fill
        className="object-cover object-left "
      />
    </div>
  );
};

export default LandingImg;
