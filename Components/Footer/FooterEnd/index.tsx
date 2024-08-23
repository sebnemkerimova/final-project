import MainImage from "@/Components/shared/MainImage";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const FooterEnd = () => {
  return (
    <div className="flex flex-grid-col-4 gap-12 container">
      <div className="flex flex-col flex-grow gap-3">
        <h3 className="font-bold text-xl">My Account</h3>
        <Link href={"/account"}>My Account</Link>
        <Link href={"/account"}>Our Stores</Link>
        <Link href={"/account"}>Contact Us</Link>
        <Link href={"/account"}>Career</Link>
        <Link href={"/account"}>Specials</Link>
      </div>

      <div className="flex flex-col flex-grow gap-3">
        <h3 className="font-bold text-xl">Help & Guide</h3>
        <Link href={"/help & guide"}>Help Center</Link>
        <Link href={"/help & guide"}>How to Buy </Link>
        <Link href={"/help & guide"}>Shipping & Delivery</Link>
        <Link href={"/help & guide"}>Product Policy</Link>
        <Link href={"/help & guide"}>How to Return</Link>
      </div>

      <div className=" flex flex-col flex-grow gap-3">
        <h3 className="font-bold text-xl">Categories</h3>
        <Link href={"/categories"}>House Plants</Link>
        <Link href={"/categories"}>Potter Plants</Link>
        <Link href={"/categories"}>Seeds</Link>
        <Link href={"/categories"}>Small Plants</Link>
        <Link href={"/categories"}>Accessories</Link>
      </div>

      <div className="flex place-items-end flex-grow  flex-col  py-6 px-6 gap-3">
        <h3 className="font-bold text-xl line-height: 1.75rem; /* 28px */">
          Social Media
        </h3>
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedinIn />

        <h3 className="font-bold text-xl">We accept</h3>
      </div>
      <div className="flex items-end">
        <MainImage src={"/images/image 16.svg"} />
      </div>
    </div>
  );
};

export default FooterEnd;
