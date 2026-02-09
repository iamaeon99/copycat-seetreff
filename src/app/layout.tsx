import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Seetreff Erlenbach — Pizzakurier & Döner Kebab",
    template: "%s | Seetreff Erlenbach",
  },
  description:
    "Pizzakurier und Döner Kebab in Erlenbach. Frische Pizza, Kebab, Snacks und mehr. Lieferung nach Erlenbach, Küsnacht, Herrliberg und Umgebung.",
  metadataBase: new URL("https://seetreff-copycat.vercel.app"),
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Seetreff Erlenbach",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('theme');
                const d = t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches);
                document.documentElement.classList.toggle('dark', d);
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-warm-50 text-stone-800 antialiased dark:bg-stone-950 dark:text-stone-200">
        <ThemeProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
