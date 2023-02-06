import type { MenuType } from "@/lib/shopify";
import type { HeaderProps } from "./Header";
import { parseMenuItem } from "@/lib/shopify";

export const headerPropsAdapter: (
  primaryMenu: MenuType,
  secondaryMenu: MenuType
) => HeaderProps = (primaryMenu, secondaryMenu) => {
  // TODO: implement adapter
  return {
    primaryLinks: [],
    secondaryLinks: [],
  };
};
