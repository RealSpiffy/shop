/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CollectionFieldsFragment,
  ImageFieldsFragment,
  PageInfo,
  ProductFieldsFragment,
  getSdk,
} from "@/gql";
import { client } from "./graphql";

const CONNECTION_REQUEST_INCREMENT = 10;

export const SDK = getSdk(client);

type ConnectionType<T> = {
  nodes: T[];
  pageInfo: PageInfo;
};

export type ImageType = ImageFieldsFragment;
export type ProductType = ProductFieldsFragment & { images: ImageType[] };
export type CollectionType = CollectionFieldsFragment;

/**
 * Exhaustive fetch all nodes for a connection request
 * @param requestMethod request returning connection: { nodes, pageInfo }
 * @param count
 * @param reverse
 * @returns
 */
async function fetchConnectionNodes<T>(
  requestMethod: (...args: any[]) => Promise<{ connection: ConnectionType<T> }>
): Promise<T[]> {
  let accNodes: T[];

  const queryVariables = {
    count: CONNECTION_REQUEST_INCREMENT,
    cursor: undefined,
  };

  let shouldRequest = true;

  while (shouldRequest) {
    const res = await requestMethod(queryVariables);
    const { nodes, pageInfo } = res.connection;
    const { hasNextPage, endCursor } = pageInfo;

    // Append nodes
    accNodes = [...(accNodes ?? []), ...nodes];
    // Continue requests if there are remaining items
    shouldRequest = hasNextPage;
    queryVariables.cursor = endCursor;
  }

  return accNodes;
}

/**
 * Fetches all product handles in incremental requests
 * @returns string[]
 */
export const fetchProductHandles: () => Promise<string[]> = async () => {
  const nodes = await fetchConnectionNodes(SDK.GetProductHandles);
  const handles = nodes.map(({ handle }) => handle);
  return handles;
};

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

/**
 * Fetches all collection handles in incremental requests
 * @returns string[]
 */
export const fetchCollectionHandles: () => Promise<string[]> = async () => {
  const nodes = await fetchConnectionNodes(SDK.GetCollectionHandles);
  const handles = nodes.map(({ handle }) => handle);
  return handles;
};

/**
 * Fetch all collections
 * @returns Promise<CollectionType[]>
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
