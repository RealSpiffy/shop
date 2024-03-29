/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import Link from "next/link";
import styles from "./styles.module.scss";

export type ProductLinkImage = { src: string; alt: string };
export interface ProductLinkProps {
  href?: string;
  label: string;
  image?: ProductLinkImage;
  revealImage?: ProductLinkImage;
  price: number;
  compareAtPrice?: number;
  unavailable?: boolean;
}

export const ProductLink = ({
  href,
  label,
  image,
  revealImage,
  price,
  compareAtPrice,
  unavailable,
}: ProductLinkProps) => {
  const isOnSale = compareAtPrice && price < compareAtPrice;

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(num);
  };

  const content = (
    <div
      className={clsx(styles.productWrapper, unavailable && styles.unavailable)}
    >
      <div className={styles.imgWrapper}>
        {image && (
          <img className={styles.productImg} src={image.src} alt={image.alt} />
        )}
        {revealImage && image && (
          <img
            className={styles.revealImg}
            src={revealImage.src}
            alt={revealImage.alt}
          />
        )}
      </div>

      <div className={styles.detailsContainer}>
        <span className={styles.productLabel}>{label}</span>

        {href ? (
          isOnSale ? (
            <p className={styles.price}>
              <span className={styles.salePrice}>{formatCurrency(price)}</span>
              <span className={styles.compareAtPrice}>
                {formatCurrency(compareAtPrice)}
              </span>
            </p>
          ) : (
            <p>{price && formatCurrency(price)}</p>
          )
        ) : (
          <p className={styles.comingSoon}>Coming Soon</p>
        )}
      </div>
    </div>
  );
  return href ? <Link href={href}>{content}</Link> : content;
};
