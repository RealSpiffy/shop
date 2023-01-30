import { Footer, footerPropsAdapter } from "@/components/Footer";
import { Header, headerPropsAdapter } from "@/components/Header";
import { getLayoutMenus } from "@/lib/shopify";
import styles from "./GlobalLayout.module.scss";

export interface GlobalLayoutProps {
  children: React.ReactNode;
  menus: Awaited<ReturnType<typeof getLayoutMenus>>;
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({
  children,
  menus,
}) => {
  const headerProps = headerPropsAdapter(
    menus.headerPrimary,
    menus.headerSecondary
  );
  const footerProps = footerPropsAdapter(menus.footer);

  return (
    <>
      <div className={styles.atf}>
        <Header {...headerProps} />
        <main>{children}</main>
      </div>
      <Footer {...footerProps} />
    </>
  );
};
