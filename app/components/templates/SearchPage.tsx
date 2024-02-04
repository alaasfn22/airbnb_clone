import React, {Fragment} from "react";
import ListingCard from "../molecules/ListingCard";
import {getSearchResult} from "@/app/utils/api";
import {SearchResultData} from "@/app/types/app";

const SearchPage = async () => {
  const searchResultData: SearchResultData = await getSearchResult();

  return (
    <Fragment>
      <div>
        {searchResultData.map((listing) => (
          <ListingCard
            key={listing.title}
            img={listing.img}
            title={listing.title}
            location={listing.location}
            description={listing.description}
            price={listing.price}
            total={listing.total}
            star={listing.star}
            lat={listing.lat}
            long={listing.long}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default SearchPage;
