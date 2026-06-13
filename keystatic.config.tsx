import { config, fields, singleton } from "@keystatic/core";
import { REPO_OWNER, REPO_NAME } from "astro:env/client";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: `${REPO_OWNER}`,
      name: `${REPO_NAME}`,
    },
  },
  ui: {
    brand: {
      name: '"Nadir Yusifov" UI Admin',
      mark: () => {
        let path = "src/assets/logo.png";
        return <img src={path} alt="NY logo" width={24} height={24} />;
      },
    },
    navigation: {
      Main: ["projects", "experiences"],
      "Other Link": ["referances"],
      "Social Media": ["socialmedia"],
    },
  },
  singletons: {
    // Projects
    projects: singleton({
      label: "Projects",
      path: "src/data/projects",
      format: { data: "json" },
      schema: {
        projects: fields.array(
          fields.object({
            id: fields.integer({
              label: "ID",
              defaultValue: 1,
              validation: { isRequired: true, min: 1 },
            }),
            title: fields.text({
              label: "Project name",
              validation: { isRequired: true },
            }),
            description: fields.text({
              label: "Description",
              multiline: true,
              validation: { isRequired: true },
            }),
            url: fields.object({
              github: fields.url({ label: "GitHub" }),
              demo: fields.url({ label: "Demo" }),
            }),
          }),
        ),
      },
    }),
    // Experience
    experiences: singleton({
      label: "Experience",
      path: "src/data/experiences",
      format: { data: "json" },
      schema: {
        experiences: fields.array(
          fields.object({
            id: fields.integer({
              label: "ID",
              defaultValue: 1,
              validation: { isRequired: true, min: 1 },
            }),
            title: fields.text({
              label: "Experience Name",
              validation: { isRequired: true },
            }),
            description: fields.text({
              label: "Description",
              multiline: true,
            }),
            date: fields.object({
              startdate: fields.date({
                label: "Start Date",
                validation: { isRequired: true },
              }),
              choice: fields.conditional(
                // Select
                fields.select({
                  label: "End or countine?",
                  options: [
                    { label: "End date", value: "enddate" },
                    { label: "Countine", value: "countine" },
                  ],
                  defaultValue: "enddate",
                }),

                {
                  enddate: fields.date({
                    label: "End date",
                    validation: { isRequired: true },
                  }),
                  countine: fields.text({
                    label: "Countine",
                    validation: { isRequired: true },
                  }),
                },
              ),
            }),
            url: fields.object({
              demo: fields.url({ label: "Demo" }),
            }),
          }),
        ),
      },
    }),
    // Referances
    referances: singleton({
      label: "Referances",
      path: "src/content/referances",
      format: { contentField: "referances" },
      schema: {
        referances: fields.mdx({
          label: "Rich text",
          extension: "mdx",
        }),
        title: fields.slug({ name: { label: "Title" } }),
      },
    }),
    // Social media
    socialmedia: singleton({
      label: "Social Media",
      path: "src/data/socialMedia",
      format: { data: "json" },
      schema: {
        socialMedia: fields.array(
          fields.object({
            id: fields.integer({
              label: "ID",
              defaultValue: 1,
              validation: { isRequired: true, min: 1 },
            }),
            name: fields.text({
              label: "Name",
              validation: { isRequired: true },
            }),
            link: fields.url({
              label: "Link",
              validation: { isRequired: true },
              defaultValue: "https://example.com/",
            }),
          }),
        ),
      },
    }),
  },
});
