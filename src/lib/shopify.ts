import {
  GetCollectionsDocument,
  GetCollectionsQuery,
  GetCollectionsQueryVariables,
  GetCollectionDocument,
  GetCollectionQuery,
  GetCollectionQueryVariables,
  GetCollectionHandlesDocument,
  GetCollectionHandlesQuery,
  GetCollectionHandlesQueryVariables,
  GetProductDocument,
  GetProductQuery,
  GetProductQueryVariables,
  GetProductHandlesDocument,
  GetProductHandlesQuery,
  GetProductHandlesQueryVariables,
} from "@/gql";
import { client } from "./graphql";

const COLLECTION_REQUEST_INCREMENT = 2;
const PRODUCT_REQUEST_INCREMENT = 10;

/**
 * Fetches all product handles in incremental requests
 * @returns string[]
 */
export const fetchAllProductHandles: () => Promise<string[]> = async () => {
  let handles: string[];

  const queryVariables: GetProductHandlesQueryVariables = {
    first: PRODUCT_REQUEST_INCREMENT,
    after: undefined,
  };
  let shouldRequest = true;

  while (shouldRequest) {
    const res: GetProductHandlesQuery = await client.request(
      GetProductHandlesDocument,
      queryVariables
    );
    const { edges } = res.products;

    if (edges.length) {
      // Append new handles
      handles = [...(handles ?? []), ...edges.map(({ node }) => node.handle)];
      // Update query variable to last cursor
      queryVariables.after = edges[edges.length - 1].cursor;
    }

    // Continue requests if there are remaining items
    shouldRequest = edges.length === PRODUCT_REQUEST_INCREMENT;
  }

  return handles;
};

export type ProductDetailType = GetProductQuery["product"];
/**
 * Returns product by handle
 * @param handle string
 * @returns product
 */
export const fetchProduct: (
  handle: string
) => Promise<ProductDetailType> = async (handle) => {
  const queryVariables: GetProductQueryVariables = { handle };
  const { product }: GetProductQuery = await client.request(
    GetProductDocument,
    queryVariables
  );
  return product;
};

export type CollectionListingType =
  GetCollectionsQuery["collections"]["edges"][0]["node"][];

export const fetchAllCollections: () => Promise<CollectionListingType> =
  async () => {
    let collections: CollectionListingType;

    const queryVariables: GetCollectionsQueryVariables = {
      first: COLLECTION_REQUEST_INCREMENT,
      after: undefined,
    };
    let shouldRequest = true;

    while (shouldRequest) {
      console.log("!@#");
      const res: GetCollectionsQuery = await client.request(
        GetCollectionsDocument,
        queryVariables
      );
      const { edges } = res.collections;

      if (edges.length) {
        // Append new collections
        collections = [
          ...(collections ?? []),
          ...edges.map(({ node }) => node),
        ];
        // Update query variable to last cursor
        queryVariables.after = edges[edges.length - 1].cursor;
      }

      // Continue requests if there are remaining items
      shouldRequest = edges.length === COLLECTION_REQUEST_INCREMENT;
    }

    return collections;
  };

/**
 * Fetches all collection handles in incremental requests
 * @returns string[]
 */
export const fetchAllCollectionHandles: () => Promise<string[]> = async () => {
  let handles: string[];

  const queryVariables: GetCollectionHandlesQueryVariables = {
    first: COLLECTION_REQUEST_INCREMENT,
    after: undefined,
  };
  let shouldRequest = true;

  while (shouldRequest) {
    const res: GetCollectionHandlesQuery = await client.request(
      GetCollectionHandlesDocument,
      queryVariables
    );
    const { edges } = res.collections;

    if (edges.length) {
      // Append new handles
      handles = [...(handles ?? []), ...edges.map(({ node }) => node.handle)];
      // Update query variable to last cursor
      queryVariables.after = edges[edges.length - 1].cursor;
    }

    // Continue requests if there are remaining items
    shouldRequest = edges.length === COLLECTION_REQUEST_INCREMENT;
  }

  return handles;
};

// TODO: format/flatten products
export type CollectionDetailType = GetCollectionQuery["collection"];
export const fetchCollection: (
  handle: string
) => Promise<CollectionDetailType> = async (handle) => {
  const queryVariables: GetCollectionQueryVariables = {
    handle,
    productsFirst: PRODUCT_REQUEST_INCREMENT,
    imagesFirst: 2,
  };
  const { collection } = await client.request(
    GetCollectionDocument,
    queryVariables
  );
  return collection;
};
