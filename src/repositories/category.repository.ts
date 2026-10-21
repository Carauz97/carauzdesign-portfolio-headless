import "server-only";
import { wpClient } from "@/lib/client";

import { CATEGORIES_QUERY } from "@/queries/categories";
import type { Category } from "@/lib/types";

export async function findAllCategories(): Promise<Category[]> {
  const data = await wpClient.request<{ categories: { nodes: Category[] } }>(
    CATEGORIES_QUERY,
  );
  return data.categories.nodes;
}
