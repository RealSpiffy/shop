import type { MenuType } from "@/lib/shopify";
import type { FooterProps } from "./Footer";
import { parseMenuItem } from "@/lib/shopify";

export const footerPropsAdapter: (menu: MenuType) => FooterProps = (menu) => {
  // TODO: implement adapter
  return {
    linkGroups: [],
  };
};
