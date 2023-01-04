import React from "react";
import NextImage from "next/image";
import styles from "./styles.module.scss";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const Image: React.FC<ImageProps> = ({ src, alt, width, height }) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={styles.outer}
    />
  );
};

export default Image;
