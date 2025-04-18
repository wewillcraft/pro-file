import CMS from "lume/cms/mod.ts";

const cms = CMS();

cms.document({
  name: "Site settings",
  description: "Edit the settings for the site",
  store: "src:_data.yml",
  fields: [
    {
      name: "site",
      type: "object",
      fields: [
        "lang: text",
        "title: text",
        "description: text",
      ],
    },
  ],
});

cms.document({
  name: "Profile",
  description: "Edit the content of the user's professional profile",
  store: "src:index.yml",
  fields: [],
});

export default cms;