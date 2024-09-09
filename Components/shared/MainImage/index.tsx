import Image from "next/image";
import React from "react";

const MainImage = ({
  src,
  alt = "Image",
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={200}
      height={200}
      quality={100}
      className={className}
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  );
};

export default MainImage;
