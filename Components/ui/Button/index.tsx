import { IButton } from "@/interfaces";
import Link from "next/link";
import React from "react";
import { text } from "stream/consumers";

const Button = ({ text, href, bg }: IButton) => {
  return (
    <Link href={href} className=" bg-green py-3 px-6 rounded 2xl">
      {text}
    </Link>
  );
};

export default Button;
