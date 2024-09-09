import React from "react";
import Categories from "./Categories";
import AllPlants from "./AllPlants";
import BodyFlowers from "@/Components/pages/home/Main/BodyFlowers";

const Main = () => {
  return (
    <div className="flex">
      <Categories />

      <div className="flex-grow">
        <AllPlants />
        <BodyFlowers />
      </div>
    </div>
  );
};

export default Main;
