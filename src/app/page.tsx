import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seetreff Erlenbach — Pizzakurier & Döner Kebab",
  description:
    "Frische Pizza, Döner Kebab und mehr. Lieferung nach Erlenbach, Küsnacht, Herrliberg und Umgebung. Bestellen Sie jetzt!",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900 px-4 py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Pizza &amp; Kebab
            <span className="block text-brand-400">frisch geliefert</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Ihr Pizzakurier in Erlenbach — Frische Pizza, Döner Kebab, Snacks und mehr.
            Lieferung an die Goldküste von Zürich.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/pizza"
              className="inline-flex items-center rounded-full bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              🍕 Pizzakarte ansehen
            </Link>
            <a
              href="tel:+41449912222"
              className="inline-flex items-center rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              📞 +41 44 991 22 22
            </a>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Opening Hours */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Öffnungszeiten Imbiss</h2>
            <dl className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex justify-between">
                <dt>Montag bis Sonntag</dt>
                <dd className="font-medium text-slate-900 dark:text-white">11:00–21:00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Allgemeine Feiertage</dt>
                <dd className="font-medium text-slate-900 dark:text-white">11:00–21:00</dd>
              </div>
            </dl>
          </div>

          {/* Delivery Hours */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-100 text-accent-600 dark:bg-accent-900/30 dark:text-accent-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Kurier Lieferzeiten</h2>
            <dl className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex justify-between">
                <dt>Montag bis Samstag</dt>
                <dd className="font-medium text-slate-900 dark:text-white">17:00–21:00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Sonntag &amp; Feiertage</dt>
                <dd className="font-medium text-slate-900 dark:text-white">15:00–21:00</dd>
              </div>
            </dl>
          </div>

          {/* Contact */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2 lg:col-span-1 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Adresse</h2>
            <address className="mt-3 not-italic text-sm text-slate-600 dark:text-slate-400">
              <p>Pizzakurier Seetreff</p>
              <p>Dorfstrasse 9, 8703 Erlenbach</p>
              <p className="mt-2">
                <a href="tel:+41449912222" className="text-brand-600 hover:underline dark:text-brand-400">
                  +41 44 991 22 22
                </a>
              </p>
              <p>
                <a href="mailto:info@seetreff.ch" className="text-brand-600 hover:underline dark:text-brand-400">
                  info@seetreff.ch
                </a>
              </p>
            </address>
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="bg-slate-50 px-4 py-16 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 dark:text-white">Lieferzonen</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border-2 border-brand-200 bg-white p-6 dark:border-brand-800 dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Lieferzone 1</h3>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                  ab CHF 20
                </span>
              </div>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Erlenbach, Küsnacht, Herrliberg
              </p>
            </div>
            <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Lieferzone 2</h3>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  ab CHF 30
                </span>
              </div>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Zollikon, Küsnacht, Itschnach, Herrliberg, Wetzwil, Feldmeilen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Menu Links */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 dark:text-white">Unsere Karte</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { href: '/pizza', label: 'Pizza', emoji: '🍕', desc: '30 Sorten ab CHF 14' },
            { href: '/snacks', label: 'Snacks', emoji: '🥙', desc: 'Kebab, Pide & mehr' },
            { href: '/getraenke', label: 'Getränke', emoji: '🥤', desc: 'Soft Drinks, Bier, Wein' },
            { href: '/lageplan', label: 'Lageplan', emoji: '📍', desc: 'So finden Sie uns' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:border-brand-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700"
            >
              <span className="text-4xl">{item.emoji}</span>
              <h3 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
                {item.label}
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Pizzakurier Seetreff Erlenbach",
            description: "Pizzakurier und Döner Kebab in Erlenbach",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Dorfstrasse 9",
              addressLocality: "Erlenbach",
              postalCode: "8703",
              addressCountry: "CH",
            },
            telephone: "+41449912222",
            email: "info@seetreff.ch",
            servesCuisine: ["Pizza", "Kebab", "Türkisch"],
            openingHours: ["Mo-Su 11:00-21:00"],
            priceRange: "CHF 7-24",
          }),
        }}
      />
    </>
  );
}
