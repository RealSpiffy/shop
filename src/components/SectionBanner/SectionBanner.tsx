import clsx from "clsx";
import styles from "./SectionBanner.module.scss";

interface SectionBannerProps {
  heading: string;
  subtitle?: string;
  action?: string;
  headingTag?: string;
  subtitleTag?: string;
}

export const SectionBanner = ({
  heading,
  subtitle,
  action,
  headingTag = "div",
  subtitleTag = "div",
}: SectionBannerProps) => {
  const spaceBetween = !!subtitle && !!action;
  const noOptions = !subtitle && !action;

  const CustomHeadingTag = headingTag as keyof JSX.IntrinsicElements;
  const CustomSubtitleTag = subtitleTag as keyof JSX.IntrinsicElements;

  return (
    <div className={styles.container}>
      <CustomHeadingTag className={clsx(styles.main, styles.wordBreak)}>
        {heading}
      </CustomHeadingTag>
      {noOptions ? null : (
        <div className={spaceBetween && styles.options}>
          {subtitle ? (
            <CustomSubtitleTag
              className={clsx(styles.subtitle, styles.wordBreak)}
            >
              {subtitle}
            </CustomSubtitleTag>
          ) : null}
          {action ? (
            <div className={styles.actionWrap}>Sort by: {action}</div>
          ) : null}
        </div>
      )}
    </div>
  );
};
