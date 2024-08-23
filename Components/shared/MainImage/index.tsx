import Image from "next/image";
import React from "react";

const MainImage = ({ src, alt = "Image" }: { src: string; alt?: string }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={200}
      height={200}
      quality={100}
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  );
};

export default MainImage;
