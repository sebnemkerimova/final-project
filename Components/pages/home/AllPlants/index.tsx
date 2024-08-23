import Link from "next/link";
import React from "react";

const AllPlants = () => {
  return (
    <div>
      <Link href={"#"}>All plants</Link>
      <Link href={"#"}>New Arrivals</Link>
      <Link href={"#"}> Sale</Link>

      <p>Short By:Default Sorting</p>
    </div>
  );
};

export default AllPlants;
