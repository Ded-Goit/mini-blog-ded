// app/[lang]/components/Header.tsx
import Link from "next/link";
import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import LocaleSwitcher from "../locale-switcher";
import styles from "./Header.module.css";

export default async function Header({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={`/${lang}`}>{dict.navigation.home}</Link>
        <Link href={`/${lang}/about`}>{dict.navigation.about}</Link>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
