"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../../i18n-config";
import styles from "./LocaleSwitcher.module.css";

export default function LocaleSwitcher({
  lang,
  label,
}: {
  lang: Locale;
  label: string;
}) {
  const pathname = usePathname();

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className={styles.switcher}>
      {label && <span className={styles.label}>{label}</span>}
      <ul className={styles.list}>
        {i18n.locales.map((locale) => (
          <li key={locale}>
            <Link
              className={`${styles.link} ${
                locale === lang ? styles.active : ""
              }`}
              href={redirectedPathname(locale)}
            >
              {locale}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
