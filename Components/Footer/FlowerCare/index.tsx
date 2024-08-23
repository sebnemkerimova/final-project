import CareCard from "@/Components/CareCard";
import React from "react";

const FlowerCare = () => {
  return (
    <div className="flex flex-row gap-4 container">
      <CareCard
        image={"/images/icons/gardenCare22024-08-21 121435.png"}
        title={"Garden Care"}
        description={
          "We are an online plant shop offering a wide range of cheap and trendy plants."
        }
      />
      <CareCard
        image={"/images/icons/Plant.svg"}
        title="Plant Renovation"
        description="We are an online plant shop offering a wide range of cheap and trendy plants."
      />
      <CareCard
        image={"/images/icons/Watering.svg"}
        title={"Watering Graden"}
        description={
          "We are an online plant shop offering a wide range of cheap and trendy plants."
        }
      />

      <div>
        <h2 className=" flex justify-between text-lg">
          Would you like to join newsletters?
        </h2>
        <form className="flex">
          <input type="text" />

          <button className="bg-green-main text-white">Join</button>
        </form>
        <p className="text-sm text-slate-600 w-[60%]">
          We usually post offers and challenges in newsletter. We’re your online
          houseplant destination. We offer a wide range of houseplants and
          accessories shipped directly from our (green)house to yours!
        </p>
      </div>
    </div>
  );
};

export default FlowerCare;
