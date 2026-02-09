import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">Kontakt</h3>
            <address className="not-italic text-sm leading-relaxed">
              <p>Pizzakurier Seetreff</p>
              <p>Dorfstrasse 9</p>
              <p>8703 Erlenbach</p>
              <p className="mt-2">
                <a href="tel:+41449912222" className="hover:text-white transition-colors">T +41 44 991 22 22</a>
              </p>
              <p>
                <a href="mailto:info@seetreff.ch" className="hover:text-white transition-colors">info@seetreff.ch</a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">Öffnungszeiten</h3>
            <div className="text-sm leading-relaxed">
              <p className="font-medium text-slate-300">Imbiss</p>
              <p>Mo–So 11:00–21:00</p>
              <p className="mt-2 font-medium text-slate-300">Kurier</p>
              <p>Mo–Sa 17:00–21:00</p>
              <p>So & Feiertage 15:00–21:00</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">Navigation</h3>
            <ul className="space-y-1 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/pizza', label: 'Pizza' },
                { href: '/snacks', label: 'Snacks' },
                { href: '/getraenke', label: 'Getränke' },
                { href: '/lageplan', label: 'Lageplan' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Pizzakurier Seetreff Erlenbach. Alle Rechte vorbehalten.</p>
          <p className="mt-1">Rebuilt by ÆON CopyCat</p>
        </div>
      </div>
    </footer>
  )
}
