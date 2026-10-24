import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import Navbar from "@/components/layout/navbar";
import PostGrid from "@/components/blog/PostGrid";
import { getAllCategories } from "@/services/categories.service";
import HeroBar from "@/components/layout/herobar";
import { MetadataBoundary } from "next/dist/lib/framework/boundary-components";

const pageTitle = "Blog";
export const metadata: Metadata = {
  title: pageTitle,
  description: "Artículos sobre programación y diseño gráfico.",
};

const contentWidth = "mx-auto w-full max-w-4xl";
const panel =
  "rounded-xl border border-border bg-surface shadow-lg shadow-black/20";

export default function Blog() {
  return (
    <>
      <Navbar />

      <HeroBar title={pageTitle} />

      <main className="px-4 py-8">
        <div className={`${contentWidth} space-y-6`}>
          <div className="grid gap-6 md:grid-cols-[10rem_1fr]">
            <aside
              aria-labelledby="categorias-titulo"
              className={`${panel} p-4`}
            >
              {/* El contenido interno es el que se queda fijo al hacer scroll */}
              <div className="md:sticky md:top-20">
                <h2
                  id="categorias-titulo"
                  className="text-sm font-semibold uppercase tracking-wider text-accent"
                >
                  Categorías
                </h2>
                <Suspense fallback={<CategoriesSkeleton />}>
                  <CategoryList />
                </Suspense>
              </div>
            </aside>

            <section aria-label="Artículos" className="@container min-w-0">
              <Suspense fallback={<PostsSkeleton />}>
                <PostGrid />
              </Suspense>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

async function CategoryList() {
  const categories = await getAllCategories();

  if (categories.length === 0) {
    return <p className="mt-3 text-sm text-muted">Aún no hay categorías.</p>;
  }

  return (
    <ul className="mt-3 flex flex-wrap gap-2 md:flex-col md:gap-1">
      {categories.map((category) => (
        <li key={category.id}>
          <Link
            href={category.uri}
            className="block rounded-lg border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent md:border-transparent md:hover:border-transparent md:hover:bg-surface-hover"
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function CategoriesSkeleton() {
  return (
    <div
      className="mt-3 flex animate-pulse flex-wrap gap-2 md:flex-col md:gap-1"
      aria-hidden="true"
    >
      {[24, 32, 20, 28].map((w, i) => (
        <div
          key={i}
          className="h-8 rounded-lg bg-surface-hover"
          style={{ width: `${w * 4}px` }}
        />
      ))}
    </div>
  );
}

function PostsSkeleton() {
  return (
    <div
      className="grid animate-pulse grid-cols-1 gap-4 @md:grid-cols-2 @xl:grid-cols-3"
      aria-hidden="true"
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-64 rounded-xl border border-border bg-surface"
        />
      ))}
    </div>
  );
}
