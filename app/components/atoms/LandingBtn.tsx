"use client";
const LandingBtn = () => {
  return (
    <div className="absolute top-1/2 -translate-x-1/2 left-1/2  -translate-y-1/2">
      <div className="text-center">
        <h3 className="text-gray-700 mb-4 font-bold">The Greatest Outdoors</h3>
        <h3 className="text-gray-700 mb-4 font-bold">
          Wishlists curated by Airbnb
        </h3>
        <button className="text-white bg-red-500 px-6 py-2 shadow-sm rounded-full hover:bg-red-600">
          More
        </button>
      </div>
    </div>
  );
};

export default LandingBtn;
