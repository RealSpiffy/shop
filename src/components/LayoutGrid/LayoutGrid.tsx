import styles from "./LayoutGrid.module.scss";

interface LayoutGridProps {
  children: React.ReactNode;
}

export const LayoutGrid: React.FC<LayoutGridProps> = ({ children }) => {
  return <div className={styles.outer}>{children}</div>;
};
