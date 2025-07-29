//app/[lang]/layout.tsx
import { type Locale } from "../../i18n-config";
import "../../app/[lang]/globals.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "i18n within app router - Vercel Examples",
  description: "How to do i18n in Next.js 15 within app router",
};

export default async function Root(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  return (
    <html lang={lang}>
      <body>
        <Header lang={lang} />
        <main>{props.children}</main>
        <Footer />
      </body>
    </html>
  );
}
