import type { CollectionType, ProductType } from "./types";
import { getProductImages } from "./product";
import { SDK } from "./sdk";
import { getAllConnectionNodes } from "./util";

/**
 * Requests all collection handles in incremental requests
 * @returns handle array
 */
export const getCollectionHandles: () => Promise<string[]> = async () => {
  const nodes = await getAllConnectionNodes(SDK.GetCollectionHandles);
  const handles = nodes.map(({ handle }) => handle);
  return handles;
};

/**
 * Requests all collections
 * @returns collection array
 */
export const getCollections: () => Promise<CollectionType[]> = async () => {
  const collections = await getAllConnectionNodes(SDK.GetCollections);
  return collections;
};

/**
 * Requests all products (with images) in a collection
 * @param handle collection handle
 * @returns
 */
const getCollectionProducts: (
  handle: string
) => Promise<ProductType[]> = async (handle) => {
  const getCollectionProductsMethod = async (variables) =>
    SDK.GetCollectionProducts({ handle, ...variables }).then(
      (res) => res.collection
    );
  const products = await getAllConnectionNodes(getCollectionProductsMethod);

  // Requests images seperately
  const productsWithImages = await Promise.all(
    products.map(async (product) => {
      const images = await getProductImages(product.handle);
      return { ...product, images };
    })
  );
  return productsWithImages;
};

/**
 * Requests a collection by handle (with product data)
 * @param handle collection handle
 * @returns collection
 */
export const getCollection: (
  handle: string
) => Promise<{ collection: CollectionType; products: ProductType[] }> = async (
  handle
) => {
  const { collection } = await SDK.GetCollection({ handle });
  const products = await getCollectionProducts(handle);
  return { collection, products };
};
