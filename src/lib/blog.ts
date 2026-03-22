import { getCollection } from "astro:content";

export async function getBlogPosts() {
  try {
    const posts = await getCollection(
      "blog",
      ({ data }: { data: { draft: boolean } }) => !data.draft,
    );
    return posts;
  } catch {
    return [];
  }
}
