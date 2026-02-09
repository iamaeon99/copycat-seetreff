'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/pizza', label: 'Pizza' },
  { href: '/snacks', label: 'Snacks' },
  { href: '/getraenke', label: 'Getränke' },
  { href: '/lageplan', label: 'Lageplan' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white text-stone-800 shadow-md dark:bg-stone-950 dark:text-white dark:shadow-lg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="Seetreff Erlenbach - Startseite">
            <Image
              src="/images/logo.webp"
              alt="Seetreff Erlenbach Logo"
              width={120}
              height={65}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Hauptnavigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-brand-600 text-white'
                    : 'text-stone-600 hover:bg-warm-100 hover:text-brand-600 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg p-2 text-stone-600 hover:bg-warm-100 dark:text-stone-300 dark:hover:bg-stone-800"
              aria-label={menuOpen ? 'Menü schliessen' : 'Menü öffnen'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-stone-200 dark:border-stone-800 pb-4 md:hidden" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-brand-600 text-white'
                    : 'text-stone-600 hover:bg-warm-100 hover:text-brand-600 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
