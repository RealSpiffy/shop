/* eslint-disable @typescript-eslint/no-explicit-any */
import { validateCollectionHandle } from "../../lib/shopify";

export const collection = {
  name: "collection",
  title: "Collection",
  type: "document",
  fields: [
    {
      name: "handle",
      type: "slug",
      validation: (Rule: any) =>
        Rule.required().custom(
          async (value: any) => await validateCollectionHandle(value?.current)
        ),
    },
    {
      name: "featured",
      type: "array",
      title: "Featured Products",
      // TODO: abstract product-handle input with validation
      of: [{ type: "string" }],
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      fieldset: "seo",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      fieldset: "seo",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      fieldset: "seo",
    },
  ],
  fieldsets: [
    {
      name: "seo",
      title: "SEO",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
};
