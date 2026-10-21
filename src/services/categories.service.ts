// services/categories.service.ts
import { cacheLife, cacheTag } from "next/cache";
import { findAllCategories } from "@/repositories/category.repository";

export async function getAllCategories() {
  "use cache";
  cacheLife("hours");
  cacheTag("categories");

  return findAllCategories();
}
