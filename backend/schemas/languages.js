export default {
  name: "languages",
  title: "Languages",
  type: "document",
  fields: [
    {
      name: "language",
      title: "Language",
      type: "localeStr",
    },
    {
      name: "level",
      title: "Level",
      type: "string",
    },
    {
      name: "info",
      title: "Info",
      type: "localeStr",
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
