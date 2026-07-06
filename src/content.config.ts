import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string().default(""),
    category: z.enum(["code", "design", "writing", ""]).default(""),
    tags: z.array(z.string()).default([]),
    date: z.string().optional(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    metric: z.number().optional(),
    metricSuffix: z.string().default(""),
    metricPrefix: z.string().default(""),
    metricLabel: z.string().default(""),
    draft: z.boolean().default(true),
  }),
});

// Creative / academic projects → /projects
const creative = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/creative" }),
  schema: z.object({
    title: z.string().default(""),
    kind: z.string().default(""), // e.g. "AR / XR", "creative writing", "brand"
    tags: z.array(z.string()).default([]),
    date: z.string().optional(),
    pdf: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const story = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/story" }),
  schema: z.object({
    title: z.string().default(""),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, creative, story };
