import { MinPriceFieldsFragment } from "@/gql";
import { ProductType } from "@/lib/shopify";
import { ProductLinkProps, ProductLinkImage } from "./ProductLink";

/**
 * Create image object with alt text
 * @param image image object from Shopify
 * @param fallbackAlt fallback alt text in case original is undefined
 * @returns image object with alt text or undefined
 */
const getImage: (
  image?: ProductType["images"][0],
  fallbackAlt?: string
) => ProductLinkImage = (image, fallbackAlt) =>
  image
    ? {
        src: image.src,
        alt: image.alt ?? fallbackAlt,
      }
    : undefined;

/**
 * Format min price object as a number
 * @param price min price object from Shopify
 * @returns price value as a number
 */
const getPrice: (price: MinPriceFieldsFragment) => number = (price) =>
  Number(price.value.amount);

export const productLinkPropsAdapter: (
  product: ProductType
) => ProductLinkProps = (product) => {
  const formattedCompareAtPrice = getPrice(product.compareAtPrice);
  const compareAtPrice =
    formattedCompareAtPrice !== 0 ? formattedCompareAtPrice : undefined;

  return {
    href: `/product/${product.handle}`,
    label: product.title,
    image: getImage(product.images[0], product.title),
    revealImage: getImage(product.images[1], product.title),
    price: getPrice(product.price),
    compareAtPrice,
    unavailable: !product.availableForSale,
  };
};
