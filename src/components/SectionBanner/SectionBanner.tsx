import clsx from "clsx";
import styles from "./SectionBanner.module.scss";

interface SectionBannerProps {
  heading: string;
  subtitle?: string;
  action?: string;
}

export const SectionBanner = ({
  heading,
  subtitle,
  action,
}: SectionBannerProps) => {
  const spaceBetween = !!subtitle && !!action;
  const noOptions = !subtitle && !action;

  return (
    <div className={styles.container}>
      <h2 className={clsx(styles.main, styles.wordBreak)}>{heading}</h2>
      {noOptions ? null : (
        <div className={spaceBetween && styles.options}>
          {subtitle ? (
            <h4 className={clsx(styles.subtitle, styles.wordBreak)}>
              {subtitle}
            </h4>
          ) : null}
          {action ? (
            <div className={styles.actionWrap}>Sort by: {action}</div>
          ) : null}
        </div>
      )}
    </div>
  );
};
