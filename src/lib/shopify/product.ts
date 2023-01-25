import type { ImageType, ProductType } from "./types";
import { SDK } from "./sdk";
import { getAllConnectionNodes } from "./util";

/**
 * Requests all product handles in incremental requests
 * @returns handle array
 */
export const getProductHandles: () => Promise<string[]> = async () => {
  const nodes = await getAllConnectionNodes(SDK.GetProductHandles);
  const handles = nodes.map(({ handle }) => handle);
  return handles;
};

/**
 * Requests all images for a given product
 * @param handle product handle
 * @returns image array
 */
export const getProductImages: (
  handle: string
) => Promise<ImageType[]> = async (handle) => {
  const getProductImagesMethod = async (variables) =>
    SDK.GetProductImages({ handle, ...variables }).then((res) => res.product);
  const images = await getAllConnectionNodes(getProductImagesMethod);
  return images;
};

/**
 * Requests product by handle
 * @param handle product string
 * @returns product
 */
export const getProduct: (handle: string) => Promise<ProductType> = async (
  handle
) => {
  const { product } = await SDK.GetProduct({ handle });
  // Fetch ImageConnections seperately
  const images = await getProductImages(handle);
  return { ...product, images };
};
