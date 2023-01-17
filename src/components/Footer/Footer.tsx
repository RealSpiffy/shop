import { HiChevronRight } from "react-icons/hi";
import styles from "./Footer.module.scss";

export interface FooterProps {
  linkGroups: { label: string; links: { href: string; label: string }[] }[];
}

export const Footer: React.FC<FooterProps> = ({ linkGroups }) => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.outer}>
      <form>
        <label htmlFor="email" className={styles.formLabel}>
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
      <small className={styles.copyright}>© Real Spiffy {year}</small>
    </footer>
  );
};
