import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 px-4 py-20 text-white sm:py-28">
        <Image
          src="/images/pizza-hero.jpg"
          alt="Frische Pizza"
          fill
          className="object-cover opacity-20"
          priority
        />
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
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-stone-900 dark:text-white">Öffnungszeiten Imbiss</h2>
            <dl className="mt-3 space-y-1 text-sm text-stone-600 dark:text-stone-400">
              <div className="flex justify-between">
                <dt>Montag bis Sonntag</dt>
                <dd className="font-medium text-stone-900 dark:text-white">11:00–21:00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Allgemeine Feiertage</dt>
                <dd className="font-medium text-stone-900 dark:text-white">11:00–21:00</dd>
              </div>
            </dl>
          </div>

          {/* Delivery Hours */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-100 text-accent-600 dark:bg-accent-900/30 dark:text-accent-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-stone-900 dark:text-white">Kurier Lieferzeiten</h2>
            <dl className="mt-3 space-y-1 text-sm text-stone-600 dark:text-stone-400">
              <div className="flex justify-between">
                <dt>Montag bis Samstag</dt>
                <dd className="font-medium text-stone-900 dark:text-white">17:00–21:00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Sonntag &amp; Feiertage</dt>
                <dd className="font-medium text-stone-900 dark:text-white">15:00–21:00</dd>
              </div>
            </dl>
          </div>

          {/* Contact */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2 lg:col-span-1 dark:border-stone-800 dark:bg-stone-900">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-stone-900 dark:text-white">Adresse</h2>
            <address className="mt-3 not-italic text-sm text-stone-600 dark:text-stone-400">
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
      <section className="bg-warm-100 px-4 py-16 dark:bg-stone-900/50">
        <div className="mx-auto max-w-6xl sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-stone-900 dark:text-white">Lieferzonen</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border-2 border-brand-200 bg-white p-6 dark:border-brand-800 dark:bg-stone-900">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-stone-900 dark:text-white">Lieferzone 1</h3>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700 dark:bg-brand-900/30 dark:text-brand-400">
                  ab CHF 20
                </span>
              </div>
              <p className="mt-2 text-stone-600 dark:text-stone-400">
                Erlenbach, Küsnacht, Herrliberg
              </p>
            </div>
            <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-stone-900 dark:text-white">Lieferzone 2</h3>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700 dark:bg-stone-800 dark:text-stone-300">
                  ab CHF 30
                </span>
              </div>
              <p className="mt-2 text-stone-600 dark:text-stone-400">
                Zollikon, Küsnacht, Itschnach, Herrliberg, Wetzwil, Feldmeilen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Food Gallery */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="mb-8 text-center text-2xl font-bold text-stone-900 dark:text-white">Frisch aus unserer Küche</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/pizza-hero.jpg" alt="Frische Pizza aus dem Ofen" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-lg font-bold text-white">Unsere Pizzen</p>
          </div>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/kebab.jpg" alt="Döner Kebab" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-lg font-bold text-white">Kebab & Pide</p>
          </div>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/salad.jpg" alt="Frischer Salat" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-lg font-bold text-white">Salate & Bowls</p>
          </div>
        </div>
      </section>

      {/* Restaurant */}
      <section className="bg-warm-100 px-4 py-16 dark:bg-stone-800/50">
        <div className="mx-auto max-w-6xl sm:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image src="/images/restaurant.jpg" alt="Restaurant Seetreff" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-stone-900 dark:text-white">Willkommen im Seetreff</h2>
              <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
                Seit Jahren Ihr Treffpunkt für frische Pizza und Kebab an der Goldküste.
                Ob vor Ort geniessen oder bequem nach Hause liefern lassen — bei uns
                wird alles frisch zubereitet.
              </p>
              <div className="mt-6">
                <a
                  href="tel:+41449912222"
                  className="inline-flex items-center rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-700"
                >
                  📞 Jetzt bestellen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Menu Links */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="mb-8 text-center text-2xl font-bold text-stone-900 dark:text-white">Unsere Karte</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { href: '/pizza', label: 'Pizza', img: '/images/pizza-hero.jpg', desc: '30 Sorten ab CHF 14' },
            { href: '/snacks', label: 'Snacks', img: '/images/kebab.jpg', desc: 'Kebab, Pide & mehr' },
            { href: '/getraenke', label: 'Getränke', img: '/images/drinks.jpg', desc: 'Soft Drinks, Bier, Wein' },
            { href: '/lageplan', label: 'Lageplan', img: '/images/restaurant.jpg', desc: 'So finden Sie uns' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-brand-300 hover:shadow-md dark:border-stone-800 dark:hover:border-brand-700"
            >
              <div className="relative aspect-[4/3]">
                <Image src={item.img} alt={item.label} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 p-4">
                <h3 className="text-lg font-bold text-white">{item.label}</h3>
                <p className="text-sm text-slate-200">{item.desc}</p>
              </div>
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
