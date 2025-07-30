"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
};

type Props = {
  posts: Post[];
  lang: string;
  dictionary: {
    view: string;
  };
};

export default function PostList({ posts, lang, dictionary }: Props) {
  const [readPosts, setReadPosts] = useState<number[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("readPosts");
    if (stored) {
      setReadPosts(JSON.parse(stored));
    }
  }, []);

  const markAsRead = (id: number) => {
    const updated = Array.from(new Set([...readPosts, id]));
    localStorage.setItem("readPosts", JSON.stringify(updated));
    setReadPosts(updated);
  };

  return (
    <ul>
      {posts.map((post) => {
        const isRead = readPosts.includes(post.id);
        return (
          <li key={post.id} className={isRead ? "read" : ""}>
            <strong>{post.title}</strong>
            <br />
            <Link
              href={`/${lang}/posts/${post.id}`}
              onClick={() => markAsRead(post.id)}
            >
              {dictionary.view}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
