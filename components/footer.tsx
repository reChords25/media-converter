"use client";

import { translations } from "@/constants";
import { useLanguage } from "@/context/language-context";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-4 md:flex md:items-center md:justify-between lg:px-8">
        <p
          className="text-center text-sm leading-5 text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: t.footer.copyright }}
        />
      </div>
    </footer>
  );
}
