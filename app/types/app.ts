export type explore = {
  img: string;
  location: string;
  distance: string;
};
export type live = {
  img: string;
  title: string;
};
export type AllLive = live[];
export type AllExplore = explore[];
export type searchParams = {
  location: string;
  startDate: string;
  endDate: string;
  guests: string;
};
export type NumberOfGusestsType = {
  setSearchInput: any;
  searchInput: string;
  startDate: Date;
  endDate: Date;
};
export type ListingCardItem = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
};
export type SearchResultData = ListingCardItem[];
