import {
  CollectionFieldsFragment,
  ImageFieldsFragment,
  PageInfo,
  ProductFieldsFragment,
} from "@/gql";

export type ConnectionType<T> = {
  nodes: T[];
  pageInfo: PageInfo;
};

export type ImageType = ImageFieldsFragment;
export type ProductType = ProductFieldsFragment & { images: ImageType[] };
export type CollectionType = CollectionFieldsFragment;
