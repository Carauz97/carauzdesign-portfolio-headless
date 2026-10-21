import "server-only";
import { cacheLife, cacheTag } from "next/cache";
import {
  findAllPosts,
  findPostBySlug,
  findPostCategories,
} from "@/repositories/post.repository";
import { Post } from "@/lib/types";

export async function getAllPosts(): Promise<Post[]> {
  return findAllPosts();
}

export async function getPostBySlug(slug: string) {
  return findPostBySlug(slug);
}

export async function getPostCategories(id: string) {
  return findPostCategories(id);
}
