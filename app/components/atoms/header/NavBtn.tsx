"use client";
import {
  Bars3Icon,
  GlobeAltIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";

const NavBtn = () => {
  return (
    <div className="flex items-center justify-end space-x-2  ">
      <div className="flex space-x-2 items-center flex-wrap-reverse cursor-pointer">
        <h3 className=" text-gray-500">Airbnb your home</h3>
        <GlobeAltIcon className="h-6 w-6 text-gray-500" />
      </div>
      <div className="flex items-center cursor-pointer space-x-2 border rounded-3xl shadow-sm px-2 py-1">
        <Bars3Icon className="h-6 w-6 text-gray-500" />
        <UserCircleIcon className="h-6 w-6 text-gray-500" />
      </div>
    </div>
  );
};

export default NavBtn;
