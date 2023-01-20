import { GraphQLClient } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ENDPOINT;
const accessToken = process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN;

export const client = new GraphQLClient(endpoint, {
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Storefront-Access-Token": accessToken,
  },
});
