import React from "react";
import MainImage from "../shared/MainImage";

interface Information {
  children: React.ReactNode;
  title: string;
}

const Information = ({ title, children }: Information) => {
  return (
    <div className="flex items-center flex-row">
      <div>
        {/* <MainImage src={image} /> */}
        {children}
      </div>
      <h3 className="flex item-center">{title}</h3>
    </div>
  );
};

export default Information;
