import Link from "next/link";
import styles from "./styles.module.scss";

export const PreviewAlert: React.FC = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        This page is a preview.{" "}
        <Link href="/api/exit-preview" className={styles.link}>
          Click here
        </Link>{" "}
        to exit preview mode.
      </div>
    </div>
  );
};
