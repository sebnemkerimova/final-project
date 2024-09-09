import Link from "next/link";
import React from "react";

const CartTotal = () => {
  return (
    <div className="text-lg text-[#3D3D3D]">
      Cart Totals
      <div>
        <h3>Coupon Apply</h3>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter coupon code here..."
            className="grow border border-green-main text-[#A5A5A5]"
          />

          <button className="bg-green-main px-6 py-2 text-sm text-[#FFFFFF]">
            Apply
          </button>
        </div>

        <div className="mt-2 flex justify-between">
          <p className="text-lg">Subtotal</p>

          <span className="font-bold text-[#3D3D3D]">$2,683.00</span>
        </div>

        <div className="mt-2 flex justify-between">
          <p className="text-lg text-[#3D3D3D]">Coupon Discount</p>

          <span>(-) 00.00</span>
        </div>

        <div className="mt-2 flex justify-between">
          <p>Shiping</p>
          <span className="font-bold text-[#3D3D3D]">$16.00</span>
        </div>

        <div className="flex justify-end text-green-main">
          View shipping charge
        </div>

        <div className="mt-4 flex justify-between">
          <h3 className="font-bold text-[#3D3D3D]">Total</h3>
          <span className="font-bold text-green-main">$2,699.00</span>
        </div>

        <div className="flex justify-end">
          <Link
            href={"/"}
            className="mt-2 w-full bg-green-main py-3 text-center text-lg text-[#FFFFFF]"
          >
            Proceed To Checkout
          </Link>
        </div>

        <Link
          href={"/products"}
          className="block text-center text-lg text-green-main"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartTotal;
