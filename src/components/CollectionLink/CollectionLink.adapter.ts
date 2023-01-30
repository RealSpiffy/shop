import { CollectionType } from "@/lib/shopify";
import { CollectionLinkProps } from "./CollectionLink";

export const collectionLinkPropsAdapter: (
  collection: CollectionType
) => CollectionLinkProps = (collection) => {
  return {
    id: collection.id,
    handle: collection.handle,
    label: collection.title,
    image: { alt: collection.image.alt, src: collection.image.src },
    descriptionHtml: collection.descriptionHtml,
  };
};
