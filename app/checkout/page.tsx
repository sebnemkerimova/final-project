import Breadcrumb from "@/Components/layout/Breadcrumb";
import CheckOutForm from "@/Components/pages/checkout/CheckOutForm";
import OrderDetails from "@/Components/pages/checkout/OrderDetails";
import React from "react";

const Checkout = () => {
  return (
    <>
      <Breadcrumb />

      <div className="flex gap-10">
        <CheckOutForm />
        <OrderDetails />
      </div>
    </>
  );
};

export default Checkout;
