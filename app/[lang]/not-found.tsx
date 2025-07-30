import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Link from "next/link";

export default async function NotFound({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  return (
    <main style={{ textAlign: "center", paddingTop: "4rem" }}>
      <h1>404 – {dict.notFound.title}</h1>
      <p>{dict.notFound.description}</p>
      <Link href={`/${lang}`} style={{ color: "var(--color-accent)" }}>
        {dict.notFound.backToHome}
      </Link>
    </main>
  );
}
