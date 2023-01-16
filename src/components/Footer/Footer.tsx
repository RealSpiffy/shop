import styles from "./Footer.module.scss";

export interface FooterProps {
  linkGroups: { label: string; links: { href: string; label: string }[] }[];
}

export const Footer: React.FC<FooterProps> = ({ linkGroups }) => {
  return (
    <footer>
      SHOP
      <div>linkGroups: {JSON.stringify(linkGroups)}</div>
    </footer>
  );
};
