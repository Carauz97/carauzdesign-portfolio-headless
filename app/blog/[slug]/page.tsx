import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Navbar from "@/components/layout/navbar";
import { getPostBySlug, getAllPosts } from "@/services/post.service";

type Props = { params: Promise<{ slug: string }> };

const card =
  "mx-auto my-8 w-full max-w-4xl rounded-xl border border-border bg-surface p-6 shadow-lg shadow-black/20 md:p-10";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Artículo no encontrado" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      images: post.featuredImage?.node.sourceUrl
        ? [post.featuredImage.node.sourceUrl]
        : [],
    },
  };
}

export default function PostPage({ params }: Props) {
  return (
    <>
      <Navbar />
      <main className="px-4">
        <Suspense fallback={<PostSkeleton />}>
          <PostContent params={params} />
        </Suspense>
      </main>
    </>
  );
}

async function PostContent({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const date = new Date(post.date).toLocaleDateString("es", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className={card}>
      <Link
        href="/blog"
        className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
      >
        ← Volver al blog
      </Link>

      {/* Categorías (reactivar cuando estén disponibles)
      {post.categories.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.categories.map((category) => (
            <Link
              key={category.id}
              href={category.uri}
              className="rounded-full border border-border bg-surface-hover px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {category.name}
            </Link>
          ))}
        </div>
      )}
      */}

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
        {post.title}
      </h1>

      <time dateTime={post.date} className="mt-3 block text-sm text-muted">
        {date}
      </time>

      {post.featuredImage?.node.sourceUrl && (
        <Image
          src={post.featuredImage.node.sourceUrl}
          alt={post.featuredImage.node.altText || post.title}
          width={1200}
          height={630}
          priority
          sizes="(min-width: 768px) 896px, 100vw"
          className="mt-8 h-auto w-full rounded-xl border border-border"
        />
      )}

      <div
        className="prose prose-invert mt-8 max-w-none
          prose-headings:text-foreground prose-h2:text-accent
          prose-p:text-foreground/90 prose-strong:text-foreground
          prose-a:text-accent prose-a:no-underline hover:prose-a:text-accent-hover hover:prose-a:underline
          prose-blockquote:border-accent prose-hr:border-border
          prose-code:text-primary prose-img:h-auto prose-img:rounded-xl"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}

function PostSkeleton() {
  return (
    <div className={`${card} animate-pulse`} aria-hidden="true">
      <div className="h-4 w-24 rounded bg-surface-hover" />
      <div className="mt-6 h-10 w-3/4 rounded bg-surface-hover" />
      <div className="mt-3 h-4 w-32 rounded bg-surface-hover" />
      <div className="mt-8 h-64 rounded-xl bg-surface-hover" />
      <div className="mt-8 space-y-3">
        <div className="h-4 rounded bg-surface-hover" />
        <div className="h-4 rounded bg-surface-hover" />
        <div className="h-4 w-5/6 rounded bg-surface-hover" />
      </div>
    </div>
  );
}
