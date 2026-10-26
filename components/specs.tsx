'use client'

import { useEffect, useState } from 'react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const specGroups = [
  {
    id: 'propulsion',
    index: '01',
    title: 'Engine & Propulsion',
    tag: 'Propulsion',
    body: "The Executioner's propulsion system utilizes a proprietary hybrid-cycle engine, capable of switching between high-efficiency cruise and afterburner combat modes instantly. Thermal masking reduces IR signature by 85%.",
    stats: [
      { label: 'Hyper-Flux Turbine', value: 'Mach 2.4' },
      { label: 'Range', value: '4,500 nm' },
      { label: 'Climb Rate', value: '60,000 ft/min' },
      { label: 'Vector Thrust', value: '360° Axis' },
    ],
  },
  {
    id: 'autonomy',
    index: '02',
    title: 'Weapon System Autonomy & AI',
    tag: 'Autonomy',
    body: 'Integrated combat AI processes battlefield data in real-time, identifying threats and executing engagement protocols without pilot latency. Swarm-ready architecture allows for coordinated strikes with allied units.',
    stats: [
      { label: 'Target Tracking', value: '500+ Simultaneous' },
      { label: 'Reaction Time', value: '< 0.05ms' },
      { label: 'Decision Model', value: 'Level 5 Autonomous' },
      { label: 'Comms', value: 'Quantum Encrypted' },
    ],
  },
  {
    id: 'durability',
    index: '03',
    title: 'Durability & Engineering',
    tag: 'Durability',
    body: 'The airframe is constructed from a classified memory-metal alloy that resists kinetic damage and extreme thermal stress. Redundant systems ensure operational capability even after sustaining 40% structural compromise.',
    stats: [
      { label: 'Hull Composition', value: 'Carbon-Titanium Weave' },
      { label: 'G-Force Limit', value: '18G Sustained' },
      { label: 'EMP Shielding', value: 'Military Grade' },
      { label: 'Maintenance', value: 'Self-Diagnostic' },
    ],
  },
]

function SpecRadar({ tag }: { tag: string }) {
  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-xl items-center justify-center lg:flex" aria-hidden="true">
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-4 rounded-full border border-dashed border-white/10" />
      <div className="absolute inset-16 rounded-full border border-white/5" />
      <div className="absolute inset-16 animate-radar rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,oklch(0.55_0.22_262/0.18)_60deg,transparent_90deg)]" />
      <div className="relative ml-auto mr-12 text-right">
        <p className="text-8xl font-bold leading-none text-white/10">SPEC</p>
        <p className="mt-2 font-mono text-sm uppercase tracking-[0.5em] text-signal">{tag}</p>
      </div>
    </div>
  )
}

export function Specs() {
  const [active, setActive] = useState(specGroups[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    for (const group of specGroups) {
      const el = document.getElementById(group.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section id="specs" className="relative scroll-mt-16 bg-background">
      <div className="px-4 pb-8 pt-32 text-center">
        <Reveal>
          <h2 className="text-chrome font-mono text-5xl font-bold uppercase md:text-7xl">Technical Data</h2>
          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-muted-foreground">
            Classified Specifications // Authorized Eyes Only
          </p>
        </Reveal>
      </div>

      <nav
        aria-label="Specification categories"
        className="sticky top-14 z-40 border-y border-border bg-background/90 backdrop-blur-md md:top-16"
      >
        <ul className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-4 md:gap-10 md:px-24">
          {specGroups.map((group) => (
            <li key={group.id} className="shrink-0">
              <a
                href={`#${group.id}`}
                aria-current={active === group.id ? 'true' : undefined}
                className={cn(
                  'relative block py-6 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-colors md:text-sm',
                  active === group.id ? 'text-signal' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {group.title}
                <span
                  className={cn(
                    'absolute inset-x-0 bottom-0 h-1 rounded-full bg-signal-strong shadow-[0_0_16px] shadow-signal-strong transition-opacity',
                    active === group.id ? 'opacity-100' : 'opacity-0',
                  )}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {specGroups.map((group) => (
        <article
          key={group.id}
          id={group.id}
          className="mx-auto grid min-h-[80vh] max-w-7xl scroll-mt-36 items-center gap-12 px-4 py-24 md:px-24 lg:grid-cols-2"
        >
          <Reveal>
            <h3 className="flex items-baseline gap-5 text-4xl font-bold uppercase text-foreground md:text-5xl">
              <span className="font-mono text-5xl text-signal-strong/70 md:text-6xl">{group.index}</span>
              {group.title}
            </h3>
            <p className="mt-8 border-l-2 border-signal-strong/40 pl-6 text-lg leading-relaxed text-muted-foreground">
              {group.body}
            </p>
            <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {group.stats.map((stat) => (
                <div key={stat.label} className="border border-white/10 bg-card/60 p-5">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</dt>
                  <dd className="mt-2 font-mono text-xl font-bold text-signal">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <SpecRadar tag={group.tag} />
        </article>
      ))}
    </section>
  )
}
