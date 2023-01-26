import { ProductType } from "@/lib/shopify";
import { ProductLinkProps } from "./ProductLink";

export const productLinkPropsAdapter: (
  product: ProductType
) => ProductLinkProps = (product) => {
  let image: ProductLinkProps["image"];
  if (product.images[0]) {
    image = {
      src: product.images[0].src,
      alt: product.images[0].alt ?? product.title,
    };
  }

  let revealImage: ProductLinkProps["revealImage"];
  if (product.images[1]) {
    revealImage = {
      src: product.images[1].src,
      alt: product.images[1].alt ?? product.title,
    };
  }

  let compareAtPrice: number;
  if (product.compareAtPrice.value.amount) {
    const formattedPrice = Number(product.compareAtPrice.value.amount);
    if (formattedPrice !== 0) {
      compareAtPrice = formattedPrice;
    }
  }

  return {
    href: `/product/${product.handle}`,
    label: product.title,
    image,
    revealImage: revealImage,
    price: Number(product.price.value.amount),
    compareAtPrice,
    unavailable: !product.availableForSale,
  };
};
