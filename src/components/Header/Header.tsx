import styles from "./Header.module.scss";

export interface HeaderProps {
  primaryLinks: { href: string; label: string; cta?: boolean }[];
  secondaryLinks: { href: string; label: string }[];
}

export const Header: React.FC<HeaderProps> = ({
  primaryLinks,
  secondaryLinks,
}) => {
  return (
    <header>
      SHOP
      <div>primary: {JSON.stringify(primaryLinks)}</div>
      <div>secondary: {JSON.stringify(secondaryLinks)}</div>
    </header>
  );
};
