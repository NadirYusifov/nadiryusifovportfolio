import { z } from "astro/zod";
import { file, glob } from "astro/loaders";
import { defineCollection } from "astro:content";

const projectsOwn = defineCollection({
  // Nested `.json` documents -- Astro
  loader: file("src/data/projects.json", {
    parser: (project) => JSON.parse(project).projects,
  }),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    url: z.object({
      github: z.optional(z.string()),
      demo: z.optional(z.string()),
    }),
  }),
});

const experincesWork = defineCollection({
  loader: file("src/data/experiences.json", {
    parser: (experince) => JSON.parse(experince).experiences,
  }),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    date: z.object({
      startdate: z.string(),
      choice: z.object({
        discriminant: z.string(),
        value: z.string(),
      }),
    }),
    url: z.object({
      demo: z.optional(z.url()),
    }),
  }),
});

const socialMediaLinks = defineCollection({
  loader: file("src/data/socialMedia.json", {
    parser: (socialmedia) => JSON.parse(socialmedia).socialMedia,
  }),
  schema: z.object({
    id: z.number(),
    name: z.string(),
    link: z.url(),
  }),
});

const referancesContent = defineCollection({
  loader: glob({pattern: "referances.mdx", base: "src/content"}),
  schema: z.object({
    title: z.object({
      name: z.string(),
      slug: z.string()
    })
  }),
});

export const collections = { projectsOwn, experincesWork, socialMediaLinks, referancesContent };
