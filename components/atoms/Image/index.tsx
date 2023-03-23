import { FC } from "react";
import Image from "next/image";

interface CommonImageProps {
  src: string;
  alt: string;
}

export const CommonImage: FC<CommonImageProps> = ({ src, alt }) => {
  return (
    <Image className="rounded-xl" width="150" height="80" src={src} alt={alt} />
  );
};
