import { HiChevronRight } from "react-icons/hi";
import styles from "./Footer.module.scss";

export interface FooterProps {
  linkGroups: { label: string; links: { href: string; label: string }[] }[];
}

export const Footer: React.FC<FooterProps> = ({ linkGroups }) => {
  const year = new Date().getFullYear();

  const content = linkGroups.map((section, i) => {
    return (
      <div key={section.label} className={styles.category}>
        <h2 className={styles.categoryLabel}>{section.label}</h2>
        <ul key={i} className={styles.categoryList}>
          {section.links &&
            section.links.map((x, i) => {
              return (
                <li key={i} className={styles.categoryItem}>
                  <a href={x.href} className={styles.link}>
                    {x.label}
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
        <form className={styles.formWrap}>
          <label htmlFor="email" className={styles.categoryLabel}>
            Newsletter
          </label>
          <div className={styles.form}>
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
