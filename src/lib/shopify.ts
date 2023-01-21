import Client from "shopify-buy";
import {
  GetProductDocument,
  GetProductQuery,
  GetProductQueryVariables,
  GetProductHandlesDocument,
  GetProductHandlesQuery,
  GetProductHandlesQueryVariables,
} from "@/gql";
import { client } from "./graphql";

const COLLECTION_REQUEST_INCREMENT = 10;
const PRODUCT_REQUEST_INCREMENT = 4;

export const shopifyClient = Client.buildClient({
  storefrontAccessToken:
    process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
  domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
});

export const parseResponse = (response) => JSON.parse(JSON.stringify(response));

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

/**
 * Returns product by handle
 * @param handle string
 * @returns product
 */
export const fetchProduct: (
  handle: string
) => Promise<GetProductQuery["product"]> = async (handle) => {
  const queryVariables: GetProductQueryVariables = { handle };
  const { product } = await client.request(GetProductDocument, queryVariables);
  return product;
};

export const fetchAllCollections: () => Promise<
  ShopifyBuy.Collection[]
> = async () => await shopifyClient.collection.fetchAll().then(parseResponse);

/**
 * Fetches all collection handles in incremental requests
 * @returns string[]
 */
export const fetchAllCollectionHandles: () => Promise<string[]> = async () => {
  let handles: string[];

  const queryVariables: GetProductHandlesQueryVariables = {
    first: COLLECTION_REQUEST_INCREMENT,
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

export const fetchCollection: (
  handle: string
) => Promise<ShopifyBuy.Collection> = async (handle) =>
  await shopifyClient.collection.fetchByHandle(handle).then(parseResponse);
