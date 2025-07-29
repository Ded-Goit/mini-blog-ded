//app/[lang]/page.tsx
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";

type Post = {
  id: number;
  title: string;
};

export default async function HomePage({
  params,
}: {
  params: { lang: Locale };
}) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return (
    <div>
      <h1>{dictionary.posts.title}</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            <strong>{post.title}</strong>
            <br />
            <a href={`/${lang}/posts/${post.id}`}>{dictionary.posts.view}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
