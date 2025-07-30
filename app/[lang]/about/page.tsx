//app/[lang]/about/page.tsx
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <h1>{dictionary.about.title}</h1>
      <p>{dictionary.about.description}</p>

      <p>
        {dictionary.about.authorIntro}{" "}
        <a
          href="https://www.linkedin.com/in/andrii-ded-romanov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Andrii Romanov (a.k.a. DED)</strong>.
        </a>
      </p>

      <h2>{dictionary.about.clientTitle}</h2>
      <p>
        {dictionary.about.clientDescription}{" "}
        <a
          href="https://allmarathons-lp-ua.goit.global/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GoIT - Start your career in IT
        </a>
        .
      </p>
    </div>
  );
}
