import React from "react";
import FindProductCard from "../pages/home/FindProductCard";

const FindFlowers = () => {
  return (
    <div className="flex">
      <FindProductCard
        title={"Summer Cactus & Succulents"}
        image={"/images/BodyImages/Spatifilium.svg"}
        href={" Find More /"}
      />
      <FindProductCard
        title={"Styling Trends &  Much More"}
        image={"/images/BodyImages/Sarmasiq.svg"}
        href={" Find More /"}
      />
    </div>
  );
};

export default FindFlowers;
