import { CollectionType } from "@/lib/shopify";
import { CollectionLinkProps, CollectionLinkImage } from "./CollectionLink";

const getBackground: (
  image?: CollectionType["image"],
  fallBackAlt?: string
) => CollectionLinkImage = (image, fallbackAlt) =>
  image
    ? {
        src: image.src,
        alt: image.alt ?? fallbackAlt,
      }
    : undefined;

export const collectionLinkPropsAdapter: (
  collection: CollectionType
) => CollectionLinkProps = (collection) => {
  return {
    href: `/collection/${collection.handle}`,
    label: collection.title,
    background: getBackground(collection.image, collection.title),
  };
};
