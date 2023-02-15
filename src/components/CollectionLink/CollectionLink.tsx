import clsx from "clsx";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import styles from "./CollectionLink.module.scss";

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

  const innerClasses = clsx(
    styles.inner,
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
  return (
    <div className={styles.outer}>
      {href ? (
        <Link href={href} className={innerClasses}>
          {content}
          <span className={styles.linkArrow}>{<HiChevronRight />}</span>
        </Link>
      ) : (
        <div className={innerClasses}>{content}</div>
      )}
    </div>
  );
};
