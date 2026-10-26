'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Specs', href: '#specs' },
  { label: 'Contact', href: '#contact' },
]

export function Logo() {
  return (
    <a href="#overview" className="flex items-center gap-3" aria-label="Noah Industries home">
      <span className="flex size-8 items-center justify-center rounded-md bg-foreground font-mono text-sm font-bold text-background">
        N
      </span>
      <span className="font-mono text-sm font-bold tracking-widest text-foreground">
        Noah <span className="uppercase">Industries</span>
      </span>
    </a>
  )
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 z-50 mx-auto max-w-7xl px-4 transition-all duration-500 md:px-6',
        scrolled ? 'top-0' : 'top-4 md:top-8',
      )}
    >
      <div
        className={cn(
          'flex h-14 items-center justify-between border px-5 transition-all duration-500 md:px-10',
          scrolled
            ? 'rounded-none border-x-0 border-t-0 border-border bg-background/85 backdrop-blur-md md:h-16'
            : 'rounded-full border-white/15 bg-white/5 backdrop-blur-md',
        )}
      >
        <Logo />
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contact"
          className="rounded-md bg-foreground px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-background transition-opacity hover:opacity-85"
        >
          Inquire
        </a>
      </div>
    </header>
  )
}
