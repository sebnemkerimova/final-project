import React from "react";
import Information from "@/Components/Information";
import { CiLocationOn } from "react-icons/ci";
import { CiSquareCheck } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="flex justify-between py-4 px-3">
      {/* <Information
        image={"public/images/Logo.svg"}
        title={""}/> */}

      <Information title={"70 West Buckingham Ave. Farmingdale, NY 11735"}>
        <CiLocationOn className="text-green-main" />
      </Information>

      <Information title={"contact@greenshop.com"}>
        <CiSquareCheck className="text-green-main" />
      </Information>

      <Information title={"+88 01911 717 490"}>
        <FiPhoneCall className="text-green-main" />
      </Information>
    </div>
  );
};

export default Contact;
