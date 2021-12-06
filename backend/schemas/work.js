export default {
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "localeStr",
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "info",
      title: "Info",
      type: "localeStr",
    },
    {
      title: "Link",
      name: "link",
      type: "url",
    },
    {
      name: "workImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
