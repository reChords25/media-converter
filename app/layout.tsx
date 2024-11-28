import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/context/language-context";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Free Online Media Converter - Audio, Video & Image Conversion",
  description:
    "The ultimate online tool for converting audio, video, and images into high-quality files. Free, unlimited, and secure file conversions with just a few clicks.",
  keywords:
    "media converter, file converter, audio converter, video converter, image converter, online converter, free converter",
  authors: [{ name: "Landry Bella", url: "https://laclass.dev" }],
  creator: "Landry Bella",
  publisher: "Landry Bella",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mediaconverter.laclass.dev"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      fr: "/fr",
    },
  },
  openGraph: {
    title: "Free Online Media Converter - Audio, Video & Image Conversion",
    description:
      "Convert audio, video, and images into high-quality files instantly. Free and unlimited conversions.",
    url: "https://mediaconverter.laclass.dev",
    siteName: "Media Converter",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Media Converter - Free Online File Conversion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Media Converter - Audio, Video & Image Conversion",
    description:
      "Convert audio, video, and images into high-quality files instantly. Free and unlimited conversions.",
    images: ["/og-image.png"],
    creator: "@landrybella",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isFrench =
    typeof window !== "undefined" &&
    window.navigator.language.toLowerCase().startsWith("fr");
  const lang = isFrench ? "fr" : "en";

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            <Toaster expand={true} />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
