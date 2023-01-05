export const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      // TODO: validate handle against store inventory
      name: "handle",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "seo",
      fieldset: "seo",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      group: "seo",
      fieldset: "seo",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      group: "seo",
      fieldset: "seo",
    },
    {
      name: "related",
      type: "array",
      title: "Related",
      group: "seo",
      fieldset: "seo",
      of: [{ type: "link" }],
    },
  ],
  groups: [{ name: "seo", title: "SEO" }],
  fieldsets: [
    {
      name: "seo",
      title: "SEO FS",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
};
