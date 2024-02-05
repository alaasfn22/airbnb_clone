import React from "react";
import SearchPage from "../components/templates/SearchPage";
import Header from "../components/organisms/Header";
import format from "date-fns/format";
import {searchParams} from "../types/app";
import Footer from "../components/organisms/Footer";

const page = ({
  searchParams: {location, startDate, endDate, guests},
}: {
  searchParams: searchParams;
}) => {
  let formatStartDate;
  let formatEndDate;
  if (startDate && endDate) {
    formatStartDate = format(new Date(startDate), "dd MMM yy");
    formatEndDate = format(new Date(endDate), "dd MMM yy");
  }
  const range = `${formatStartDate} - ${formatEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} |${guests} guest`} />
      <SearchPage />
      <Footer />
    </div>
  );
};

export default page;
