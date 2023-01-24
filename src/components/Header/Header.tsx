import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import Link from "next/link";
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
          <MenuIcon />
        </button>

        <div className={styles.logo}>Shop</div>

        <ul className={clsx(styles.links)}>{primaryContent}</ul>

        <ul className={clsx(styles.linksContainer)}>
          <li className={clsx(styles.links)}>{secondaryContent}</li>
          <li>
            <button
              type="button"
              className={clsx(styles.btn)}
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
