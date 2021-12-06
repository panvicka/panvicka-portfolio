export default {
    name: "about",
    title: "About",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "localeStr",
      },
      {
        name: "experience",
        title: "Experience",
        type: "number",
      },
      {
        name: "text",
        title: "Text",
        type: "localeStr",
      },
      {
        name: "aboutImage",
        title: "About image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
    ],
  };
  