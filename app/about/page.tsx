"use client";

import { translations } from "@/constants";
import { useLanguage } from "@/context/language-context";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12 mt-2">
        <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
        <p className="text-xl text-muted-foreground">{t.description}</p>
      </div>

      <div className="space-y-8">
        {t.content.map((paragraph, index) => (
          <p key={index} className="text-lg leading-relaxed">
            {paragraph}
          </p>
        ))}

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 p-4 rounded-lg border bg-card text-card-foreground shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-green-500 flex-shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
