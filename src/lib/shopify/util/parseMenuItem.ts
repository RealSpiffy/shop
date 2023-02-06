import type { MenuItemType as IMenuItemType } from "../types";
import { MenuItemType } from "@/gql";

const regexMenuItemUrlPathGroups =
  /(?:https:\/\/(?:.+).myshopify.com)(?:(?:\/)(.*))/gi;

const regexMenuItemUrlPlaceholder = /https:\/\/(?:.+).myshopify.com#/gi;

/**
 * Parses a Shopify link into an array of path groups
 * @param url MenuItem url
 * @returns path group array
 */
const getPathGroups: (url: string) => string[] = (url) => {
  const firstMatch = Array.from(url.matchAll(regexMenuItemUrlPathGroups))[0];
  return firstMatch?.[1] ? firstMatch[1].split("/") : [];
};

/**
 * Checks if url matches Shopify's placeholder link format
 * @param url MenuItem url
 * @returns placeholder status
 */
const checkIfPlaceholder: (url: string) => boolean = (url) => {
  const matches = Array.from(url.matchAll(regexMenuItemUrlPlaceholder));
  return matches.length > 0;
};

const HOMEPAGE_LINK = { url: "/" };
const PLACEHOLDER_LINK = { url: "", placeholder: true };

/**
 * Parse Shopify MenuItem and returns useful data for links
 * @param item Shopify MenuItem
 * @returns link data
 */
export const parseMenuItem: (item: IMenuItemType) => {
  url: string;
  external?: boolean;
  placeholder?: boolean;
} = (item) => {
  switch (item.type) {
    case MenuItemType.Frontpage:
      return HOMEPAGE_LINK;
    case MenuItemType.Collections:
      return { url: "/collection" };
    case MenuItemType.Collection: {
      const [, handle] = getPathGroups(item.url);
      return { url: `/collection/${handle}` };
    }
    case MenuItemType.Product: {
      const [, handle] = getPathGroups(item.url);
      return { url: `/product/${handle}` };
    }
    case MenuItemType.Http: {
      return checkIfPlaceholder(item.url)
        ? PLACEHOLDER_LINK
        : { url: item.url, external: true };
    }
    case MenuItemType.Search:
    case MenuItemType.Catalog:
    case MenuItemType.Page:
    case MenuItemType.Blog:
    case MenuItemType.Article:
    case MenuItemType.ShopPolicy:
      // TODO: more cases, return to homepage in meantime
      return HOMEPAGE_LINK;
    default:
      console.warn("Unhandled case:", item.type);
  }

  return PLACEHOLDER_LINK;
};
