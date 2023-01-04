/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace ShopifyBuy {
  interface ItemType {
    fieldBaseTypes: Record<string, any>;
    implementsNode: boolean;
    kind: string;
    name: import("./shopify-buy").TypeName;
  }

  export interface Product {
    handle: string;
    type: ItemType;
  }
  export interface Collection {
    handle: string;
    type: ItemType;
  }
}
