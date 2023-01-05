import Client from "shopify-buy";

export const shopifyClient = Client.buildClient({
  storefrontAccessToken: process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
  domain: process.env.SHOPIFY_STORE_DOMAIN,
});

export const parseResponse = (response) => JSON.parse(JSON.stringify(response));

export const fetchAllProducts: () => Promise<ShopifyBuy.Product[]> = async () =>
  await shopifyClient.product.fetchAll().then(parseResponse);

export const fetchProduct: (
  handle: string
) => Promise<ShopifyBuy.Product> = async (handle) =>
  shopifyClient.product.fetchByHandle(handle).then(parseResponse);

export const fetchAllCollections: () => Promise<
  ShopifyBuy.Collection[]
> = async () => await shopifyClient.collection.fetchAll().then(parseResponse);

export const fetchCollection: (
  handle: string
) => Promise<ShopifyBuy.Collection> = async (handle) =>
  await shopifyClient.collection.fetchByHandle(handle).then(parseResponse);
