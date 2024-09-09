import Link from "next/link";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { IoIosLogIn } from "react-icons/io";

const Header = () => {
  return (
    <header className="container sticky top-0 z-50 bg-white py-5 shadow-xl">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <img src="/images/Logo.svg" alt="" />
        </Link>

        <div className="flex gap-8 text-dark-gray">
          <Link href={"/home"}>Home</Link>
          <Link href={"/products"}>Shop</Link>
          <Link href={"/plant-care"}>Plant Care</Link>
          <Link href={"/blogs"}>Blogs</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-2xl">
            <IoIosSearch />
          </button>

          <button className="text-">
            <SlBasket />
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-[#46A358] px-3 py-1 text-white">
            <IoIosLogIn />
            <h4>Login</h4>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
