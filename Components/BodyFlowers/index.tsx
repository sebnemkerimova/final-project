import Image from "next/image";
import React from "react";
import MainImage from "../shared/MainImage";

const BodyFlowers = () => {
  return (
    <>
      <div className="py-[10px] px-[10px] grid grid-cols-3 gap-4">
        <div>
          <MainImage alt="ImageFlower" src={"images/BodyImages/DecorGul.svg"} />
          <p>Barberton Daisy</p>
          <p className="text-[#46A358] text-lg	font-extrabold">&#36; 119.00</p>
        </div>

        <div>
          <MainImage alt="ImageFlower" src={"images/BodyImages/Kaktus.svg"} />
          <p>Angel Wing Begonia</p>
          <p className="text-[#46A358] text-lg	font-extrabold">&#36; 169.00</p>
        </div>

        <div>
          <MainImage alt="ImageFlower" src={"images/BodyImages/Sarmasiq.svg"} />
          <p>African Violet</p>
          <p className="text-[#46A358] text-lg	font-extrabold	">
            &#36;$199.00 $229.00
          </p>
        </div>

        <div>
          <MainImage
            alt="ImageFlower"
            src={"images/BodyImages/Diffenbaxiya.svg"}
          />
          <p>Beach Spider Lily</p>
          <p className="text-[#46A358] text-lg	font-extrabold	">&#36;$129.00</p>
        </div>

        <div>
          <MainImage
            alt="ImageFlower"
            src={"images/BodyImages/Spatifilium.svg"}
          />
          <p>Blushing Bromeliad</p>
          <p className="text-[#46A358] text-lg	font-extrabold">$139.00</p>
        </div>

        <div>
          <MainImage alt="ImageFlower" src={"images/BodyImages/Skullent.svg"} />
          <p>Aluminum Plant</p>
          <p className="text-[#46A358] text-lg	font-extrabold">$179.00</p>
        </div>
        <div>
          <MainImage
            src={"images/BodyImages/WhiteSkullent.svg"}
            alt="ImageFlower"
          />
          <p>Bird's Nest Fern</p>
          <p className="text-[#46A358] text-lg font-extrabold">&#36;$99.00</p>
        </div>
        <div>
          <MainImage src={"images/BodyImages/Aglonema.svg"} alt="ImageFlower" />
          <p>Broadleaf Lady Palm</p>
          <p className="text-[#46A358] text-lg	font-extrabold">&#36;$59.00</p>
        </div>
        <div>
          <MainImage src={"images/BodyImages/Crasula.svg"} alt="ImageFlower" />
          <p>Chinese Evergreen</p>
          <p className="text-[#46A358] text-lg-extrabold"> &#36;$39.00</p>
        </div>
      </div>

      <ol className="flex justify-end gap-1 text-xs font-medium">
        <li>
          <a
            href="#"
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
          >
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
          >
            1
          </a>
        </li>

        <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center text-white leading-8 dark:text-white">
          2
        </li>

        <li>
          <a
            href="#"
            className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
          >
            3
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
          >
            4
          </a>
        </li>

        <li>
          <a
            href="#"
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
          >
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ol>
    </>
  );
};

export default BodyFlowers;
