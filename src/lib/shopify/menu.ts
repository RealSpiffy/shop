import type { MenuType } from "./types";
import { SDK } from "./sdk";

const LAYOUT_MENU_HANDLES = {
  headerPrimary: "header-primary",
  headerSecondary: "header-secondary",
  footer: "footer",
};

type MenuKey = keyof typeof LAYOUT_MENU_HANDLES;

/**
 * Request menu for given handle
 * @param handle menu handle
 * @returns menu object
 */
export const getMenu: (handle: string) => Promise<MenuType> = async (
  handle
) => {
  const { menu } = await SDK.GetMenu({ handle });
  return menu;
};

export const getLayoutMenus: () => Promise<
  Record<MenuKey, MenuType | undefined>
> = async () => {
  const menuArray = await Promise.all(
    Object.entries(LAYOUT_MENU_HANDLES).map(async ([key, handle]) => {
      const data = await getMenu(handle);
      return { key, data } as { key: MenuKey; data: MenuType };
    })
  );

  return menuArray.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.key]: curr.data,
    }),
    {}
  ) as Record<MenuKey, MenuType>;
};
