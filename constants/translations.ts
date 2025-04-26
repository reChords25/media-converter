export type Language = "en" | "fr" | "de";

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
      is_hover: "Drop over to upload",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} made with ❤️ by <a href="https://laclass.dev" target="_blank" rel="noopener noreferrer">Landry Bella</a>.`,
    },
    about: {
      title: "About Media Converter",
      description: "Your trusted online file conversion tool",
      content: [
        "Welcome to Media Converter, your go-to solution for all your file conversion needs. We've created this platform with simplicity and efficiency in mind, making it easy for anyone to convert their files without any technical expertise.",
        "Our service supports a wide range of formats including audio, video, and image files. Whether you're a content creator, professional, or just someone who needs to convert files occasionally, we've got you covered.",
        "What sets us apart is our commitment to providing a completely free, unlimited, and secure service. Your files are processed entirely in your browser, ensuring maximum privacy and security.",
      ],
      features: [
        "Free and unlimited conversions",
        "Browser-based processing for security",
        "Support for multiple file formats",
        "No registration required",
        "Fast and efficient conversion",
      ],
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: November 20, 2024",
      content: [
        {
          section: "Introduction",
          text: "At Media Converter, we take your privacy seriously. This Privacy Policy explains how we handle your data when you use our service.",
        },
        {
          section: "Data Collection",
          text: "We do not store any of your files or converted media. All file processing happens directly in your browser, and no data is sent to our servers.",
        },
        {
          section: "Browser Processing",
          text: "Your files are processed entirely within your web browser. This means your files never leave your device during the conversion process.",
        },
        {
          section: "Analytics",
          text: "We use anonymous analytics to improve our service. This data cannot be used to identify individual users.",
        },
        {
          section: "Cookies",
          text: "We use essential cookies to ensure the proper functioning of our website. No tracking or advertising cookies are used.",
        },
        {
          section: "Contact",
          text: "If you have any questions about our privacy policy, please contact us.",
        },
      ],
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
      is_hover: "Déposer pour uploader",
    },
    hero: {
      tagline: "Convertissez Vos Fichiers gratuitement et Sans Limite",
      description:
        "L'outil en ligne ultime pour convertir des fichiers audios, vidéos et images en fichiers de haute qualité. Profitez de la puissance de la conversion en quelques clics.",
      cta: "On se parle ?",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} fait avec ❤️ par <a href="https://laclass.dev" target="_blank" rel="noopener noreferrer">Landry Bella</a>.`,
    },
    about: {
      title: "À propos de Media Converter",
      description: "Votre outil de conversion de fichiers de confiance",
      content: [
        "Bienvenue sur Media Converter, votre solution idéale pour tous vos besoins de conversion de fichiers. Nous avons créé cette plateforme en pensant à la simplicité et à l'efficacité, permettant à chacun de convertir ses fichiers sans expertise technique.",
        "Notre service prend en charge une large gamme de formats, notamment les fichiers audio, vidéo et image. Que vous soyez créateur de contenu, professionnel ou simplement quelqu'un qui a besoin de convertir des fichiers occasionnellement, nous avons ce qu'il vous faut.",
        "Ce qui nous distingue, c'est notre engagement à fournir un service totalement gratuit, illimité et sécurisé. Vos fichiers sont traités entièrement dans votre navigateur, garantissant une confidentialité et une sécurité maximales.",
      ],
      features: [
        "Conversions gratuites et illimitées",
        "Traitement dans le navigateur pour la sécurité",
        "Prise en charge de plusieurs formats de fichiers",
        "Aucune inscription requise",
        "Conversion rapide et efficace",
      ],
    },
    privacy: {
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour : 20 Novembre 2024",
      content: [
        {
          section: "Introduction",
          text: "Chez Media Converter, nous prenons votre confidentialité au sérieux. Cette politique de confidentialité explique comment nous gérons vos données lorsque vous utilisez notre service.",
        },
        {
          section: "Collecte de Données",
          text: "Nous ne stockons aucun de vos fichiers ou médias convertis. Tout le traitement des fichiers se fait directement dans votre navigateur, et aucune donnée n'est envoyée à nos serveurs.",
        },
        {
          section: "Traitement dans le Navigateur",
          text: "Vos fichiers sont traités entièrement dans votre navigateur web. Cela signifie que vos fichiers ne quittent jamais votre appareil pendant le processus de conversion.",
        },
        {
          section: "Analytique",
          text: "Nous utilisons des analyses anonymes pour améliorer notre service. Ces données ne peuvent pas être utilisées pour identifier des utilisateurs individuels.",
        },
        {
          section: "Cookies",
          text: "Nous utilisons des cookies essentiels pour assurer le bon fonctionnement de notre site web. Aucun cookie de suivi ou de publicité n'est utilisé.",
        },
        {
          section: "Contact",
          text: "Si vous avez des questions sur notre politique de confidentialité, n'hésitez pas à nous contacter.",
        },
      ],
    },
  },
  de: {
    navItems: [
      { name: "Start", href: "/" },
      { name: "Über uns", href: "/about" },
      { name: "Datenschutz", href: "/privacy" },
    ],
    hero: {
      tagline: "Kostenlose und nbegrenzte Dateikonvertierung",
      description:
        "Das ultimative Tool zum Konvertieren von Mediendateien in höchster Qualität. Probier' es gleich aus und erlebe die Macht des Konvertierens im Handumdrehen.",
      cta: "Kontakt",
    },
    dropzone: {
      error: "Erlaubte Dateien: Audio, Video und Bilder.",
      uploading: "Dateien werden hochgeladen",
      convert: "Konvertieren",
      converting: "Konvertiere",
      converted: "Konvertiert",
      convert_another: "Weitere Datei(en) konvertieren",
      download: "Herunterladen",
      download_all: "Alle herunterladen",
      delete: "Löschen",
      display: "Klicke hier oder ziehe deine Dateien per drag'n'drop hierher",
      is_hover: "Zum Hochladen loslassen",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} mit ❤️ erstellt von <a href="https://laclass.dev" target="_blank" rel="noopener noreferrer">Landry Bella</a>.`,
    },
    about: {
      title: "Über Media Converter",
      description: "Der Online-Dateikonverter deines Vertrauens",
      content: [
        "Herzlich Willkommen bei Media Converter, deiner Lösung für jede Dateikonvertierung. Wir haben diese Seite mit dem Gedanken erstellt, eine einfache und effiziente Plattform zum Konvertieren für jeden anzubieten - auch ohne technische Vorkenntnisse.",
        "Media Converter unterstützt viele Dateiformate, unter anderem Audio-, Video- und Bilddateien. Egal ob du Content Creator, Medienprofi oder Hobbyist bist, hier bist du auf jeden Fall richtig.",
        "Was macht uns besonders? Unser Service ist vollständig kostenlos, unbegrenzt nutzbar und so sicher wie möglich. Deine Dateien werden ausschließlich auf deinem Gerät verarbeitet - mehr Privatsphäre geht nicht.",
      ],
      features: [
        "Kostenloses und unbegrenztes Konvertieren",
        "Browserbasierte Verarbeitung für maximale Sicherheit",
        "Unterstützung der meisten Dateiformate",
        "Ohne Registrierung oder Account",
        "Schnelles und Effizientes Konvertieren",
      ],
    },
    privacy: {
      title: "Datenschutz",
      lastUpdated: "Zuletzt geändert: 20. November 2024",
      content: [
        {
          section: "Einleitung",
          text: "At Media Converter, we take your privacy seriously. This Privacy Policy explains how we handle your data when you use our service.",
        },
        {
          section: "Datennutzung",
          text: "Wir speichern keine deiner Medieninhalte. Die gesamte Verarbeitung passiert alleine auf deinem Endgerät, unsere Server erreichen keine deiner Daten.",
        },
        {
          section: "Browserbasierte Verarbeitung",
          text: "Deine Dateien werden direkt im Browser verarbeitet. Sie verlassen dein Gerät während des gesamten Prozesses nicht, nicht einmal den Browser selbst.",
        },
        {
          section: "Analytics",
          text: "Wir sammeln bestimmte, nicht-personenbezogene Daten, um unseren Dienst verbessern zu können. Dadurch kann unmöglich eine Person identifiziert werden.",
        },
        {
          section: "Cookies",
          text: "Wir nutzen Cookies, damit unser Dienst mit allen Funktionen verfügbar ist. Sie werden nicht zu Marketingzwecken oder zum Tracking verwendet.",
        },
        {
          section: "Kontakt",
          text: "Wenn du noch Fragen bezüglich des Datenschutzes hast, kontaktiere uns gerne.",
        },
      ],
    },
  },
};
