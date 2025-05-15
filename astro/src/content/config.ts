// astro/src/content/config.ts
import { defineCollection, z } from 'astro:content';

// コンテンツコレクションの定義
const newsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string().optional(),
    featured: z.boolean().optional(),
    // textフィールドを必須から任意に変更
    text: z.string().optional(),
  }),
});

export const collections = {
  // blogではなくnewsに変更
  news: newsCollection,
};
