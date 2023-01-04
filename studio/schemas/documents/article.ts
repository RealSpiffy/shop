export const article = {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "slug", type: "slug", options: { source: "title" } },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "image",
      title: "Image",
      type: "a11yImage",
    },
    {
      name: "related",
      type: "array",
      title: "Related",
      of: [{ type: "link" }],
    },
  ],
};
