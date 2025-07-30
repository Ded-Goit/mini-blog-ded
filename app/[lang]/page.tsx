//app/[lang]/page.tsx
import { getDictionary } from "../../get-dictionary";
import { i18n, Locale } from "../../i18n-config";
import Link from "next/link";
import PostList from "./components/PostList";

type Post = {
  id: number;
  title: string;
};

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export default async function HomePage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return (
    <div>
      <h1>{dictionary.posts.title}</h1>

      <PostList posts={posts} lang={lang} dictionary={dictionary.posts} />
    </div>
  );
}
