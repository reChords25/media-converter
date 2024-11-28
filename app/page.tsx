"use client";

import Dropzone from "@/components/dropzone";
import { translations } from "@/constants";
import { useLanguage } from "@/context/language-context";
import GradientBackground from "@/components/gradient-background";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <>
      <GradientBackground />
      <div className="relative min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-semibold mb-6">
            {t.tagline}
            <br />
          </h1>
          <p className="text-md md:text-lg text-muted-foreground mb-8">
            {t.description}
          </p>
          <Dropzone />
        </div>
      </div>
    </>
  );
}
