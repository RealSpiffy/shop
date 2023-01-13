/* eslint-disable @next/next/no-img-element */
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
  return (
    <div className={clsx(styles.outer, !background && styles.default)}>
      <div>{label}</div>
      <div className={styles.bgImageWrap}>
        {/* disabled warning to use next/image just for this file... */}
        <img
          src={background.src}
          alt={background.alt}
          className={styles.bgImage}
        />
      </div>
      {href && <Link href={href} className={styles.link}>{`>`}</Link>}
    </div>
  );
};
