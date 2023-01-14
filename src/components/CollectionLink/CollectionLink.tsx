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
  //main content
  const content = (
    <>
      <div>{label}</div>
      {background.src && (
        <div className={styles.bgImageWrap}>
          {/* disabled warning to use next/image just for this file... */}
          <img
            src={background.src}
            alt={background.alt}
            className={styles.bgImage}
          />
        </div>
      )}
    </>
  );
  return (
    // swap outer wrapper between <a> and <div> dependant on if link is present
    <>
      {href ? (
        <Link
          href={href}
          className={clsx(
            styles.outer,
            background.src && styles.overlay,
            styles.link
          )}
        >
          {content}
          <span className={styles.linkArrow}>{`>`}</span>
        </Link>
      ) : (
        <div className={clsx(styles.outer, background.src && styles.overlay)}>
          {content}
        </div>
      )}
    </>
  );
};
