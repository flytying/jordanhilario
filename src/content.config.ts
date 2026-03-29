import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    songTitle: z.string(),
    artist: z.string(),
    youtubeId: z.string(),
    publishDate: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    tabUrl: z.string().url().optional(),
    duration: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { videos };
