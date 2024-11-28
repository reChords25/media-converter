"use client";

import { translations } from "@/constants";
import { useLanguage } from "@/context/language-context";

export default function PrivacyPage() {
  const { language } = useLanguage();
  const t = translations[language].privacy;

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12 mt-2">
        <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
        <p className="text-sm text-muted-foreground">{t.lastUpdated}</p>
      </div>

      <div className="space-y-8">
        {t.content.map((section, index) => (
          <div
            key={index}
            className="prose prose-neutral dark:prose-invert max-w-none"
          >
            <h2 className="text-2xl font-semibold mb-4">{section.section}</h2>
            <p className="text-lg leading-relaxed">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
