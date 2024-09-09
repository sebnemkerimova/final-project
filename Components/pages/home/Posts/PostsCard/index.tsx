import React from "react";
import MainImage from "@/Components/shared/MainImage";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface IPostsCard {
  image: string;
  title: string;
  href: string;
  time: string;
  description: string;
}

const PostsCard = ({ image, title, href, time, description }: IPostsCard) => {
  return (
    <div className="flex flex-col gap-[]">
      <div className="max-h-[220px] overflow-hidden">
        <MainImage src={image} />
      </div>
      <h3 className="text-sm text-green-main	">{time} </h3>
      <h2 className="text-xl">{title}</h2>
      <p className="text-sm text-slate-600 w-[60%]">{description} </p>
      <Link className="w-fit flex items-center " href={href}>
        {" "}
        Read More <FaArrowRight />
      </Link>

      <div></div>
    </div>
  );
};

export default PostsCard;
