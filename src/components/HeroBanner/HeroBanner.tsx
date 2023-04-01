/* eslint-disable @next/next/no-img-element */
import styles from "./HeroBanner.module.scss";
import RsLogo from "../../../public/rs-logo.svg";

export type HeroBannerImage = { src: string; alt: string };

export interface HeroBannerProps {
  background?: HeroBannerImage;
}

export const HeroBanner = ({ background }: HeroBannerProps) => {
  return (
    <div className={styles.outerBg}>
      <img
        className={styles.bgWrap}
        src={background.src}
        alt={background.src}
      />
      <div className={styles.logoWrap}>
        <RsLogo color="white" />
      </div>
    </div>
  );
};
