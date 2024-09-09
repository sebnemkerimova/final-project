import MainImage from "@/Components/shared/MainImage";
import Image from "next/image";
import React from "react";
import { FaPlus, FaMinus, FaRegTrashCan } from "react-icons/fa6";

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Products
            </th>

            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Price
            </th>

            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Quantity
            </th>

            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Total
            </th>

            <th className="px-4 py-2 text-left"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          <tr className="my-2 bg-grey-extra-light">
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              <div className="flex items-center gap-[14px]">
                <div className="size-[70px]">
                  <MainImage src="/images/BarbetonDaisy/Kaktus.svg" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3>Barberton Daisy</h3>
                  <p>
                    <span className="text-light-gray">SKU:</span> 1995751877966
                  </p>
                </div>
              </div>
            </td>

            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              $ 119.00
            </td>

            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              <div className="flex items-center gap-4">
                <button className="flex size-[35px] items-center justify-center rounded-full bg-green-main text-white">
                  <FaMinus />
                </button>
                <span>2</span>
                <button className="flex size-[35px] items-center justify-center rounded-full bg-green-main text-white">
                  <FaPlus />
                </button>
              </div>
            </td>

            <td className="font-bold whitespace-nowrap px-4 py-2 text-green-main">
              $834.00
            </td>

            <td className="whitespace-nowrap px-4 py-2">
              <button>
                <FaRegTrashCan />
              </button>
            </td>
          </tr>

          <tr className="my-2 bg-grey-extra-light">
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              <div className="flex items-center gap-[14px]">
                <div className="size-[70px]">
                  <MainImage src="/images/BodyImages/Spatifilium.svg"/>
                </div>
                <div className="flex flex-col gap-2">
                  <h3>Blushing Bromeliad</h3>
                  <p>
                    <span className="text-light-gray">SKU:</span> 1995751877966
                  </p>
                </div>
              </div>
            </td>

            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              $ 139.00
            </td>

            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              <div className="flex items-center gap-4">
                <button className="flex size-[35px] items-center justify-center rounded-full bg-green-main text-white">
                  <FaMinus />
                </button>
                <span>6</span>
                <button className="flex size-[35px] items-center justify-center rounded-full bg-green-main text-white">
                  <FaPlus />
                </button>
              </div>
            </td>

            <td className="font-bold whitespace-nowrap px-4 py-2 text-green-main">
              $238.00
            </td>

            <td className="whitespace-nowrap px-4 py-2">
              <button>
                <FaRegTrashCan />
              </button>
            </td>
          </tr>

          <tr className="my-2 bg-grey-extra-light">
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              <div className="flex items-center gap-[14px]">
                <div className="size-[70px]">
                  <MainImage src="/images/BodyImages/Skullent.svg" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3>Aluminum Plant</h3>
                  <p>
                    <span className="text-light-gray">SKU:</span> 1995751877966
                  </p>
                </div>
              </div>
            </td>

            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              $179.00
            </td>

            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              <div className="flex items-center gap-4">
                <button className="flex size-[35px] items-center justify-center rounded-full bg-green-main text-white">
                  <FaMinus />
                </button>
                <span>9</span>
                <button className="flex size-[35px] items-center justify-center rounded-full bg-green-main text-white">
                  <FaPlus />
                </button>
              </div>
            </td>

            <td className="font-bold whitespace-nowrap px-4 py-2 text-green-main">
              $1,611.00
            </td>

            <td className="whitespace-nowrap px-4 py-2">
              <button>
                <FaRegTrashCan />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
