import clsx from "clsx";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
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
      <li className={clsx(styles.links)} key={link.label}>
        <Link
          className={clsx(styles.label, link.cta && styles.cta)}
          href={link.href}
        >
          {link.label}
        </Link>
      </li>
    );
  });

  const secondaryContent = secondaryLinks.map((link) => {
    return (
      <li className={clsx(styles.links)} key={link.label}>
        <Link className={styles.label} href={link.href}>
          {link.label}
        </Link>
      </li>
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
          <MdMenu />
        </button>

        <div className={styles.logo}>Shop</div>

        <ul className={styles.links}>{primaryContent}</ul>

        <ul className={clsx(styles.linksContainer)}>
          {secondaryContent}
          <li>
            <button
              type="button"
              className={styles.btn}
              onClick={() => console.log("cart")}
            >
              Cart: 0
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
