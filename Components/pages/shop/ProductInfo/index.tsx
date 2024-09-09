import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
// import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaPlus, FaMinus } from "react-icons/fa6";

const ProductInfo = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold text-[#3D3D3D]">Barberton Daisy</h2>
        <div className="flex items-center justify-between">
          <p className="text-extra-bold flex text-xl text-green-main">
            {" "}
            $ 199.00
          </p>

          <div className="flex items-center gap-1 text-[#FFAC0C]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar fill="grey" />
            <p className="flex text-black"> Customer Review </p>
          </div>
        </div>

        <h3 className="text-bold text-base text-[#3D3D3D]">
          Short Description:
        </h3>
        <p className="text-gray-400">
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground.
        </p>
        <h3 className="text-bold text-base text-[#3D3D3D]">Size:</h3>

        <div className="flex gap-3 rounded-full">
          <button className="size-[35px] text-green-main">S</button>
          <button className="text-light-gray">M</button>
          <button className="text-light-gray">L</button>
          <button className="text-light-gray">XL</button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4">
            <button className="flex size-[35px] items-center justify-center rounded-full bg-green-main text-white">
              <FaMinus />
            </button>
            <span>1</span>
            <button className="flex size-[35px] items-center justify-center rounded-full bg-green-main text-white">
              <FaPlus />
            </button>
          </div>

          <button className="flex rounded bg-green-main px-8 py-3 text-sm text-[#FFFFFF]">
            Buy Now
          </button>

          <button className="rounded border border-solid border-green-main px-4 py-2 text-base text-green-main">
            Add To Cart
          </button>

          <button className="rounded-md border border-green-main px-2 py-2 text-green-main">
            <IoIosHeartEmpty size="20px" />
          </button>
        </div>
        <p className="text-ligth-gray text-base">
          <span className="text-light-gray">SKU</span>: 1995751877966
        </p>

        <p className="text-ligth-gray mt-2 text-base">
          Categories: Potter Plants
        </p>

        <p className="text-ligth-gray mt-2 text-base">
          Tags: Home, Garden, Plants
        </p>
        <div className="mt-[18px] flex gap-4">
          <p>Share this products:</p>

          <Link href={"/"}>
            <TfiFacebook />
          </Link>
          <Link href={"/"}>
            <IoLogoTwitter />
          </Link>
          <Link href={"/"}>
            <FaLinkedinIn />
          </Link>
          <Link href={"/"}>
            <MdMailOutline />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
