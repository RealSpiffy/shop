import type { MenuType } from "@/lib/shopify";
import type { FooterProps } from "./Footer";

export const footerPropsAdapter: (menu: MenuType) => FooterProps = (menu) => {
  // TODO: implement adapter
  return {
    linkGroups: [],
  };
};
