import { FC } from "react";
import Image from "next/image";

interface CommonImageProps {
  src: string;
  alt: string;
}

export const CommonImage: FC<CommonImageProps> = ({ src, alt }) => {
  return (
    <Image
      className="rounded-xl w-40 h-100"
      sizes="100vw"
      width="0"
      height="0"
      src={src}
      alt={alt}
      priority
    />
  );
};
