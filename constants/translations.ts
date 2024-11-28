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
        "The ultimate online tool for converting audio, video, and images into high-quality files. Experience the power of conversion with just a few clicks.",
      cta: "Get in Touch",
    },
    dropzone: {
      error: "Allowed Files: Audio, Video and Images.",
      uploading: "Uploading Files",
      convert: "Convert",
      converting: "Converting",
      converted: "Converted",
      convert_another: "Convert Another File(s)",
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
      convert_another: "Convertir d'autres fichiers",
      download: "Télécharger",
      download_all: "Tout télécharger",
      delete: "Supprimer",
      display: "Cliquez ou glissez vos fichiers ici",
      is_hover: "Déposer pour uploader"
    },
    hero: {
      tagline: "Convertissez Vos Fichiers gratuitement et Sans Simite",
      description:
        "L'outil en ligne ultime pour convertir des fichiers audio, vidéo et images en fichiers de haute qualité. Profitez de la puissance de la conversion en quelques clics.",
      cta: "On se parle ?",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Landry Bella. Tous droits réservés.`,
    },
  },
};
