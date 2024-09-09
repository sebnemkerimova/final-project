import React from "react";
import Information from "@@/layout/Footer/Contact/Information";
import { CiLocationOn } from "react-icons/ci";
import { CiSquareCheck } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import MainImage from "@@/shared/MainImage";
import { HiRefresh } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex justify-between py-10 bg-green-main/10 px-6">
      <Link href={"/"}>
        <MainImage src="/images/Logo.svg" />
      </Link>
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
