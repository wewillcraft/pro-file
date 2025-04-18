import CMS from "lume/cms/mod.ts";

const cms = CMS();

cms.document({
  name: "Profile",
  description: "Edit the content of the user's professional profile",
  store: "src:index.yml",
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
    {
      name: "profile",
      type: "object",
      fields: [
        "name: text",
        "title: text",
        "summary: text",
        {
          name: "contact",
          type: "object-list",
          fields: [
            "icon: text",
            "icon_library: text",
            "icon_variant: text",
            "text: text",
            "link: text",
          ],
        },
      ],
    },
    {
      name: "sections",
      type: "choose-list",
      fields: [
        {
          name: "experience",
          type: "object",
          fields: [
            "title: text",
            {
              name: "items",
              type: "object-list",
              fields: [
                "role: text",
                "company: text",
                "location: text",
                "period: text",
                "description: text",
              ],
            },
          ],
        },
        {
          name: "education",
          type: "object",
          fields: [
            "title: text",
            {
              name: "items",
              type: "object-list",
              fields: [
                "degree: text",
                "school: text",
                "location: text",
                "period: text",
              ],
            },
          ],
        },
        {
          name: "skills",
          type: "object",
          fields: [
            "title: text",
            {
              name: "items",
              type: "list",
            },
          ],
        },
        {
          name: "projects",
          type: "object",
          fields: [
            "title: text",
            {
              name: "items",
              type: "object-list",
              fields: [
                "name: text",
                "url: text",
                "description: text",
              ],
            },
          ],
        },
        {
          name: "certifications",
          type: "object",
          fields: [
            "title: text",
            {
              name: "items",
              type: "object-list",
              fields: [
                "name: text",
                "year: text",
              ],
            },
          ],
        },
        {
          name: "languages",
          type: "object",
          fields: [
            "title: text",
            {
              name: "items",
              type: "object-list",
              fields: [
                "name: text",
                "level: text",
              ],
            },
          ],
        },
      ],
    },
  ],
});

export default cms;
