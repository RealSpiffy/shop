/* eslint-disable @typescript-eslint/no-explicit-any */
import Client from "shopify-buy";

export const shopifyClient = Client.buildClient({
  storefrontAccessToken: import.meta.env
    .SANITY_STUDIO_SHOPIFY_STORE_FRONT_ACCESS_TOKEN as string,
  domain: import.meta.env.SANITY_STUDIO_SHOPIFY_STORE_DOMAIN as string,
});

export const parseResponse = (response: any) =>
  JSON.parse(JSON.stringify(response));

export const validateProductHandle: (
  handle: string
) => Promise<boolean | string> = async (handle) => {
  if (!handle) {
    return "Enter valid product handle";
  }

  const res = await shopifyClient.product
    .fetchByHandle(handle)
    .then(parseResponse);
  return res ? true : "Enter valid product handle";
};

export const validateCollectionHandle: (
  handle: string
) => Promise<boolean | string> = async (handle) => {
  if (!handle) {
    return "Enter valid collection handle";
  }

  const res = await shopifyClient.collection
    .fetchByHandle(handle)
    .then(parseResponse);
  return res ? true : "Enter valid collection handle";
};
