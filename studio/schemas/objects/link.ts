export const link = {
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    { name: "title", type: "string", title: "Title" },
    {
      name: "url",
      type: "url",
      title: "URL",
      hidden: ({ parent, value }: CallbackArg) =>
        !!(!value && parent?.document),
    },
    {
      name: "document",
      title: "Document",
      type: "reference",
      to: [{ type: "article" }],
      hidden: ({ parent, value }: CallbackArg) => !!(!value && parent?.url),
    },
  ],
};
