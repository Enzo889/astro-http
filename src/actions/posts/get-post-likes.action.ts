import { defineAction } from "astro:actions";
import { db, eq, Posts } from "astro:db";
import { z } from "astro:schema";

export const getPosts = async (postId: string) => {
  const posts = await db.select().from(Posts).where(eq(Posts.id, postId));

  if (posts.length === 0) {
    return { likes: 0, exists: false };
  }

  return { likes: posts.at(0)?.likes ?? 0, exists: true };
};

export const getPostLikes = defineAction({
  input: z.string(),
  handler: getPosts,
});
