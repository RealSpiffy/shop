import type { MenuType } from "@/lib/shopify";
import type { FooterProps } from "./Footer";
import { parseMenuItem } from "@/lib/shopify";

export const footerPropsAdapter: (menu: MenuType) => FooterProps = (menu) => {
  const { items } = menu;

  const linkGroups = items.map((group) => {
    const { title, items } = group;
    const links = items.map((link) => {
      const { title } = link;
      const { url } = parseMenuItem(link);
      return {
        href: url,
        label: title,
      };
    });

    return {
      label: title,
      links,
    };
  });

  return {
    linkGroups,
  };
};
