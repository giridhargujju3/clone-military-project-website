import { Reveal } from '@/components/reveal'

const tiers = [
  {
    name: 'Research / Civilian',
    price: '$250,000',
    features: ['Restricted Flight Params', 'Standard Support', '1-Year Warranty'],
  },
  {
    name: 'Defense Contractor',
    price: '$850,000',
    features: ['Full Weapon Systems', 'Military Encryption', 'Priority Support'],
  },
  {
    name: 'Enterprise Security',
    price: 'Custom Quote',
    features: ['Perimeter Defense', 'Autonomous Patrol', 'Fleet Management'],
  },
]

export function Pricing() {
  return (
    <section aria-labelledby="pricing-title" className="mx-auto max-w-7xl px-4 py-32 md:px-24">
      <Reveal className="text-center">
        <h2 id="pricing-title" className="text-chrome font-mono text-4xl font-bold uppercase md:text-6xl">
          Acquisition Tiers
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">Select your operational clearance level.</p>
      </Reveal>
      <ul className="mt-16 grid gap-8 md:grid-cols-3">
        {tiers.map((tier, i) => (
          <Reveal as="li" key={tier.name} delay={i * 120}>
            <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-card/60 p-8 transition-colors hover:border-signal/50">
              <h3 className="font-mono text-lg font-bold uppercase text-foreground">{tier.name}</h3>
              <p className="mt-2 text-3xl font-bold text-signal">{tier.price}</p>
              <ul className="mt-8 flex flex-col gap-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-signal-strong" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-10 rounded-lg border border-white/15 bg-background py-4 text-center font-mono text-sm font-bold uppercase tracking-widest text-foreground transition-colors group-hover:border-signal group-hover:bg-signal-strong"
              >
                Select System
              </a>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
