"use client";

import MainImage from "@/Components/shared/MainImage";
import Link from "next/link";
import { useState } from "react";

const OrderDetails = () => {
  const [method, setMethod] = useState("card");
  const [formData, setFormData] = useState();

  return (
    <div className="basis-2/5">
      <h2 className="text-xl font-bold">Your Order</h2>

      <div className="text-md mb-5 mt-3 flex justify-between">
        <p>Products</p>
        <p>Subtotal</p>
      </div>

      <div className="mb-2 flex items-center gap-6 border bg-grey-extra-light pr-4">
        <div className="size-[70px]">
          <MainImage src="/images/BodyImages/DecorGul.svg" />
        </div>

        <div className="pr-4- grow flex-col">
          <h3 className="font-extra-bold text-lg text-[#3D3D3D]">
            Barberton Daisy
          </h3>
          <p className="text-light-gray">SKU: 1995751877966</p>
        </div>

        <p className="text-sm text-light-gray">(x 2)</p>

        <p className="text-lg font-bold text-green-main">$238.00</p>
      </div>

      <div className="mb-2 flex items-center gap-6 border bg-grey-extra-light pr-4">
        <div className="size-[70px]">
          <MainImage src="/images/BodyImages/Spatifilium.svg" />
        </div>
        <div className="grow flex-col">
          <h3 className="font-extra-bold text-lg text-[#3D3D3D]">
            Blushing Bromeliad
          </h3>
          <p className="text-light-gray">SKU: 19957518757065</p>
        </div>

        <p className="text-sm text-light-gray">(x 6)</p>
        <p className="text-lg font-bold text-green-main">$834.00</p>
      </div>

      <div className="mb-2 flex items-center gap-6 border bg-grey-extra-light pr-4">
        <div className="size-[70px]">
          <MainImage src="/images/BodyImages/Skullent.svg" />
        </div>
        <div className="grow flex-col">
          <h3 className="font-extra-bold text-lg text-[#3D3D3D]">
            Aluminum Plant
          </h3>
          <p className="text-light-gray">SKU: 19957518757065</p>
        </div>

        <p className="text-sm text-light-gray">(x 9)</p>
        <p className="text-lg font-bold text-green-main">$1,611.00</p>
      </div>

      <div className="flex justify-end gap-2">
        <p>Have a coupon code?</p>

        <Link className="text-green-main" href={"/"}>
          Click Here
        </Link>
      </div>

      <div className="ml-[70px]">
        <div className="mb-3 mt-4 flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-[#3D3D3D]">Subtotal</h3>
          <p>$2,683.00</p>
        </div>

        <div className="mb-3 flex items-center justify-between gap-3">
          <h3>Coupon Discount</h3>
          <p>(-) 00.00</p>
        </div>

        <div className="mb-3 flex items-center justify-between gap-3">
          <h3>Shiping</h3>
          <p className="text-lg font-semibold text-[#3D3D3D]">$16.00</p>
        </div>

        <div className="flex justify-end">
          <Link className="text-green-main" href={"/"}>
            View shipping charge
          </Link>
        </div>

        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-[#3D3D3D]">Total</h3>
          <p className="text-lg font-bold text-green-main">$2,699.00</p>
        </div>

        <div className="flex items-start py-2">
          <h3 className="text-lg font-bold text-[#3D3D3D]">Payment Method</h3>
        </div>

        <form >
          <div className="flex flex-col gap-4">
            <div
              className={`flex items-center gap-[10px] border p-4 ${method === "card" ? "border-green-main" : "border-light-gray"}`}
            >
              <input
                type="radio"
                name="paymentMethod"
                id="card"
                className="size-4"
              />
              <label htmlFor="card">
                <MainImage src={"/images/image 16.svg"} />
              </label>
            </div>
            <div
              className={`flex items-center gap-[10px] border p-4 ${method === "bank" ? "border-green-main" : "border-light-gray"}`}
            >
              <input
                type="radio"
                name="paymentMethod"
                id="bank"
                className="size-4"
              />
              <label htmlFor="bank">Direct bank transfer</label>
            </div>
            <div
              className={`flex items-center gap-[10px] border p-4 ${method === "cash" ? "border-green-main" : "border-light-gray"}`}
            >
              <input
                type="radio"
                name="paymentMethod"
                id="cash"
                className="size-4"
              />
              <label htmlFor="cash" className="text-[15px]">
                Cash on delivery
              </label>
            </div>
          </div>
          <div className="flex items-center border-2">
            <button className="mt-2 flex w-full justify-center bg-green-main p-4 text-lg text-[#FFFFFF]">
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default OrderDetails;
