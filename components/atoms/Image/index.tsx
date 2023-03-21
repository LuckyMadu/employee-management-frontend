import { FC } from "react";
import Image from "next/image";

interface CommonImageProps {
  src: string;
  alt: string;
}

export const CommonImage: FC<CommonImageProps> = ({ src, alt }) => {
  return (
    <Image
      className="rounded-t-lg"
      width="300"
      height="200"
      src={src}
      alt={alt}
    />
  );
};
