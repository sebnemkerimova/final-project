import Breadcrumb from "@/Components/layout/Breadcrumb";
import CartTotal from "@/Components/pages/cart/CartTotal";
import Table from "@@/pages/cart/Table";

export default function Cart() {
  return (
    <>
      <Breadcrumb />

      <div className="my-8 flex gap-8">
        <div className="w-3/4">
          <Table />
        </div>

        <div className="w-1/4">
          <CartTotal />
        </div>
      </div>
    </>
  );
}
