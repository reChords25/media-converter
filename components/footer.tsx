"use client";

import { translations } from "@/constants";
import { useLanguage } from "@/context/language-context";
import { Github } from "lucide-react";
import { Button } from "./ui/button";

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
        <a
          href="https://github.com/bellandry/media-converter"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
        >
          <Button
            className="bg-neutral-950 dark:bg-white rounded-full"
            size={"lg"}
          >
            <Github className="h-5 w-5" />
            Github Repo
          </Button>
        </a>
      </div>
    </footer>
  );
}
