import type { CollectionEntry } from "astro:content";

export type ArticleEntry = CollectionEntry<"articles">;
export type Article = ArticleEntry["data"];  // incluye title, excerpt, date, image, category, author

import { z, defineCollection } from 'astro:content';

// 🛒 Colección de productos
const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    price: z.number(),
    category: z.enum(["fitness", "nutricion", "salud-digital", "sueno"]),
    amazonLink: z.string().url().optional(),
  }),
});

// 📝 Colección de artículos
// const articlesCollection = defineCollection({
//   type: 'content',
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     date: z.date(),
//     image: z.string(),
//     category: z.enum(["fitness", "nutricion", "salud-digital", "sueno"]),
//     author: z.string().optional(),
//   }),
// });

export const collections = {
  products: productsCollection,
  // articles: articlesCollection,
};
