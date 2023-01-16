import clsx from "clsx";
import Link from "next/link";
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
  const content = (
    <>
      <div>{label}</div>
      {background && (
        <div className={styles.bgImageWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={background.src}
            alt={background.alt}
            className={styles.bgImage}
          />
        </div>
      )}
    </>
  );
  return href ? (
    <Link
      href={href}
      className={clsx(styles.outer, background && styles.overlay, styles.link)}
    >
      {content}
      <span className={styles.linkArrow}>{`>`}</span>
    </Link>
  ) : (
    <div className={clsx(styles.outer, background && styles.overlay)}>
      {content}
    </div>
  );
};
