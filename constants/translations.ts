export type Language = "en" | "fr";

export const translations = {
  en: {
    navItems: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Privacy", href: "/privacy" },
    ],
    hero: {
      tagline: "Free & Unlimited File Conversions",
      description:
        "Building exceptional web experiences with TypeScript, React and Next.js. 5+ years of crafting modern, performant applications.",
      cta: "Get in Touch",
    },
    dropzone: {
      error: "Allowed Files: Audio, Video and Images.",
      uploading: "Uploading Files",
      convert: "Convert",
      converting: "Converting",
      converted: "Converted",
      download: "Download",
      download_all: "Download All",
      delete: "Delete",
      display: "Click, or drop your files here",
      is_hover: "Drop over to upload"
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Landry Bella. All rights reserved.`,
    },
  },
  fr: {
    navItems: [
      { name: "Accueil", href: "/" },
      { name: "A propos", href: "/about" },
      { name: "Confidentialité", href: "/privacy" },
    ],
    dropzone: {
      error: "Fichiers autorisés : Audio, Video et Images.",
      uploading: "Envoi en cours",
      convert: "Convertir",
      converting: "Conversion en cours",
      converted: "Converti",
      download: "Télécharger",
      download_all: "Tout télécharger",
      delete: "Supprimer",
      display: "Cliquez ou glissez vos fichiers ici",
      is_hover: "Déposer pour uploader"
    },
    hero: {
      tagline: "Convertissez Vos Fichiers gratuitement et Sans Simite",
      description:
        "Je crée des expériences web exceptionnelles avec TypeScript, React et Next.js. Plus de 5 ans d'expérience dans le développement d'applications modernes et performantes.",
      cta: "On se parle ?",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Landry Bella. Tous droits réservés.`,
    },
  },
};
