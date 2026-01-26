import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			author: z.string().optional(),
			image: image(),
			url: z.string(),
			titleTag: z.string(),
			metaDescription: z.string(),
			category: z.enum(['brand', 'web', 'maintenance']),
		}),
});

export const collections = { blog };
