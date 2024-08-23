import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div>
      <h2>Categories</h2>

      <div className="flex">
        <div>
          <p>House Plants</p>
          <p>Potter Plants</p>
          <p>Seeds</p>
          <p>Small Plants</p>
          <p>Big Plants</p>
          <p>Succulents</p>
          <p>Trerrariums</p>
          <p>Gardening</p>
          <p>Accessories</p>
        </div>

        <div className="font-serif">
          <p>33</p>
          <p>12</p>
          <p>65</p>
          <p>39</p>
          <p>23</p>
          <p>17</p>
          <p>19</p>
          <p>13</p>
          <p>18</p>
        </div>
      </div>

      <div>Price Range Price: $39 - $1230</div>
      <div>
        Size
        <div className="flex">
          <div className="flex flex-col">
            <h3>Small</h3>
            <h3>Medium</h3>
            <h3>Large</h3>
          </div>
          <div>
            <h3>119</h3>
            <h3>86</h3>
            <h3>78</h3>
          </div>
        </div>
      </div>

      <Image
        src={"/images/BodyImages/sale.svg"}
        alt=""
        width={100}
        height={100}
      />
    </div>
  );
};

export default Categories;
