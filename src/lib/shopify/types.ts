import {
  CollectionFieldsFragment,
  ImageFieldsFragment,
  PageInfo,
  ProductFieldsFragment,
  GetMenuQuery,
  MenuItemFieldsFragment,
} from "@/gql";

export type ConnectionType<T> = {
  nodes: T[];
  pageInfo: PageInfo;
};
export type ImageType = ImageFieldsFragment;
export type ProductType = ProductFieldsFragment & { images: ImageType[] };
export type CollectionType = CollectionFieldsFragment;
export type MenuItemType = MenuItemFieldsFragment & {
  items?: MenuItemFieldsFragment[];
};
export type MenuType = Omit<GetMenuQuery["menu"], "items"> & {
  items: MenuItemType[];
};
