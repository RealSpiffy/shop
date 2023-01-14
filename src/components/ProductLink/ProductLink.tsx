import clsx from "clsx";
import styles from "./styles.module.scss";

interface ProductLinkProps {
  href?: string;
  label: string;
  image?: { src: string; alt: string };
  revealImage?: { src: string; alt: string };
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
  return (
    <div
      className={`${styles.productWrapper} ${
        unavailable ? styles.unavailable : null
      }`}
    >
      {/* for cases where revealImage not available, on hover.. want image to stay the same?  */}
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
        <h5>{label}</h5>

        {href ? (
          <p className={styles.priceContainer}>
            <span className={price < compareAtPrice && styles.salePrice}>
              ${price}
            </span>
            <span className={styles.prevPrice}>
              {compareAtPrice && price < compareAtPrice && "$" + compareAtPrice}
            </span>
          </p>
        ) : (
          <span>Coming Soon</span>
        )}
      </div>
    </div>
  );
};
