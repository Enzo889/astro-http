import { defineAction } from "astro:actions";
import { db, eq, Posts } from "astro:db";
import { z } from "astro:schema";
import { getPosts } from "./get-post-likes.action";

export const updatePostLikes = defineAction({
  input: z.object({
    postId: z.string(),
    increment: z.number(),
  }),
  handler: async ({ increment, postId }) => {
    try {
      const { exists, likes } = await getPosts(postId);
      if (!exists) {
        const newPost = {
          id: postId,
          title: "Post not found",
          likes: 0,
        };
        await db.insert(Posts).values(newPost);
      }
      await db
        .update(Posts)
        .set({ likes: likes + increment })
        .where(eq(Posts.id, postId));
      return true;
    } catch (error) {
      return false;
    }
  },
});
