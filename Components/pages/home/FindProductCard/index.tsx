import MainImage from "@/Components/shared/MainImage";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface IFindProductCard {
  image: string;
  title: string;
  href: string;
}

const FindProductCard = ({ image, title, href }: IFindProductCard) => {
  return (
    <div className="py-10 bg-[#FFF] text-end w-fit">
      <div className="container mx-auto px-14 flex items-start text-end w-fit">
        <div className="w-fit">
          <MainImage src={image} />
        </div>

        <div className="flex flex-col gap-[15px] text-end items-end w-fit">
          <h2 className="text-lg font-semibold w-[32%]">{title}</h2>
          <p className="text-slate-600 w-[60%]">
            We are an online plant shop offering a wide range of cheap and
            trendly plants
          </p>
          <Link className=" w-fit flex items-center bg-green-main" href={href}>
            Find more <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FindProductCard;
