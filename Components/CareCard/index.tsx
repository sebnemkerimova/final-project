import React from "react";
import MainImage from "../shared/MainImage";
import Image from "next/image";
interface ICareCard {
  image: string;
  title: string;
  description: string;
}

const CareCard = ({ image, title, description }: ICareCard) => {
  return (
    <div className="flex flex-col gap-4 space-x-2 py-4">
      <div className="max-w-[70px]">
        <MainImage src={image} />
      </div>
      <h2 className="text-lg"> {title} </h2>
      <p className="text-sm text-slate-600 w-[60%]">{description}</p>
    </div>
  );
};

export default CareCard;
