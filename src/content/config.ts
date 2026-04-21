import { defineCollection, reference, z } from 'astro:content';

const authors = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
		avatar: z.string().optional(),
		bio: z.string().optional(),
		twitter: z.string().optional(),
		github: z.string().optional(),
	}),
});

const blog = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.date(),
		author: reference('authors'),
		image: image().optional(), // Now supports astro:assets for processing
		imageAlt: z.string().optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

const research = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.date(),
		author: reference('authors'),
		tags: z.array(z.string()).default([]),
		image: z.string().optional(),
		imageAlt: z.string().optional(),
		doi: z.string().optional(),
		citation: z.string().optional(),
		draft: z.boolean().default(false),
	}),
});

const projects = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		status: z.enum(['Active', 'Classified', 'Public', 'Archived', 'In Development']),
		type: z.enum(['Internal Research', 'Community']),
		image: image().optional(),
		imageAlt: z.string().optional(),
		githubUrl: z.string().optional(),
		docsUrl: z.string().optional(),
		order: z.number().default(0),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog, research, authors, projects };
