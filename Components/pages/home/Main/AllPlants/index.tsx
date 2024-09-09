import Link from "next/link";
import React from "react";

const AllPlants = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-6">
        <Link href={"#"}>All plants</Link>
        <Link href={"#"}>New Arrivals</Link>
        <Link href={"#"}> Sale</Link>
      </div>

      <p>Short By:Default Sorting</p>
    </div>
  );
};

export default AllPlants;
