import { SDK } from "./sdk";
import type { ImageType, ProductType } from "./types";
import { fetchConnectionNodes } from "./util";

/**
 * Fetches all product handles in incremental requests
 * @returns handle array
 */
export const fetchProductHandles: () => Promise<string[]> = async () => {
  const nodes = await fetchConnectionNodes(SDK.GetProductHandles);
  const handles = nodes.map(({ handle }) => handle);
  return handles;
};

/**
 * Fetch all images for a given product
 * @param handle product handle
 * @returns image array
 */
export const fetchProductImages: (
  handle: string
) => Promise<ImageType[]> = async (handle) => {
  const getProductImagesMethod = async (variables) =>
    SDK.GetProductImages({ handle, ...variables }).then((res) => res.product);
  const images = await fetchConnectionNodes(getProductImagesMethod);
  return images;
};

/**
 * Returns product by handle
 * @param handle string
 * @returns product
 */
export const fetchProduct: (handle: string) => Promise<ProductType> = async (
  handle
) => {
  const { product } = await SDK.GetProduct({ handle });
  // Fetch ImageConnections seperately
  const images = await fetchProductImages(handle);
  return { ...product, images };
};
