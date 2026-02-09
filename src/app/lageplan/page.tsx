import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Lageplan",
  description: "So finden Sie uns — Pizzakurier Seetreff, Dorfstrasse 9, 8703 Erlenbach. Karte und Lieferzonen.",
};

export default function LageplanPage() {
  return (
    <>
      <PageHeader title="Lageplan" subtitle="So finden Sie uns" />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        {/* Map embed */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.8!2d8.5922!3d47.3047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa7e2a0b0c0c1%3A0x0!2sDorfstrasse%209%2C%208703%20Erlenbach!5e0!3m2!1sde!2sch!4v1"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Standort Seetreff Erlenbach"
            className="w-full"
          />
        </div>

        {/* Address */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Adresse</h2>
            <address className="mt-3 not-italic text-sm text-slate-600 dark:text-slate-400">
              <p>Pizzakurier Seetreff</p>
              <p>Dorfstrasse 9</p>
              <p>8703 Erlenbach</p>
              <p className="mt-2">
                <a href="tel:+41449912222" className="text-brand-600 hover:underline dark:text-brand-400">
                  T +41 44 991 22 22
                </a>
              </p>
              <p>F +41 44 400 91 75</p>
              <p>
                <a href="mailto:info@seetreff.ch" className="text-brand-600 hover:underline dark:text-brand-400">
                  info@seetreff.ch
                </a>
              </p>
            </address>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Lieferzonen</h2>
            <div className="mt-3 space-y-4 text-sm">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Zone 1 — ab CHF 20</p>
                <p className="text-slate-600 dark:text-slate-400">Erlenbach, Küsnacht, Herrliberg</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Zone 2 — ab CHF 30</p>
                <p className="text-slate-600 dark:text-slate-400">Zollikon, Küsnacht, Itschnach, Herrliberg, Wetzwil, Feldmeilen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
