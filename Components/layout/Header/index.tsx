import Link from "next/link";
import React from "react";
// import { IoMdSearch } from "react-icons/io";
// import { SlBasket } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { IoIosLogIn } from "react-icons/io";

const Header = () => {
  return (
    <header className="container py-8 px-10   mx-auto ">
      <div className="flex justify-between  items-center ">
      <Link href={"/"}>
        <img src="/images/Logo.svg" alt="" />
      </Link>

      <div className="text-dark-gray flex gap-8">
        <Link href={"/home"}>Home</Link>
        <Link href={"/shop"}>Shop</Link>
        <Link href={"/plant care"}>Plant Care</Link>
        <Link href={"/blogs"}>Blogs</Link>
      </div>

      <div className="flex gap-4 items-center">
        <button className="text-2xl">
          <IoIosSearch />
        </button>

        <button className="text-">
          <SlBasket />
        </button>

        <button className="flex items-center bg-[#46A358] gap-2 text-white py-1 px-3 rounded-lg">
          <IoIosLogIn />
          <h4>Login</h4>
        </button>
      </div>
      </div>
    </header>
  );
};

export default Header;
