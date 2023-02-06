import type { MenuType } from "@/lib/shopify";
import { MenuItemType } from "@/gql";

export const menu: MenuType = {
  title: "Test Menu",
  items: [
    {
      title: "Home page",
      url: "https://realspiffy.myshopify.com/",
      type: MenuItemType.Frontpage,
      items: [],
    },
    {
      title: "Search",
      url: "https://realspiffy.myshopify.com/search",
      type: MenuItemType.Search,
      items: [],
    },
    {
      title: "All collections",
      url: "https://realspiffy.myshopify.com/collections",
      type: MenuItemType.Collections,
      items: [],
    },
    {
      title: "Accessories",
      url: "https://realspiffy.myshopify.com/collections/accessories",
      type: MenuItemType.Collection,
      items: [],
    },
    {
      title: "All products",
      url: "https://realspiffy.myshopify.com/collections/all",
      type: MenuItemType.Catalog,
      items: [],
    },
    {
      title: "5 Panel Hat",
      url: "https://realspiffy.myshopify.com/products/5-panel-hat",
      type: MenuItemType.Product,
      items: [],
    },
    {
      title: "Contact",
      url: "https://realspiffy.myshopify.com/pages/contact",
      type: MenuItemType.Page,
      items: [],
    },
    {
      title: "News",
      url: "https://realspiffy.myshopify.com/blogs/news",
      type: MenuItemType.Blog,
      items: [],
    },
    {
      title: "Test Blog Post",
      url: "https://realspiffy.myshopify.com/blogs/news/test-blog-post",
      type: MenuItemType.Article,
      items: [],
    },
    {
      title: "Refund Policy",
      url: "https://realspiffy.myshopify.com/policies/refund-policy",
      type: MenuItemType.ShopPolicy,
      items: [],
    },
    {
      title: "Real Spiffy",
      url: "https://realspiffy.com",
      type: MenuItemType.Http,
      items: [],
    },
  ],
};
