import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section className="container py-8 px-10 flex items-center   mx-auto">
      <div className="flex flex-col items-start  w-[70%]  gap-3">
        <h4>Welcome to GreenShop</h4>
        <h1 className="font-bold text-8xl">
          Let’s Make a <br />
          Better <span className="text-[#46A358]">Planet</span>
        </h1>
        <h5>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use <br /> our plants to create an unique Urban Jungle. Order
          your favorite plants!
        </h5>
        <button className=" bg-[#46A358] gap-2 text-white py-3 px-4 rounded-lg">
          <h4>SHOP NOW</h4>
        </button>
      </div>

      <div className="flex items-end">
        <div className="w-[100px] h-[150px] relative">
          <Image
            src={"/images/HeaderImages/big.svg"}
            fill
            alt=""
            className="ml-[60px] mt-[-30px]"
          />
        </div>
        <div className="w-[300px] h-[450px] relative">
          <Image src={"/images/HeaderImages/small.svg"} fill alt="" />
        </div>
      </div>
    </section>
  );
};

export default Header;
