"use client";

import {NumberOfGusestsType} from "@/app/types/app";
import Link from "next/link";
type searchType = NumberOfGusestsType & {guests: number};
const SearchBtn = ({
  setSearchInput,
  searchInput,
  endDate,
  startDate,
  guests,
}: searchType) => {
  return (
    <div className="flex w-full md:1/2  lg:w-1/4 mx-auto justify-around items-center my-4">
      <button
        onClick={() => setSearchInput("")}
        className="text-gray-600 hover:text-gray-800 "
      >
        cancel
      </button>
      <Link
        href={{
          pathname: "/search",
          search: `?location=${searchInput}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&guests=${guests}`,
        }}
      >
        <button
          onClick={() => setSearchInput("")}
          className="text-red-500 hover:text-red-700 "
        >
          Search
        </button>
      </Link>
    </div>
  );
};

export default SearchBtn;
