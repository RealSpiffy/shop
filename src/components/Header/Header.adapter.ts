import type { MenuType } from "@/lib/shopify";
import type { HeaderProps } from "./Header";
import { parseMenuItem } from "@/lib/shopify";

export const headerPropsAdapter: (
  primaryMenu: MenuType,
  secondaryMenu: MenuType
) => HeaderProps = (primaryMenu, secondaryMenu) => {
  const primaryLinks = primaryMenu.items.map((item) => {
    const { url } = parseMenuItem(item);

    return {
      href: url,
      label: item.title,
      cta: url === `/collection/sale`,
    };
  });

  const secondaryLinks = secondaryMenu.items.map((item) => {
    const { url } = parseMenuItem(item);

    return {
      href: url,
      label: item.title,
    };
  });

  return {
    primaryLinks,
    secondaryLinks,
  };
};
