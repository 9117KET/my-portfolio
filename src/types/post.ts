// PostType defines the allowed kinds of posts in the blog.
// Using a union instead of plain string gives us better type safety:
// TypeScript will now complain if we try to assign anything other than
// one of these exact values.
export type PostType = "Blog" | "Podcast";

// Post models a single blog entry / article / podcast item.
// Keeping this type narrow and explicit helps the rest of the app
// work with strongly-typed data (e.g. filters, rendering, SEO).
export type Post = {
  type: PostType;
  id: string;
  title: string;
  date: string;
  content: string;
  category: string;
  description: string;
};
