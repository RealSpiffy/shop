/* eslint-disable @next/next/no-img-element */
import styles from "./HeroBanner.module.scss";

export type HeroBannerImage = { src: string; alt: string };

export interface HeroBannerProps {
  background?: HeroBannerImage;
  logo?: HeroBannerImage;
}

export const HeroBanner = ({ background, logo }: HeroBannerProps) => {
  return (
    <div className={styles.outerBg}>
      <img
        className={styles.bgWrap}
        src={background.src}
        alt={background.src}
      />
      <div className={styles.logoWrap}>
        <img className={styles.logo} src={logo.src} alt={logo.src} />
      </div>
    </div>
  );
};
