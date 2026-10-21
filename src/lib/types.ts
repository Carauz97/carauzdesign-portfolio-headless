export type Category = {
  id: string;
  name: string;
  slug: string;
  uri: string;
};

export type FeaturedImage = {
  node: {
    sourceUrl: string;
    srcSet: string | null;
    altText: string | null;
  };
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  date: string;
  content: string;
  excerpt: string;
  status: "publish" | "draft" | "pending" | "private" | "future";
  featuredImage: FeaturedImage | null;
};
