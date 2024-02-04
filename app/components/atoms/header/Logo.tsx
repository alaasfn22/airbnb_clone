import Image from "next/image";
import moduleName from "../../../../public/pngkey.com-airbnb-logo-png-605967.png";
import Link from "next/link";
const Logo = () => {
  return (
    <div className="flex items-center my-auto">
      <Link href="/" className="w-14 h-12 relative">
        <Image
          src={moduleName}
          alt="logo"
          fill
          className="object-contain object-left "
        />
      </Link>
    </div>
  );
};

export default Logo;
