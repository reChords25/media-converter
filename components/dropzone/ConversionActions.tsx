"use client";

import { Button } from "@/components/ui/button";
import { DownloadCloud, Loader2 } from "lucide-react";
import { Action } from "./types";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/constants";

interface ConversionActionsProps {
  is_done: boolean;
  is_ready: boolean;
  is_converting: boolean;
  actions: Action[];
  onDownloadAll: () => void;
  onReset: () => void;
  onConvert: () => void;
}

export default function ConversionActions({
  is_done,
  is_ready,
  is_converting,
  actions,
  onDownloadAll,
  onReset,
  onConvert,
}: ConversionActionsProps) {
  const { language } = useLanguage();
  const t = translations[language].dropzone;
  
  return (
    <div className="flex w-full justify-end">
      {is_done ? (
        <div className="space-y-4 w-fit">
          <Button
            size="lg"
            className="rounded-xl font-semibold relative py-4 text-md flex gap-2 items-center w-full"
            onClick={onDownloadAll}
          >
            {actions.length > 1 ? t.download_all : t.download}
            <DownloadCloud />
          </Button>
          <Button
            size="lg"
            onClick={onReset}
            variant="outline"
            className="rounded-xl"
          >
            {t.convert_another}
          </Button>
        </div>
      ) : (
        <Button
          size="lg"
          disabled={!is_ready || is_converting}
          className="rounded-xl font-semibold relative py-4 text-md flex items-center w-44"
          onClick={onConvert}
        >
          {is_converting ? (
            <span className="animate-spin text-lg">
              <Loader2 className="animate-spin" />
            </span>
          ) : (
            <span>{t.convert}</span>
          )}
        </Button>
      )}
    </div>
  );
}
