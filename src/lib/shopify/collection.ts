import type { CollectionType, ProductType } from "./types";
import { fetchProductImages } from "./product";
import { SDK } from "./sdk";
import { fetchConnectionNodes } from "./util";

/**
 * Fetches all collection handles in incremental requests
 * @returns handle array
 */
export const fetchCollectionHandles: () => Promise<string[]> = async () => {
  const nodes = await fetchConnectionNodes(SDK.GetCollectionHandles);
  const handles = nodes.map(({ handle }) => handle);
  return handles;
};

/**
 * Fetch all collections
 * @returns collection array
 */
export const fetchCollections: () => Promise<CollectionType[]> = async () => {
  const collections = await fetchConnectionNodes(SDK.GetCollections);
  return collections;
};

/**
 * Fetch all products (with images) in a collection
 * @param handle collection handle
 * @returns
 */
const fetchCollectionProducts: (
  handle: string
) => Promise<ProductType[]> = async (handle) => {
  const getCollectionProductsMethod = async (variables) =>
    SDK.GetCollectionProducts({ handle, ...variables }).then(
      (res) => res.collection
    );
  const products = await fetchConnectionNodes(getCollectionProductsMethod);

  // Fetch images seperately
  const productsWithImages = await Promise.all(
    products.map(async (product) => {
      const images = await fetchProductImages(product.handle);
      return { ...product, images };
    })
  );
  return productsWithImages;
};

/**
 * Fetch a collection by handle (with product data)
 * @param handle
 * @returns
 */
export const fetchCollection: (
  handle: string
) => Promise<{ collection: CollectionType; products: ProductType[] }> = async (
  handle
) => {
  const { collection } = await SDK.GetCollection({ handle });
  const products = await fetchCollectionProducts(handle);
  return { collection, products };
};
