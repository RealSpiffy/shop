import { article } from "./documents/article";
import { collection } from "./documents/collection";
import { product } from "./documents/product";
import { a11yImage } from "./objects/a11yImage";
import { blockContent } from "./objects/blockContent";
import { link } from "./objects/link";

export const schemaTypes = [
  a11yImage,
  blockContent,
  link,
  article,
  collection,
  product,
];
