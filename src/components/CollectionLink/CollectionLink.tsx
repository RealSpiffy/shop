import clsx from "clsx";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import styles from "./styles.module.scss";

interface StorybookDemoProps {
  href?: string;
  label: string;
  background?: { src: string; alt: string };
}

export const CollectionLink = ({
  href,
  label,
  background,
}: StorybookDemoProps) => {
  const hasBackground = !!background;

  const outerStyles = clsx(styles.outer, hasBackground && styles.hasBackground);

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
    <Link href={href} className={outerStyles}>
      {content}
      <span className={styles.linkArrow}>{<HiChevronRight />}</span>
    </Link>
  ) : (
    <div className={outerStyles}>{content}</div>
  );
};
