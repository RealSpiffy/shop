import clsx from "clsx";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import styles from "./Header.module.scss";

export interface HeaderProps {
  primaryLinks: { href: string; label: string; cta?: boolean }[];
  secondaryLinks: { href: string; label: string }[];
}

export const Header: React.FC<HeaderProps> = ({
  primaryLinks,
  secondaryLinks,
}) => {
  const primaryContent = primaryLinks.map((link) => {
    return (
      <Link
        className={clsx(styles.label, link.cta && styles.cta)}
        href={link.href}
        key={link.label}
      >
        {link.label}
      </Link>
    );
  });

  const secondaryContent = secondaryLinks.map((link) => {
    return (
      <Link className={styles.label} href={link.href} key={link.label}>
        {link.label}
      </Link>
    );
  });
  return (
    <header className={styles.wrapper}>
      <nav className={styles.navbar}>
        <button
          type="button"
          className={clsx(styles.btn, styles.menuBtn)}
          onClick={() => console.log("open side bar")}
        >
          <FaBars />
        </button>

        <div className={styles.logo}>Shop</div>

        <ul className={clsx(styles.links)}>{primaryContent}</ul>

        <div className={styles.btnContainer}>
          <ul className={clsx(styles.links)}>{secondaryContent}</ul>
          <button
            type="button"
            className={clsx(styles.btn)}
            onClick={() => console.log("cart")}
          >
            Cart: 0
          </button>
        </div>
      </nav>
    </header>
  );
};
