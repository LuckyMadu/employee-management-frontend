import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";

interface CommonImageProps {
  src: string;
  alt: string;
  className: string;
}

export const CommonImage: FC<CommonImageProps> = ({ src, alt, className }) => {
  return (
    <Image
      className={classNames("rounded-xl", className)}
      sizes="100vw"
      width="0"
      height="0"
      src={src}
      alt={alt}
      priority
    />
  );
};
