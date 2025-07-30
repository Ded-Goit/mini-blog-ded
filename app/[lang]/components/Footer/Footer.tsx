import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import styles from "./Footer.module.css";

export default async function Footer({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()}{" "}
      <a
        href="https://github.com/Ded-Goit"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        {dict.footer.credit}
      </a>
    </footer>
  );
}
