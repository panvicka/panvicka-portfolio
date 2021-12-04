export default {
  name: "languages",
  title: "Languages",
  type: "document",
  fields: [
    {
      name: "language",
      title: "Language",
      type: "string",
    },
    {
      name: "level",
      title: "Level",
      type: "string",
    },
    {
      name: "info",
      title: "Info",
      type: "string",
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
