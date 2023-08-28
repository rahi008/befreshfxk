// components/CustomImage.tsx
import React from "react";
import NextImage, { ImageProps } from "next/image";

interface CustomImageProps extends Omit<ImageProps, "src"> {
  src: string;
}

const isProd = process.env.NODE_ENV === "production";
const bsePath = isProd ? "https://befreshfx.com/fxnew/" : "http://localhost:3000/";
//${bsePath}
const Image: React.FC<CustomImageProps> = ({ src, ...rest }) => {
  const imagePath = `${bsePath}${src}`;

  return <NextImage src={imagePath} {...rest} />;
};

export default Image;
