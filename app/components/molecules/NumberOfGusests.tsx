"use client";
import {UsersIcon} from "@heroicons/react/16/solid";
import SearchBtn from "../atoms/SearchBtn";
import {useState} from "react";
import {NumberOfGusestsType} from "@/app/types/app";

const NumberOfGusests = ({
  setSearchInput,
  searchInput,
  startDate,
  endDate,
}: NumberOfGusestsType) => {
  const [guests, setGuests] = useState(1);
  return (
    <>
      <div className="flex w-full md:w-1/2 lg:w-1/4 mx-auto justify-between items-center p-2  shadow-md  rounded-sm">
        <p className="text-md font-semibold text-gray-900">Number Of Gusests</p>
        <div className="flex items-center space-x-1  ">
          <UsersIcon className="h-6 w-6 text-gray-800" />
          <input
            type="number"
            value={guests}
            min={1}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="text-red-500 border  text-sm rounded-sm  w-12 pl-2 outline-none"
          />
        </div>
      </div>
      <SearchBtn
        setSearchInput={setSearchInput}
        searchInput={searchInput}
        endDate={endDate}
        startDate={startDate}
        guests={guests}
      />
    </>
  );
};

export default NumberOfGusests;
