import Input from "../atoms/header/Input";
import Logo from "../atoms/header/Logo";
import NavBtn from "../atoms/header/NavBtn";

const Header = ({placeholder}: {placeholder: string}) => {
  return (
    <div className=" sticky  top-0 left-0 z-50 py-4 shadow-md bg-white">
      <div className=" relative ">
        <div className=" container flex justify-between items-center overflow-hidden ">
          <Logo />
          <Input placeholder={placeholder} />
          <NavBtn />
        </div>
      </div>
    </div>
  );
};

export default Header;
