import { Logo } from '@/components/site-header'

const columns = [
  { title: 'Systems', links: ['Executioner X1', 'Vulcan Systems', 'Command Link', 'Defense Grid'] },
  { title: 'Company', links: ['Mission', 'Careers', 'Investors', 'Press'] },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background px-4 pt-20 md:px-24">
      <div className="mx-auto grid max-w-7xl gap-12 pb-16 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-muted-foreground">
            Defining the future of autonomous aerial superiority. Designed in California. Fabricated in Orbit.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">{col.title}</h3>
            <ul className="mt-6 flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#overview" className="text-muted-foreground transition-colors hover:text-foreground">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">Status</h3>
          <p className="mt-6 flex items-center gap-2 font-mono text-sm font-bold text-online">
            <span className="size-2 animate-pulse rounded-full bg-online" aria-hidden="true" />
            SYSTEM ONLINE
          </p>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-border py-8 font-mono text-[11px] uppercase tracking-wider text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© 2026 Noah Industries. All rights reserved. Classified clearance req.</p>
        <div className="flex gap-6">
          <a href="#overview" className="hover:text-foreground">
            Privacy_Protocol
          </a>
          <a href="#overview" className="hover:text-foreground">
            Terms_Of_Engagement
          </a>
        </div>
      </div>
    </footer>
  )
}
