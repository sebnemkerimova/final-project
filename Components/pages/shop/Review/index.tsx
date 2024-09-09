"use client";
import { useState } from "react";
import ProductDetail from "./ProductDetail";
import ReviewData from "./ReviewData";

const Review = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabsData = [<ProductDetail />, <ReviewData />];

  const tabChangeHandler = (index: number | string) => {
    setCurrentTab(Number(index));
  };

  return (
    <>
      <div>
        <div className="sm:hidden">
          <label htmlFor="Tab" className="sr-only">
            Tab
          </label>

          <select
            onChange={(e) => {
              tabChangeHandler(e.target.value);
            }}
            className="w-full rounded-md border-gray-200"
          >
            <option value={1}>Product Description</option>
            <option value={2}>Reviews</option>
          </select>
        </div>

        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex gap-6" aria-label="Tabs">
              <button
                onClick={() => {
                  tabChangeHandler(0);
                }}
                className={
                  currentTab === 0 ? "product__tab--active" : "product__tab"
                }
              >
                Product Description
              </button>

              <button
                onClick={() => {
                  tabChangeHandler(1);
                }}
                className={
                  currentTab === 1 ? "product__tab--active" : "product__tab"
                }
              >
                Reviews
              </button>
            </nav>
          </div>
        </div>
      </div>

      {tabsData[currentTab]}
    </>
  );
};

export default Review;
