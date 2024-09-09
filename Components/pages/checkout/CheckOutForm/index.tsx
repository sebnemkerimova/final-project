import React from "react";
import FormInput from "./FormInput";

const CheckOutForm = () => {
  return (
    <div className="basis-3/5">
      <h2 className="text-[#3D3D3D]text-lg font-bold">Billing Address</h2>
      <form className="grid grid-cols-2 gap-5">
        <FormInput
          id="FirstName"
          name="FirstName"
          label="First Name"
          placeholder="Add your first name"
        />

        <FormInput
          id="LastName"
          name="LastName"
          label="Last Name"
          placeholder="Add your last name"
        />

        <FormInput
          id="CountryRegion"
          name="CountryRegion"
          label="Country / Region"
          placeholder=""
        />
        <FormInput
          id="TownCity"
          name="TownCity"
          label="Town / City"
          placeholder="Add your first name"
        />
        <FormInput
          id="StreetAdress"
          name="StreetAdress"
          label="Street Address"
          placeholder="House number and street name"
        />
        <FormInput
          id="lastName"
          name="lastName"
          label=""
          placeholder="Appartment, suite, unit, etc. (optional)"
        />

        <FormInput
          id="State"
          name="State"
          label="State"
          placeholder="Select a state"
        />

        <FormInput id="Zip" name="Zip" label="Zip" />

        <FormInput
          id="Email address"
          name="Email address"
          label="Email address"
        />

        <FormInput
          id="PhoneNumber"
          name="Zip"
          label="PhoneNumber"
          placeholder="+966"
        />

        <label htmlFor="address" className="text-sm text-[#3D3D3D]">
          <input type="checkbox" id="address" />

          <span>Ship to a different address?</span>
        </label>

        <div className="col-start-1">
          <p className="mb-2 text-sm text-[#3D3D3D]">Order notes (optional)</p>

          <textarea rows={4} className="w-full rounded border"></textarea>
        </div>
      </form>
    </div>
  );
};

export default CheckOutForm;
