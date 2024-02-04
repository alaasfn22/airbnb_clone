"use client";
import {MagnifyingGlassIcon} from "@heroicons/react/16/solid";
import {ChangeEvent, useState} from "react";
import CalendarCard from "../../molecules/CalendarCard";

const Input = ({placeholder}: {placeholder: string}) => {
  const [searchInput, setSearchInput] = useState("");
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className="hidden md:block">
      <div className="flex   items-center border rounded-3xl shadow-sm px-3 py-1">
        <input
          type="text"
          placeholder={`${placeholder} `}
          onChange={changeHandler}
          value={searchInput}
          className="bg-transparent w-[300px] placeholder:text-gray-400 outline-none pl-2 flex-1"
        />
        <MagnifyingGlassIcon className="h-6 w-6 hidden md:inline-flex text-white bg-red-400 rounded-full p-1" />
        {searchInput && (
          <CalendarCard
            setSearchInput={setSearchInput}
            searchInput={searchInput}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
