"use client";

import { useLanguage } from "@/context/language-context";
import { translations } from "@/constants";
import Link from "next/link";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {t.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm leading-6 text-muted-foreground hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-muted-foreground">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
