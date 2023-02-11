import clsx from "clsx";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import styles from "./styles.module.scss";

export type CollectionLinkImage = { src: string; alt: string };
export interface CollectionLinkProps {
  href?: string;
  label: string;
  background?: CollectionLinkImage;
}

export const CollectionLink = ({
  href,
  label,
  background,
}: CollectionLinkProps) => {
  const hasBackground = !!background;

  const outerClasses = clsx(
    styles.outer,
    hasBackground && styles.hasBackground
  );

  const content = (
    <>
      {hasBackground && (
        <div className={clsx(styles.bgImageWrap)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={background.src}
            alt={background.alt}
            className={styles.bgImage}
          />
          <span className={styles.overlay}></span>
        </div>
      )}
      <div className={styles.label}>{label}</div>
    </>
  );
  return href ? (
    <Link href={href} className={outerClasses}>
      {content}
      <span className={styles.linkArrow}>{<HiChevronRight />}</span>
    </Link>
  ) : (
    <div className={outerClasses}>{content}</div>
  );
};
