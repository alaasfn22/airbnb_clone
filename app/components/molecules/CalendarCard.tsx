"use client";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {DateRangePicker, RangeKeyDict} from "react-date-range";
import {useState} from "react";
import NumberOfGusests from "./NumberOfGusests";

const CalendarCard = ({
  setSearchInput,
  searchInput,
}: {
  setSearchInput: any;
  searchInput: string;
}) => {
  const [startDate, setStarDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const handleSelect = (ranges: RangeKeyDict) => {
    setStarDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };
  return (
    <div className="absolute w-full py-4 bg-white text-center mt-4 shadow-md  top-[100%]  left-1/2 -translate-x-1/2  ">
      <div className="flex flex-col items-center gap-4">
        <div className="overflow-hidden">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
          />
        </div>
        <NumberOfGusests
          setSearchInput={setSearchInput}
          searchInput={searchInput}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
    </div>
  );
};

export default CalendarCard;
