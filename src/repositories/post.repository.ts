import "server-only";
import { wpClient } from "@/lib/client";
import { cacheLife, cacheTag } from "next/cache";
import {
  POSTS_QUERY,
  POST_BY_SLUG_QUERY,
  POST_CATEGORIES,
} from "@/queries/posts";
import type { Category, Post } from "@/lib/types";

export async function findAllPosts(): Promise<Post[]> {
  "use cache";
  cacheLife("wordpress");
  cacheTag("posts");
  const data = await wpClient.request<{ posts: { nodes: Post[] } }>(
    POSTS_QUERY,
  );
  return data.posts.nodes;
}
export async function findPostBySlug(slug: string): Promise<Post | null> {
  /*"use cache";
  cacheLife("wordpress");
  cacheTag("posts", `post-${slug}`);*/
  const data = await wpClient.request<{ post: Post | null }>(
    POST_BY_SLUG_QUERY,
    { slug },
  );
  return data.post;
}

export async function findPostCategories(id: string): Promise<Category[]> {
  const data = await wpClient.request<{ categories: { nodes: Category[] } }>(
    POST_CATEGORIES,
    { id },
  );
  return data.categories.nodes;
}
