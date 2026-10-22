import { getAllPosts, getPostBySlug } from "@/services/post.service";
import Link from "next/link";

const CurrentDate = new Date().toLocaleTimeString();
export default async function PostGrid() {
  console.log("Component rendered at:", CurrentDate);

  const posts = await getAllPosts();

  return (
    <div className="grid md:grid-cols-3 gap-2 mx-auto max-w-md overflow-hidden shadow-md md:max-w-4xl">
      {posts.map((post) => (
        <div
          key={post.id}
          className="rounded rounded-2xl p-4 border border-slate-700"
        >
          <Link key={post.id} href={`blog/${post.slug}`}>
            <h3 className="text-xl">{post.title}</h3>
          </Link>
          <div
            className="mt-6"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
        </div>
      ))}
    </div>
  );
}
