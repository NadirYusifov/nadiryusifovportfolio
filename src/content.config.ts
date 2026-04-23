import { file } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const projects = defineCollection({
    loader: file("src/data/projects.json"),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        links: z.object({
            github: z.optional(z.string()),
            demo: z.optional(z.string()),
        }) 
    })
})

export const collections = {projects}