import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const today = defineCollection({
  loader: glob({ pattern: "today.yaml", base: "./src/content/schedule" }),
  schema: z.object({
    day: z.string(),
    location: z.string(),
    address: z.string(),
    open: z.string(),
    close: z.string(),
    note: z.string(),
    maps_url: z.string(),
  }),
});

const weekly = defineCollection({
  loader: glob({ pattern: "weekly.yaml", base: "./src/content/schedule" }),
  schema: z.object({
    days: z.array(
      z.object({
        day: z.string(),
        location: z.string(),
        area: z.string(),
        hours: z.string(),
      }),
    ),
  }),
});

export const collections = { today, weekly };
