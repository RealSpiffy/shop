import clsx from "clsx";
import Link from "next/link";
import styles from "./CollectionLink.module.scss";

export type CollectionLinkImage = { src: string; alt: string };
export interface CollectionLinkProps {
  href?: string;
  tagName?: keyof JSX.IntrinsicElements;
  label: string;
  background?: CollectionLinkImage;
}

export const CollectionLink = ({
  href,
  label,
  background,
  tagName: Wrapper = "div",
}: CollectionLinkProps) => {
  const hasBackground = !!background;

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
        </div>
      )}
      <div className={styles.labelContainer}>
        <Wrapper className={styles.label}>{label}</Wrapper>
      </div>
    </>
  );
  return href ? (
    <Link href={href} className={styles.outer}>
      {content}
    </Link>
  ) : (
    <div className={styles.outer}>{content}</div>
  );
};
