import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import { notFound } from "next/navigation";

type Post = {
  id: number;
  title: string;
  body: string;
};

export async function generateStaticParams() {
  // Статично будуємо сторінки для кожної мови і 10 постів
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    notFound();
  }
  const posts: Post[] = await res.json();

  const params = [];

  for (const lang of ["en", "uk"]) {
    for (const post of posts.slice(0, 10)) {
      params.push({ lang, id: post.id.toString() });
    }
  }

  return params;
}

export default async function PostPage(props: {
  params: Promise<{ lang: Locale; id: string }>;
}) {
  const { lang, id } = await props.params;
  const dictionary = await getDictionary(lang);

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Post not found");

  const post: Post = await res.json();

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>
        <a href={`/${lang}`}>{dictionary.posts.back}</a>
      </p>
    </article>
  );
}
