import { HiChevronRight } from "react-icons/hi";
import styles from "./Footer.module.scss";

export interface FooterProps {
  linkGroups: { label: string; links: { href: string; label: string }[] }[];
}

export const Footer: React.FC<FooterProps> = ({ linkGroups }) => {
  const year = new Date().getFullYear();

  const content = linkGroups.map((group) => {
    return (
      <div key={group.label} className={styles.category}>
        <h2 className={styles.categoryLabel}>{group.label}</h2>
        <ul key={group.label} className={styles.categoryList}>
          {group.links.map((link) => {
            return (
              <li key={link.href + link.label} className={styles.categoryItem}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return (
    <footer className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.content}>{content}</div>

        <form className={styles.formContainer}>
          <label htmlFor="email" className={styles.categoryLabel}>
            Newsletter
          </label>
          <div className={styles.formWrap}>
            <input
              type="email"
              id="email"
              name="userEmail"
              placeholder="Enter your email"
              className={styles.formInput}
            ></input>
            <button type="submit" className={styles.formButton}>
              <HiChevronRight />
            </button>
          </div>
        </form>
      </div>

      <small className={styles.copyright}>© Real Spiffy {year}</small>
    </footer>
  );
};
